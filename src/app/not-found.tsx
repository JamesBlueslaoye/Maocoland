import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 bg-[var(--notion-white)] px-6 py-16">
      <p className="text-sm font-semibold text-[var(--notion-black)]">404</p>
      <p className="text-sm text-[var(--notion-gray-500)]">未找到该页面</p>
      <Link
        href="/"
        className="mt-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[var(--notion-black)] transition hover:border-black/20"
      >
        返回首页
      </Link>
    </div>
  );
}
