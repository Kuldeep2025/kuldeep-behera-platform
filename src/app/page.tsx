import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Kuldeep Behera
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-700">
          I build software to understand how systems work and how technology can serve people better.
          I am a BCA student at Chandigarh University, Director of the Marketing Department and Content Department at Blind Tech Community, and the creator of the YouTube channel Interesting Tech for V I.
        </p>
        <p className="mt-3 max-w-2xl text-base text-gray-600">
          My work sits at the intersection of software development, accessible technology, clear communication and continuous learning.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            About me
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            View projects
          </Link>
          <a
            href="https://www.linkedin.com/in/kuldeepbehera"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section aria-labelledby="current-work-heading" className="mb-12">
        <h2 id="current-work-heading" className="text-xl font-semibold text-gray-900">
          Current focus
        </h2>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>
            <strong>Blind Tech Community</strong> — Director, Marketing Department and Content Department. Responsible for marketing direction, content planning, development and publishing, communication and audience engagement.
          </li>
          <li>
            <strong>Interesting Tech for V I</strong> — Independent YouTube channel focused on technology useful for blind and visually impaired people. Previously reported milestone: 500 uploads.
          </li>
          <li>
            <strong>Learning and building</strong> — Web development (React, TypeScript, Node, Express, MongoDB), software engineering practices, accessibility, and exploring AI in practical contexts.
          </li>
        </ul>
      </section>

      <section aria-labelledby="projects-heading" className="mb-12">
        <h2 id="projects-heading" className="text-xl font-semibold text-gray-900">
          Selected projects
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium text-gray-900">
              <Link href="/projects/cognitiveloadbalancer" className="text-brand-700 hover:underline focus:outline-none">
                CognitiveLoadBalancer
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              C++ object-oriented system for tracking and managing cognitive load. University project demonstrating abstraction, inheritance, polymorphism and encapsulation.
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium text-gray-900">
              <Link href="/projects/readsphere" className="text-brand-700 hover:underline focus:outline-none">
                ReadSphere
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              AI-powered intelligent blogging platform built during MERN Stack Industrial Training at ThinkNEXT Technologies.
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium text-gray-900">
              <Link href="/projects/landing-page" className="text-brand-700 hover:underline focus:outline-none">
                Landing Page Project
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Responsive frontend for an AI-driven data-automation platform, developed during a hackathon organised through IIT Bhubaneswar.
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium text-gray-900">
              <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
                More projects
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Teresto, DataStructures practice, Virtual KBC Java project, and planned work including ShopNGo.
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="connect-heading">
        <h2 id="connect-heading" className="text-xl font-semibold text-gray-900">
          Connect
        </h2>
        <p className="mt-2 text-gray-700">
          Prefer LinkedIn for professional conversation. The site will grow with articles, project updates, learning notes and community features in later phases.
        </p>
        <p className="mt-3">
          <a
            href="https://www.linkedin.com/in/kuldeepbehera"
            className="font-medium text-brand-700 hover:underline focus:outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            linkedin.com/in/kuldeepbehera
          </a>
        </p>
      </section>
    </div>
  );
}
