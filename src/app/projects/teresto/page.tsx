import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teresto",
  description: "Teresto — accessible web platform concept by Kuldeep Behera.",
};

export default function TerestoPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
          Projects
        </Link>
        <span aria-hidden="true"> / </span>
        <span>Teresto</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900">Teresto</h1>
      <p className="mt-2 text-sm text-gray-600">Status: Concept / in progress — verify repository for current implementation</p>

      <section className="mt-8" aria-labelledby="purpose-heading">
        <h2 id="purpose-heading" className="text-xl font-semibold text-gray-900">Purpose</h2>
        <p className="mt-3 text-gray-700">
          Teresto stands for “Transforming Every Resource, Enabling Social Technology Online.” The direction of the project is to make education, tools and digital content more approachable and accessible by bringing scattered resources into a more unified online experience.
        </p>
        <p className="mt-3 text-gray-700">
          Described directions include HTML-based utilities, PDF reading with OCR-related ideas, live coding environments, chat, forms and educational modules. The exact set of implemented features should be confirmed from the live repository rather than assumed complete.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-xl font-semibold text-gray-900">Source</h2>
        <p className="mt-3">
          <a
            href="https://github.com/Kuldeep2025/Teresto"
            className="font-medium text-brand-700 hover:underline focus:outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/Kuldeep2025/Teresto
          </a>
        </p>
      </section>

      <p className="mt-10">
        <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
          ← Back to all projects
        </Link>
      </p>
    </article>
  );
}
