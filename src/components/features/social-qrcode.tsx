"use client";

import { useState } from "react";

type SocialKey = "xiaohongshu" | "douyin" | "wechat" | "instagram";

const socialMap: Record<SocialKey, { icon: string; src: string; alt: string; subtitle: string }> = {
  xiaohongshu: {
    icon: "/icons/social/xiaohongshu-icon.png",
    src: "/qrcodes/xiaohongshu-QR.jpg",
    alt: "小红书二维码",
    subtitle: "扫码关注小红书",
  },
  douyin: {
    icon: "/icons/social/tik-tok-icon.png",
    src: "/qrcodes/tiktok-QR.jpg",
    alt: "抖音二维码",
    subtitle: "扫码关注抖音",
  },
  wechat: {
    icon: "/icons/social/wechat-icon.png",
    src: "/qrcodes/wechat-QR.jpg",
    alt: "微信公众号二维码",
    subtitle: "扫码关注公众号",
  },
  instagram: {
    icon: "/icons/social/instagram-icon.png",
    src: "/qrcodes/instagram-QR.jpg",
    alt: "Instagram 二维码",
    subtitle: "扫码关注Instagram",
  },
};

const socialKeys = Object.keys(socialMap) as SocialKey[];

export function SocialQrcode() {
  const [activeKey, setActiveKey] = useState<SocialKey>("xiaohongshu");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <>
      <div className="social-icons" role="group" aria-label="社交媒体二维码">
        {socialKeys.map((key) => {
          const item = socialMap[key];
          const isActive = activeKey === key;

          return (
            <button
              key={key}
              className={`social-button${isActive ? " active" : ""}`}
              type="button"
              aria-label={item.alt.replace("二维码", "")}
              title={item.alt.replace("二维码", "")}
              onClick={() => {
                if (isActive && isPopoverOpen) {
                  setIsPopoverOpen(false);
                  return;
                }
                setActiveKey(key);
                setIsPopoverOpen(true);
              }}
            >
              <img className="social-icon" src={item.icon} alt="" aria-hidden="true" />
              {isActive && isPopoverOpen ? (
                <div className="qrcode-popover" role="dialog" aria-label={`${item.alt}弹窗`}>
                  <img className="qrcode-popover-image" src={item.src} alt={item.alt} />
                  <p className="qrcode-popover-title">毛草乐园MaocoLand</p>
                  <p className="qrcode-popover-subtitle">{item.subtitle}</p>
                </div>
              ) : null}
            </button>
          );
        })}
      </div>
    </>
  );
}
