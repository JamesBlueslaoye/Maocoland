import { Header } from "../layout/header";

export function HomeHero() {
  return (
    <section className="hero-banner" aria-label="首页横幅">
      <img className="hero-image" src="/images/page-banner-1.webp" alt="毛草乐园首页 Banner" />
      <Header />
    </section>
  );
}
