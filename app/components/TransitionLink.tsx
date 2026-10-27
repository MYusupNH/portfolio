"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

type TransitionLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

/*
  State dibuat di level modul (bukan useRef) karena TransitionLink
  yang diklik ada di halaman lama dan akan di-unmount saat pindah
  halaman. Instance baru di halaman tujuan harus tahu bahwa
  transisi sedang berlangsung.
*/
let isNavigating = false;
let inTimer: number | undefined;

const OUT_MS = 300;
const IN_MS = 700;
const SAFETY_MS = 3000;

function finishTransition() {
  document.body.classList.remove("page-transition-out");
  document.body.classList.remove("page-transition-in");
  isNavigating = false;
}

export default function TransitionLink({
  href,
  className,
  children,
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Jalan di halaman tujuan: buka tirai
  useEffect(() => {
    if (!isNavigating) return;

    document.body.classList.remove("page-transition-out");
    document.body.classList.add("page-transition-in");

    window.clearTimeout(inTimer);
    inTimer = window.setTimeout(finishTransition, IN_MS);
  }, [pathname]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (
      href === pathname ||
      !href.startsWith("/") ||
      href.startsWith("//")
    ) {
      return;
    }

    event.preventDefault();

    if (isNavigating) return;
    isNavigating = true;

    document.body.classList.remove("page-transition-in");
    document.body.classList.add("page-transition-out");

    window.setTimeout(() => {
      router.push(href);
    }, OUT_MS);

    // Pengaman: kalau halaman tujuan gagal dimuat atau tidak punya
    // TransitionLink, tirai tidak boleh menutup layar selamanya.
    window.setTimeout(() => {
      if (isNavigating) finishTransition();
    }, SAFETY_MS);
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}