import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CognitiveLoadBalancer",
  description:
    "C++ object-oriented system for tracking and managing cognitive load, developed by Kuldeep Behera as a Chandigarh University project.",
};

export default function CognitiveLoadBalancerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/projects" className="text-brand-700 hover:underline focus:outline-none">
          Projects
        </Link>
        <span aria-hidden="true"> / </span>
        <span>CognitiveLoadBalancer</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900">CognitiveLoadBalancer</h1>
      <p className="mt-2 text-sm text-gray-600">
        Status: Completed university project · Language: C++11 · Build: Make
      </p>

      <section className="mt-8" aria-labelledby="purpose-heading">
        <h2 id="purpose-heading" className="text-xl font-semibold text-gray-900">
          Purpose
        </h2>
        <p className="mt-3 text-gray-700">
          CognitiveLoadBalancer is an object-oriented C++ program that models mental commitments such as projects, learning goals, responsibilities and background worries. It calculates a cognitive load value, surfaces overload warnings and offers recovery-oriented recommendations. The system was built as an educational demonstration of software engineering and OOP principles, not as a clinically validated mental-health tool.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="tech-heading">
        <h2 id="tech-heading" className="text-xl font-semibold text-gray-900">
          Technologies and implementation
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
          <li>C++11</li>
          <li>Make for building</li>
          <li>Header and source separation under include/ and src/</li>
        </ul>
        <p className="mt-3 text-gray-700">
          Core design uses an abstract base class <code>MentalCommitment</code> with derived types (ActiveProject, LearningGoal, Responsibility, BackgroundWorry). A <code>CognitiveLoad</code> component tracks working-memory, long-term and emotional load. A <code>User</code> profile holds capacity and thresholds. A <code>LoadManagement</code> component produces recommendations such as pause, delegate, defer or prioritise.
        </p>
        <p className="mt-3 text-gray-700">
          The project deliberately demonstrates abstraction, inheritance, polymorphism, encapsulation and composition.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="context-heading">
        <h2 id="context-heading" className="text-xl font-semibold text-gray-900">
          Academic context
        </h2>
        <p className="mt-3 text-gray-700">
          Developed for the OOPs in C++ course (24CAH-201) at Chandigarh University – UIC. Author UID: 24BCA10108. Instructor: Ms. Konika Grover.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="status-heading">
        <h2 id="status-heading" className="text-xl font-semibold text-gray-900">
          Current status and limitations
        </h2>
        <p className="mt-3 text-gray-700">
          The repository contains a complete educational implementation that can be built with Make and run from the command line. Future ideas listed in the repository (GUI, database persistence, mobile app, AI models) are not implemented.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-xl font-semibold text-gray-900">
          Source
        </h2>
        <p className="mt-3">
          <a
            href="https://github.com/Kuldeep2025/CognitiveLoadBalancer"
            className="font-medium text-brand-700 hover:underline focus:outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/Kuldeep2025/CognitiveLoadBalancer
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
