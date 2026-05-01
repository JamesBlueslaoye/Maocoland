"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "zh-CN";
  }, [isEnglish]);

  return (
    <header className="hero-topbar">
      <button className="menu-button" aria-label="打开菜单" type="button">
        <img className="menu-icon" src="/icons/menu-icon.png" alt="" aria-hidden="true" />
      </button>

      <a className="brand-center" href="#" aria-label="回到首页">
        <img src="/icons/MaocoLOGO_TB.png" alt="毛草乐园 Logo" />
      </a>

      <div className="top-actions">
        <button className="pill-button" type="button" onClick={() => setIsEnglish((prev) => !prev)}>
          {isEnglish ? "EN / 中" : "中 / EN"}
        </button>
        <button className="icon-button" aria-label="购物车" type="button">
          <img className="cart-icon" src="/icons/online-shopping-icon.png" alt="" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
