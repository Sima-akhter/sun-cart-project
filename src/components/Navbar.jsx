/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, Sun, X } from "lucide-react";
import { toast } from "react-toastify";

import ThemeToggler from "@/providers/ThemeToggler";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "My Profile", href: "/profile" },
];

const Navbar = () => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully");
          router.push("/");
          router.refresh();
        },
      },
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-black/90">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Sun size={20} strokeWidth={1.5} />

          <span className="text-lg font-semibold uppercase tracking-tight">
            Sun-Cart
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium transition hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <div className="hidden md:block">
            <ThemeToggler />
          </div>

          {!mounted || isPending ? (
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
          ) : user ? (
            <div className="hidden items-center gap-3 md:flex">

              {/* USER AVATAR */}
              <Link href="/profile">
                <Image
                  src={
                    user.image ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border border-black object-cover dark:border-white"
                />
              </Link>

              {/* LOGOUT BUTTON */}
              <button
                onClick={handleLogout}
                className="rounded-sm border border-black px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden items-center gap-3 md:flex">

              {/* LOGIN BUTTON */}
              <Link
                href="/signin"
                className="rounded-sm border border-black px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                Login
              </Link>

              {/* REGISTER BUTTON */}
              <Link
                href="/signup"
                className="rounded-sm bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
              >
                Register
              </Link>
            </div>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="space-y-4 border-t border-black/10 bg-white px-4 py-4 dark:border-white/10 dark:bg-black md:hidden">

          {/* THEME */}
          <div className="flex items-center justify-between border-b border-black/10 pb-4 dark:border-white/10">
            <span className="text-sm font-medium">Theme</span>
            <ThemeToggler />
          </div>

          {/* NAV LINKS */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}

          {/* LOGGED IN */}
          {mounted && user && !isPending && (
            <div className="space-y-3 pt-2">

              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <Image
                  src={
                    user.image ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border border-black object-cover dark:border-white"
                />

                <span className="text-sm font-medium">
                  My Profile
                </span>
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full rounded-sm border border-black px-4 py-2 text-sm font-medium dark:border-white"
              >
                Logout
              </button>
            </div>
          )}

          {/* LOGGED OUT */}
          {mounted && !user && !isPending && (
            <div className="flex flex-col gap-3 pt-2">

              <Link
                href="/signin"
                onClick={() => setMenuOpen(false)}
                className="rounded-sm border border-black px-4 py-2 text-center text-sm font-medium dark:border-white"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="rounded-sm bg-black px-4 py-2 text-center text-sm font-medium text-white dark:bg-white dark:text-black"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;