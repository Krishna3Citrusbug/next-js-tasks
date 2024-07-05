"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];
export default function Header() {
  const pathName = usePathname();
  return (
    <header className="flex justify-between p-8 bg-[#f9f9f9] items-center">
      <h1 className="text-4xl font-bold">Logo</h1>
      <ul className="flex">
        {navLinks.map((link) => {
          const isActive = pathName === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  isActive
                    ? "text-xl ml-8 font-medium text-blue-800"
                    : "text-black text-xl ml-8 font-medium"
                }
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
