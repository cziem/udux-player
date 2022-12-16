const env = process.env
const isProd = env.NODE_ENV === "production"

export const Config = {
  PORT: env.PORT ? env.PORT : 3000,
  DEBUG: isProd ? false : true,
}
