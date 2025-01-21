import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  route: string;
};

export default function ToggleMenuButton({ route }: Props) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const capitalizeFirstLetter = (str: string): string =>
    str.length ? str[0].toUpperCase() + str.slice(1) : str;
  const displayName = capitalizeFirstLetter(route);
  return (
    <Link
      href={`/course-management/${route}`}
      className={`mx-1 my-1 py-1 pr-2 text-slate-500 hover:text-slate-900 rounded-md ${
        isActive(`/course-management/${route}`)
          ? "bg-black text-white"
          : "bg-slate-300 text-black"
      }`}
    >
      <p className="pt-1 pl-2">{displayName}</p>
    </Link>
  );
}
