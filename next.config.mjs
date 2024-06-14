/** @type {import('next').NextConfig} */

const ASSET_PREFIX = 'https://target.overpowerman.click'

const nextConfig = {
  assetPrefix: ASSET_PREFIX,
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

export default nextConfig;
