export async function getFakeCaptcha(
  params: {
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  const newparams = new URLSearchParams(params).toString();
  return fetch(`/api/login/captcha?${newparams}`);
}
