import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ReadSphere",
  description:
    "AI-powered intelligent blogging platform built by Kuldeep Behera during MERN Stack Industrial Training at ThinkNEXT Technologies.",
};

export default function ReadSpherePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
          Projects
        </Link>
        <span aria-hidden="true"> / </span>
        <span>ReadSphere</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900">ReadSphere</h1>
      <p className="mt-2 text-sm text-gray-600">
        Status: Training / academic project · Stack: MERN + TypeScript
      </p>

      <section className="mt-8" aria-labelledby="purpose-heading">
        <h2 id="purpose-heading" className="text-xl font-semibold text-gray-900">
          Purpose
        </h2>
        <p className="mt-3 text-gray-700">
          ReadSphere is an AI-assisted blogging platform intended to improve how authors create, refine, discover and interact with written content. It was developed during MERN Stack Industrial Training at ThinkNEXT Technologies and is presented as an academic project for Chandigarh University (BCA).
        </p>
      </section>

      <section className="mt-8" aria-labelledby="stack-heading">
        <h2 id="stack-heading" className="text-xl font-semibold text-gray-900">
          Technology stack (from repository)
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
          <li>Frontend: React 18, TypeScript, Vite, Tailwind CSS, TipTap, Zustand, Socket.IO client</li>
          <li>Backend: Node.js, Express, TypeScript, Mongoose, Socket.IO, BullMQ, Zod</li>
          <li>Database: MongoDB Atlas with vector search</li>
          <li>Cache / queue: Upstash Redis + BullMQ</li>
          <li>AI-related services referenced in the README: OpenRouter, HuggingFace, ElevenLabs</li>
          <li>Storage: Firebase Cloud Storage</li>
          <li>Email: Resend</li>
        </ul>
        <p className="mt-3 text-gray-700">
          The repository describes a rich TipTap editor, AI editorial assistance (SEO, readability, originality, fact-check related features), semantic search, TTS audio articles, voice comments, multi-role editorial workflow, scheduled publishing, real-time notifications and background workers. These descriptions come from the project README; live production status of every listed service depends on environment configuration and free-tier limits.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="status-heading">
        <h2 id="status-heading" className="text-xl font-semibold text-gray-900">
          Status and notes
        </h2>
        <p className="mt-3 text-gray-700">
          The codebase is organised into frontend and backend folders with documentation for architecture, API and deployment. Deployment guidance in the repository points to Vercel (frontend) and Render (backend) free tiers. This platform page does not claim that every feature is running in production without keys and configuration.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-xl font-semibold text-gray-900">
          Source
        </h2>
        <p className="mt-3">
          <a
            href="https://github.com/Kuldeep2025/readsphere"
            className="font-medium text-brand-700 hover:underline focus:outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/Kuldeep2025/readsphere
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
