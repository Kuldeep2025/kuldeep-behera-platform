import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DataStructures",
  description: "Practice repository for data structures and algorithms by Kuldeep Behera.",
};

export default function DataStructuresPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
          Projects
        </Link>
        <span aria-hidden="true"> / </span>
        <span>DataStructures</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900">DataStructures</h1>
      <p className="mt-2 text-sm text-gray-600">Status: Ongoing practice</p>

      <section className="mt-8" aria-labelledby="purpose-heading">
        <h2 id="purpose-heading" className="text-xl font-semibold text-gray-900">Purpose</h2>
        <p className="mt-3 text-gray-700">
          This repository collection is used for practising data structures, algorithms and programming logic. It is presented as ongoing development of computer science fundamentals through practical problem-solving rather than as a finished product.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-xl font-semibold text-gray-900">Source</h2>
        <p className="mt-3">
          <a
            href="https://github.com/Kuldeep2025/DataStructures"
            className="font-medium text-brand-700 hover:underline focus:outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/Kuldeep2025/DataStructures
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
