/** @type {import('next').NextConfig} */

const nextConfig = {
  // 严格模式
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    additionalData: '@import "@/styles/index.scss";',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', //图片资源的协议
        hostname: 'www.test.com', //图片资源的域名
      },
    ],
  },
};

export default nextConfig;
