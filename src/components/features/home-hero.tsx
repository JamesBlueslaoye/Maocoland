import type { CSSProperties } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { getBannerIntrinsic, VERTICAL_BANNER_SRC } from "@/lib/banners";

const DEFAULT_BANNER = "/images/page-banner-1.webp";

type HomeHeroProps = {
  /** 横版 Banner（桌面 / 横屏视口） */
  bannerSrc?: string;
  /** 竖版 Banner（视口宽高比 ≤ 1 时由 `<picture>` 切换），默认 `Vertical Banner.webp` */
  portraitBannerSrc?: string;
};

export function HomeHero({
  bannerSrc = DEFAULT_BANNER,
  portraitBannerSrc = VERTICAL_BANNER_SRC,
}: HomeHeroProps) {
  const land = getBannerIntrinsic(bannerSrc);
  const port = getBannerIntrinsic(portraitBannerSrc);

  const mediaStyle = {
    "--hero-ar-landscape": `${land.width} / ${land.height}`,
    "--hero-ar-portrait": `${port.width} / ${port.height}`,
  } as CSSProperties;

  return (
    <section className="hero-banner" aria-label="首页横幅">
      <div className="hero-banner-media" style={mediaStyle}>
        <div className="hero-banner-picture-slot">
          <picture>
            <source
              media="(max-aspect-ratio: 1/1)"
              srcSet={portraitBannerSrc}
              type="image/webp"
            />
            <Image
              className="hero-image"
              src={bannerSrc}
              alt="毛草乐园首页 Banner"
              fill
              sizes="100vw"
              priority
            />
          </picture>
        </div>
      </div>
      <Header />
    </section>
  );
}
