export async function getFakeCaptcha(params: { phone?: string }) {
  const newparams = new URLSearchParams(params).toString();
  return fetch(`/api/login/captcha?${newparams}`);
}
