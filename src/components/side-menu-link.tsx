import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  route: string;
};

export default function SideMenuLink({ children, route }: Props) {
  const pathname = usePathname();
  const path = route === "home" ? "/" : `/${route}`;
  const isActive = (path: string) => pathname === path;

  const capitalizeFirstLetter = (str: string): string =>
    str.length ? str[0].toUpperCase() + str.slice(1) : str;
  const displayName = capitalizeFirstLetter(route);
  return (
    <Link
      href={path}
      className={`flex ml-2 my-2 p-2 text-slate-500 hover:text-slate-900 ${
        isActive(path) ? "bg-slate-200 rounded-md" : undefined
      }`}
    >
      {children}
      <p className="pt-1 pl-2 ">{displayName}</p>
    </Link>
  );
}
