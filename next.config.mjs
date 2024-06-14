/** @type {import('next').NextConfig} */

const ASSET_PREFIX = 'http://localhost:3001'

const nextConfig = {
  assetPrefix: ASSET_PREFIX,
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

export default nextConfig;
