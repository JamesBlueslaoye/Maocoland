/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * 缓解开发时 Watchpack `EMFILE: too many open files`：
   * - 忽略不参与编译的大目录（如本地资料图）
   * - 可选环境变量 `WATCHPACK_POLLING=1` 启用轮询（文件描述符紧张环境）
   */
  webpack: (config, { dev }) => {
    if (dev) {
      const usePolling = process.env.WATCHPACK_POLLING === "1";
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/.next/**",
          "**/资料图*/**",
        ],
        ...(usePolling
          ? { poll: 1000, aggregateTimeout: 300 }
          : {}),
      };
    }
    return config;
  },
};

export default nextConfig;
