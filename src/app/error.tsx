"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 bg-[var(--notion-warm-white)] px-6 py-16">
      <h1 className="text-lg font-semibold text-[var(--notion-black)]">出错了</h1>
      <p className="max-w-md text-center text-sm text-[var(--notion-gray-500)]">
        页面加载遇到问题，请稍后重试。
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[var(--notion-black)] transition hover:border-black/20"
      >
        重试
      </button>
    </div>
  );
}
