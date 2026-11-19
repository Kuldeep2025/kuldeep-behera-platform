import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page Project",
  description:
    "Responsive HTML/CSS/JavaScript landing page for an AI-driven data-automation concept, developed by Kuldeep Behera.",
};

export default function LandingPageProjectPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
          Projects
        </Link>
        <span aria-hidden="true"> / </span>
        <span>Landing Page Project</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900">Landing Page Project</h1>
      <p className="mt-2 text-sm text-gray-600">
        Status: Completed frontend project · Technologies: HTML, CSS, JavaScript
      </p>

      <section className="mt-8" aria-labelledby="purpose-heading">
        <h2 id="purpose-heading" className="text-xl font-semibold text-gray-900">
          Purpose
        </h2>
        <p className="mt-3 text-gray-700">
          This project presents a clear frontend experience for an AI-driven data-automation platform concept. It was developed during a hackathon organised through IIT Bhubaneswar and focuses on translating a technology idea into a usable product-style landing page.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="impl-heading">
        <h2 id="impl-heading" className="text-xl font-semibold text-gray-900">
          Implementation (verified from repository)
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
          <li>Semantic HTML structure</li>
          <li>Responsive layout</li>
          <li>Multi-currency pricing presentation</li>
          <li>Monthly and annual billing logic in the frontend</li>
          <li>Feature presentation that adapts between a bento-style layout and an accordion on smaller screens</li>
          <li>GitHub Pages deployment workflow</li>
          <li>Included demonstration video in the repository</li>
        </ul>
        <p className="mt-3 text-gray-700">
          The implementation uses plain HTML, CSS and JavaScript. No backend or paid APIs are required to view the page.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-xl font-semibold text-gray-900">
          Source
        </h2>
        <p className="mt-3">
          <a
            href="https://github.com/Kuldeep2025/Landing_Page_project"
            className="font-medium text-brand-700 hover:underline focus:outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/Kuldeep2025/Landing_Page_project
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
