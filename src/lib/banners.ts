/** 竖版 Banner（文件名含空格，URL 需编码） */
export const VERTICAL_BANNER_SRC = "/images/Vertical%20Banner.webp";

/** 各素材像素尺寸，用于容器 aspect-ratio */
export const BANNER_INTRINSIC: Record<string, { width: number; height: number }> = {
  "/images/page-banner-1.webp": { width: 6047, height: 3024 },
  [VERTICAL_BANNER_SRC]: { width: 2480, height: 3508 },
};

export function getBannerIntrinsic(src: string) {
  return BANNER_INTRINSIC[src] ?? { width: 3024, height: 1512 };
}
