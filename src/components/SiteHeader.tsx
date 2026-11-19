import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/youtube", label: "Interesting Tech for V I" },
  { href: "/blind-tech-community", label: "Blind Tech Community" },
  { href: "/learning", label: "Learning in Public" },
  { href: "/thinking", label: "The Way I Think" },
  { href: "/contact", label: "Connect" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white" role="banner">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 hover:text-brand-700 focus:outline-none"
            >
              Kuldeep Behera
            </Link>
            <p className="text-sm text-gray-600">
              Software development · Accessible technology · Content creation
            </p>
          </div>
          <nav aria-label="Main">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-brand-700 underline-offset-4 hover:underline focus:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
