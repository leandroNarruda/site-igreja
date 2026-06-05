"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

type MobileNavigationMenuProps = {
  navItems: NavItem[];
};

export function MobileNavigationMenu({ navItems }: MobileNavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        className="size-9 shrink-0 overflow-hidden rounded-full shadow-sm ring-1 ring-stone-200 transition hover:ring-cedar/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar min-[390px]:size-11"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        <Image
          src="/fachada-otimizada.jpg"
          alt=""
          width={44}
          height={44}
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </button>

      {isOpen ? (
        <div className="absolute left-0 top-[calc(100%+0.5rem)] z-50 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xl shadow-stone-900/12">
          <nav className="grid p-2" aria-label="Navegação principal mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-ink transition hover:bg-linen hover:text-cedar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cedar"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
