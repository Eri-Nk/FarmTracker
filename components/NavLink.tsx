"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "transition font-medium",
        isActive ? "text-green-600 font-bold" : " hover:text-green-600",
      )}
    >
      {children}
    </Link>
  );
}
