import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education and professional direction of Kuldeep Behera.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">About me</h1>

      <section className="mt-8" aria-labelledby="who-heading">
        <h2 id="who-heading" className="text-xl font-semibold text-gray-900">
          Who I am
        </h2>
        <p className="mt-3 text-gray-700">
          My name is Kuldeep Behera. I am from Mayurbhanj, Odisha, and have lived and studied in the Chandigarh region. I am completely blind and use assistive technology as a normal part of how I work and learn.
        </p>
        <p className="mt-3 text-gray-700">
          I am pursuing a Bachelor of Computer Applications at Chandigarh University (2024–2027). Before that I completed Class 12 at the Institute for the Blind, Sector 26, Chandigarh, in the Arts stream with 84.4%.
        </p>
        <p className="mt-3 text-gray-700">
          I care about understanding how software actually works, about making digital products usable by people with different abilities, and about communicating ideas clearly. Accessibility is both a personal necessity and a professional interest; it is not the only thing that defines me.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="work-heading">
        <h2 id="work-heading" className="text-xl font-semibold text-gray-900">
          Professional direction
        </h2>
        <p className="mt-3 text-gray-700">
          I currently serve as <strong>Director of the Marketing Department and Content Department</strong> at Blind Tech Community. In this role I work on marketing direction, content planning, content development and publishing, communication, and audience engagement.
        </p>
        <p className="mt-3 text-gray-700">
          Separately, I run the YouTube channel <Link href="/youtube" className="text-brand-700 hover:underline focus:outline-none">Interesting Tech for V I</Link>. The channel is my independent content-creation activity focused on technology that is useful for blind and visually impaired people. It is not a department or project of Blind Tech Community.
        </p>
        <p className="mt-3 text-gray-700">
          My technical work so far includes C++ object-oriented programming, MERN-stack development, frontend experiences, and ongoing practice in data structures and algorithms. I treat each project as a chance to understand the problem more clearly, not only to ship a demo.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="linkedin-heading">
        <h2 id="linkedin-heading" className="text-xl font-semibold text-gray-900">
          Professional presence on LinkedIn
        </h2>
        <p className="mt-3 text-gray-700">
          LinkedIn is an important part of my professional identity. Profile:
        </p>
        <p className="mt-2">
          <a
            href="https://www.linkedin.com/in/kuldeepbehera"
            className="font-medium text-brand-700 hover:underline focus:outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.linkedin.com/in/kuldeepbehera
          </a>
        </p>
        <p className="mt-3 text-sm text-gray-600">
          Note: The complete public profile content could not be fully retrieved during initial platform setup. Information shown on this website is based on verified sources and the owner’s explicit statements. Missing details will be added only when confirmed.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="beyond-heading">
        <h2 id="beyond-heading" className="text-xl font-semibold text-gray-900">
          Beyond technology
        </h2>
        <p className="mt-3 text-gray-700">
          Music is an important part of my life. I have experience with harmonium, tabla, sitar and classical singing. Chandigarh University recognised me as Featured Music Performer under the title “Voice of Resilience” (February 2026). Creative expression sits alongside technical work rather than replacing it.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="draft-note">
        <h2 id="draft-note" className="text-xl font-semibold text-gray-900">
          About personal wording
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          Longer personal reflections, the detailed “Way I Think” material, and any first-person statements of values or philosophy are kept as editable drafts until I review and approve the exact wording. This page presents verified background and current responsibilities only.
        </p>
      </section>
    </div>
  );
}
