/** @type {import('next').NextConfig} */

const port = process.env.PORT || 3000;

const HOST_MAP = {
  prod: '',
  dev: `localhost:${port}`,
  qe: ''
}

const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST: HOST_MAP[process.env.NODE_ENV],
    LIBRA_HOST: 'https://libra.vakilsearch.com'
  }
}

module.exports = nextConfig
