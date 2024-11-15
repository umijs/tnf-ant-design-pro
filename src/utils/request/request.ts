/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable @typescript-eslint/no-unused-expressions */
// @ts-nocheck
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import { errorConfig } from './requestErrorConfig';

type ResultWithData<T = any> = { data?: T; [key: string]: any };

// request 方法 opts 参数的接口
interface IRequestOptions extends AxiosRequestConfig {
  skipErrorHandler?: boolean;
  requestInterceptors?: IRequestInterceptorTuple[];
  responseInterceptors?: IResponseInterceptorTuple[];
  [key: string]: any;
}

interface IRequestOptionsWithResponse extends IRequestOptions {
  getResponse: true;
}

interface IRequestOptionsWithoutResponse extends IRequestOptions {
  getResponse: false;
}

interface IRequest {
  <T = any>(
    url: string,
    opts: IRequestOptionsWithResponse,
  ): Promise<AxiosResponse<T>>;
  <T = any>(url: string, opts: IRequestOptionsWithoutResponse): Promise<T>;
  <T = any>(url: string, opts: IRequestOptions): Promise<T>; // getResponse 默认是 false， 因此不提供该参数时，只返回 data
  <T = any>(url: string): Promise<T>; // 不提供 opts 时，默认使用 'GET' method，并且默认返回 data
}

type RequestError = AxiosError | Error;

interface IErrorHandler {
  (error: RequestError, opts: IRequestOptions): void;
}
type WithPromise<T> = T | Promise<T>;
type IRequestInterceptorAxios = (
  config: IRequestOptions,
) => WithPromise<IRequestOptions>;
type IRequestInterceptorUmiRequest = (
  url: string,
  config: IRequestOptions,
) => WithPromise<{ url: string; options: IRequestOptions }>;
type IRequestInterceptor =
  | IRequestInterceptorAxios
  | IRequestInterceptorUmiRequest;
type IErrorInterceptor = (error: Error) => Promise<Error>;
type IResponseInterceptor = <T = any>(
  response: AxiosResponse<T>,
) => WithPromise<AxiosResponse<T>>;
type IRequestInterceptorTuple =
  | [IRequestInterceptor, IErrorInterceptor]
  | [IRequestInterceptor]
  | IRequestInterceptor;
type IResponseInterceptorTuple =
  | [IResponseInterceptor, IErrorInterceptor]
  | [IResponseInterceptor]
  | IResponseInterceptor;

export interface RequestConfig<T = any> extends AxiosRequestConfig {
  errorConfig?: {
    errorHandler?: IErrorHandler;
    errorThrower?: (res: T) => void;
  };
  requestInterceptors?: IRequestInterceptorTuple[];
  responseInterceptors?: IResponseInterceptorTuple[];
}

let requestInstance: AxiosInstance;
let config: RequestConfig;
const getConfig = (): RequestConfig => {
  if (config) return config;
  config = errorConfig;
  return config;
};

const getRequestInstance = (): AxiosInstance => {
  if (requestInstance) return requestInstance;
  const config = getConfig();
  requestInstance = axios.create(config);

  config?.requestInterceptors?.forEach((interceptor) => {
    if (interceptor instanceof Array) {
      requestInstance.interceptors.request.use(async (config) => {
        const { url } = config;
        if (interceptor[0].length === 2) {
          const { url: newUrl, options } = await interceptor[0](url, config);
          return { ...options, url: newUrl };
        }
        return interceptor[0](config);
      }, interceptor[1]);
    } else {
      requestInstance.interceptors.request.use(async (config) => {
        const { url } = config;
        if (interceptor.length === 2) {
          const { url: newUrl, options } = await interceptor(url, config);
          return { ...options, url: newUrl };
        }
        return interceptor(config);
      });
    }
  });

  config?.responseInterceptors?.forEach((interceptor) => {
    interceptor instanceof Array
      ? requestInstance.interceptors.response.use(
          interceptor[0],
          interceptor[1],
        )
      : requestInstance.interceptors.response.use(interceptor);
  });

  // 当响应的数据 success 是 false 的时候，抛出 error 以供 errorHandler 处理。
  requestInstance.interceptors.response.use((response) => {
    const { data } = response;
    if (data?.success === false && config?.errorConfig?.errorThrower) {
      config.errorConfig.errorThrower(data);
    }
    return response;
  });
  return requestInstance;
};

const request: IRequest = (url: string, opts: any = { method: 'GET' }) => {
  const requestInstance = getRequestInstance();
  const config = getConfig();
  const {
    getResponse = false,
    requestInterceptors,
    responseInterceptors,
  } = opts;
  const requestInterceptorsToEject = requestInterceptors?.map((interceptor) => {
    if (interceptor instanceof Array) {
      return requestInstance.interceptors.request.use(async (config) => {
        const { url } = config;
        if (interceptor[0].length === 2) {
          const { url: newUrl, options } = await interceptor[0](url, config);
          return { ...options, url: newUrl };
        }
        return interceptor[0](config);
      }, interceptor[1]);
    } else {
      return requestInstance.interceptors.request.use(async (config) => {
        const { url } = config;
        if (interceptor.length === 2) {
          const { url: newUrl, options } = await interceptor(url, config);
          return { ...options, url: newUrl };
        }
        return interceptor(config);
      });
    }
  });
  const responseInterceptorsToEject = responseInterceptors?.map(
    (interceptor) => {
      return interceptor instanceof Array
        ? requestInstance.interceptors.response.use(
            interceptor[0],
            interceptor[1],
          )
        : requestInstance.interceptors.response.use(interceptor);
    },
  );
  return new Promise((resolve, reject) => {
    requestInstance
      .request({ ...opts, url })
      .then((res) => {
        requestInterceptorsToEject?.forEach((interceptor) => {
          requestInstance.interceptors.request.eject(interceptor);
        });
        responseInterceptorsToEject?.forEach((interceptor) => {
          requestInstance.interceptors.response.eject(interceptor);
        });
        resolve(getResponse ? res : res.data);
      })
      .catch((error) => {
        requestInterceptorsToEject?.forEach((interceptor) => {
          requestInstance.interceptors.request.eject(interceptor);
        });
        responseInterceptorsToEject?.forEach((interceptor) => {
          requestInstance.interceptors.response.eject(interceptor);
        });
        try {
          const handler = config?.errorConfig?.errorHandler;
          if (handler) handler(error, opts, config);
        } catch (e) {
          reject(e);
        }
        reject(error);
      });
  });
};

export { request, getRequestInstance };
