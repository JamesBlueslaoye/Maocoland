import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * 静态站可先不配 R2；需要 ISR/增量缓存时再接入 overrides。
 * @see https://opennext.js.org/cloudflare/caching
 */
export default defineCloudflareConfig({});
