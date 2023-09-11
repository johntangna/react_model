/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  // 打包文件夹
  distDir: 'omsmall',
  // 打包输出类型
  output: 'export',
  // 是否启用严格模式
  reactStrictMode: true,
  // 是否最小优化
  swcMinify: true,
  // 模块化导入
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  // 图片优化
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

module.exports = nextConfig;
