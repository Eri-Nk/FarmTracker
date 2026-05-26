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
  return (
    <Link
      href={href}
      className={clsx(
        "transition font-medium",
        pathname === href
          ? "text-green-600 font-bold"
          : "text-gray-600 hover:text-green-600",
      )}
    >
      {children}
    </Link>
  );
}
