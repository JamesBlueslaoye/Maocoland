"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useLocaleStore } from "@/store";

export function Header() {
  const locale = useLocaleStore((s) => s.locale);
  const toggleLocale = useLocaleStore((s) => s.toggleLocale);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
  }, [locale]);

  return (
    <header className="hero-topbar">
      <button className="menu-button" aria-label="打开菜单" type="button">
        <Image
          className="menu-icon"
          src="/icons/menu-icon.png"
          alt=""
          width={18}
          height={18}
          aria-hidden
        />
      </button>

      <a className="brand-center" href="/" aria-label="回到首页">
        <Image
          src="/icons/MaocoLOGO_TB.png"
          alt="毛草乐园 Logo"
          width={256}
          height={128}
          className="h-auto w-[64px] max-w-[64px] object-contain"
        />
      </a>

      <div className="top-actions">
        <button className="pill-button" type="button" onClick={toggleLocale}>
          {locale === "en" ? "EN / 中" : "中 / EN"}
        </button>
        <button className="icon-button" aria-label="购物车" type="button">
          <Image
            className="cart-icon"
            src="/icons/online-shopping-icon.png"
            alt=""
            width={18}
            height={18}
            aria-hidden
          />
        </button>
      </div>
    </header>
  );
}
