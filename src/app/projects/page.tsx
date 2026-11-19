import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software projects and technical work by Kuldeep Behera.",
};

const projects = [
  {
    slug: "cognitiveloadbalancer",
    title: "CognitiveLoadBalancer",
    status: "Completed (university project)",
    stack: "C++11, Make, Object-Oriented Design",
    summary:
      "Object-oriented system that models mental commitments (projects, learning goals, responsibilities) to track cognitive load, surface overload warnings and offer recovery recommendations. Demonstrates abstraction, inheritance, polymorphism, encapsulation and composition.",
    repo: "https://github.com/Kuldeep2025/CognitiveLoadBalancer",
  },
  {
    slug: "readsphere",
    title: "ReadSphere",
    status: "Training project (ThinkNEXT Technologies)",
    stack: "React 18, TypeScript, Vite, Tailwind, Node.js, Express, MongoDB",
    summary:
      "AI-powered intelligent blogging platform developed during MERN Stack Industrial Training. Focuses on author experience, content quality assistance, editorial workflows and search.",
    repo: "https://github.com/Kuldeep2025/readsphere",
  },
  {
    slug: "landing-page",
    title: "Landing Page Project",
    status: "Hackathon project",
    stack: "HTML, CSS, JavaScript",
    summary:
      "Responsive landing page presenting an AI-driven data-automation platform. Built during a hackathon organised through IIT Bhubaneswar. Includes multi-currency pricing, billing toggle and semantic structure.",
    repo: "https://github.com/Kuldeep2025/Landing_Page_project",
  },
  {
    slug: "teresto",
    title: "Teresto",
    status: "In progress / concept",
    stack: "Web technologies (verify repository for current implementation)",
    summary:
      "Accessible web platform concept: Transforming Every Resource, Enabling Social Technology Online. Aims to bring scattered digital resources into a more unified and approachable experience.",
    repo: "https://github.com/Kuldeep2025/Teresto",
  },
  {
    slug: "datastructures",
    title: "DataStructures",
    status: "Ongoing practice",
    stack: "C and related languages",
    summary:
      "Repository collection used for practising data structures, algorithms and programming logic.",
    repo: "https://github.com/Kuldeep2025/DataStructures",
  },
  {
    slug: "virtual-kbc",
    title: "Virtual KBC Java Project",
    status: "Practice project",
    stack: "Java",
    summary:
      "Interactive quiz application developed to practise programming logic, application flow and user interaction.",
    repo: "https://github.com/Kuldeep2025/Vertual_KBC_Java_project",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
      <p className="mt-3 max-w-2xl text-gray-700">
        This list contains projects that can be verified from public repositories or training records. Status is stated clearly. Planned work such as ShopNGo is noted separately and is not presented as completed.
      </p>

      <ul className="mt-10 space-y-8">
        {projects.map((p) => (
          <li key={p.slug} className="border-b border-gray-200 pb-8 last:border-0">
            <h2 className="text-xl font-semibold text-gray-900">
              <Link href={`/projects/${p.slug}`} className="text-brand-700 hover:underline focus:outline-none">
                {p.title}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              <span className="font-medium">{p.status}</span> · {p.stack}
            </p>
            <p className="mt-2 text-gray-700">{p.summary}</p>
            <p className="mt-2">
              <a
                href={p.repo}
                className="text-sm font-medium text-brand-700 hover:underline focus:outline-none"
                rel="noopener noreferrer"
                target="_blank"
              >
                View repository on GitHub
              </a>
            </p>
          </li>
        ))}
      </ul>

      <section className="mt-12 rounded-lg bg-gray-50 p-6" aria-labelledby="planned-heading">
        <h2 id="planned-heading" className="text-lg font-semibold text-gray-900">
          Planned / conceptual work
        </h2>
        <p className="mt-2 text-gray-700">
          <strong>ShopNGo</strong> — Planned AI-supported e-commerce marketplace with multiple user roles (customers, sellers, delivery partners, moderators) and the tagline “Discover. Understand. Compare. Buy. Track.” Development constraint: prefer free and open-source technologies. This is a concept and future plan, not an implemented product.
        </p>
      </section>
    </div>
  );
}
