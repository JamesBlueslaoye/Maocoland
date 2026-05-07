import Image from "next/image";
import { SocialQrcode } from "@/components/features/social-qrcode";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <Image
          className="footer-logo"
          src="/icons/MaocoLOGO_TB.png"
          alt="毛草乐园 Logo"
          width={80}
          height={80}
        />
        <p className="brand-name">
          毛草乐园
          <br />
          MaocoLand
        </p>
      </div>

      <div className="footer-middle">
        <p className="footer-description-cn">
          在毛草乐园，我们鼓励你放下那些不必要的压力，拥抱真实的自己。无论是你的生活，还是你的心情，都可以像我们的毛绒产品一样，带着一点随性和不完美。因为正是这些潦草的瞬间，才让生活变得真实而有趣。潦草一点也没关系，因为生活本来就不该被规则束缚。
        </p>
        <p className="footer-copyright">©MaocoLand, INC.</p>
      </div>

      <div className="footer-right">
        <SocialQrcode />
      </div>
    </footer>
  );
}
