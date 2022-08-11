export const CONFIG = {
  ENV: process.env.NODE_ENV,
  DOMAIN: requireEnv('NEXT_PUBLIC_DOMAIN', 'https://yourhompage.com'),
  // API_BASE_URL: requireEnv(
  //   process.env.API_BASE_URL as string,
  //   'https://api.yourhompage.co.kr',
  // ),
  API_BASE_URL: 'http://local.toktokhan.dev:8083',
  // API_BASE_URL: 'http://172.30.1.2:8001',
  APP_NAME: requireEnv('APP_NAME', '똑똑한 개발자'),
  AUTH_TOKEN_KEY: requireEnv('AUTH_TOKEN_KEY', '@token'),
  /** For Script w:start */
  GITHUB_TOKEN: requireEnv('GITHUB_TOKEN'),
  GITHUB_REPO: requireEnv('GITHUB_REPO'),
} as const;

function requireEnv(key: string): string | undefined;
function requireEnv<T>(key: string, defaultValue: T): string | T;
function requireEnv<T>(key: string, defaultValue?: T) {
  const envValue = key;
  envValue ??
    console.error(`
  - Missing Env: ${key}
  ${defaultValue ? `- Default Value: ${defaultValue}` : ''}
  `);
  return envValue ?? defaultValue;
}
