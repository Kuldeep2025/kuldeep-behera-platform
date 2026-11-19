import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50" role="contentinfo">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Kuldeep Behera</h2>
            <p className="mt-2 text-sm text-gray-600">
              BCA student at Chandigarh University. Building software, exploring accessible technology, and creating content for visually impaired users.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Professional</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/kuldeepbehera"
                  className="text-brand-700 hover:underline focus:outline-none"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn profile
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kuldeep2025"
                  className="text-brand-700 hover:underline focus:outline-none"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/blind-tech-community" className="text-brand-700 hover:underline focus:outline-none">
                  Blind Tech Community role
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Content</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="/youtube" className="text-brand-700 hover:underline focus:outline-none">
                  Interesting Tech for V I
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/learning" className="text-brand-700 hover:underline focus:outline-none">
                  Learning in Public
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Kuldeep Behera. Built with accessibility as a core requirement.
        </p>
      </div>
    </footer>
  );
}
