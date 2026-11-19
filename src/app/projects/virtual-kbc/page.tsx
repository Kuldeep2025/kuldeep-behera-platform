import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual KBC Java Project",
  description: "Interactive Java quiz application developed for programming practice by Kuldeep Behera.",
};

export default function VirtualKbcPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
          Projects
        </Link>
        <span aria-hidden="true"> / </span>
        <span>Virtual KBC Java Project</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900">Virtual KBC Java Project</h1>
      <p className="mt-2 text-sm text-gray-600">Status: Practice project · Language: Java</p>

      <section className="mt-8" aria-labelledby="purpose-heading">
        <h2 id="purpose-heading" className="text-xl font-semibold text-gray-900">Purpose</h2>
        <p className="mt-3 text-gray-700">
          An interactive Java quiz application developed to practise programming logic, application flow and user interaction. Features are limited to what is present in the source repository; nothing beyond the confirmed code is claimed here.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-xl font-semibold text-gray-900">Source</h2>
        <p className="mt-3">
          <a
            href="https://github.com/Kuldeep2025/Vertual_KBC_Java_project"
            className="font-medium text-brand-700 hover:underline focus:outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/Kuldeep2025/Vertual_KBC_Java_project
          </a>
        </p>
        <p className="mt-2 text-sm text-gray-600">Note the repository spelling “Vertual” as it appears on GitHub.</p>
      </section>

      <p className="mt-10">
        <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
          ← Back to all projects
        </Link>
      </p>
    </article>
  );
}
