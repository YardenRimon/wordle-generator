/** @type {import('next').NextConfig} */
const { DB_NAME, DB_HOST, DB_USER, DB_PASS } = process.env;

const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_NAME,
    DB_HOST,
    DB_USER,
    DB_PASS,
  },
};

module.exports = nextConfig;
