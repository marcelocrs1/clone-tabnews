/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
  config.watchOptions = {
  poll: 1000,
  aggregateTimeout: 300,
  };
  return config;
  },
  onDemandEntries: {
  maxInactiveAge: 60 * 1000,
  pagesBufferLength: 5,
  },
  };
  
  module.exports = nextConfig;