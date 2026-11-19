import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interesting Tech for V I",
  description: "Kuldeep Behera’s independent YouTube channel focused on technology for blind and visually impaired people.",
};

export default function YouTubePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Interesting Tech for V I</h1>

      <p className="mt-4 text-lg text-gray-700">
        This is my independent YouTube channel. It is dedicated to technology and its usefulness for blind and visually impaired individuals.
      </p>

      <section className="mt-8" aria-labelledby="purpose-heading">
        <h2 id="purpose-heading" className="text-xl font-semibold text-gray-900">
          Purpose and audience
        </h2>
        <p className="mt-3 text-gray-700">
          The channel shares practical information about apps, software, screen readers, smartphones, computers, digital tools, tutorials and technology updates that matter to visually impaired users. The intended audience is people who rely on assistive technology and want clear, useful explanations.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="milestone-heading">
        <h2 id="milestone-heading" className="text-xl font-semibold text-gray-900">
          Milestone
        </h2>
        <p className="mt-3 text-gray-700">
          A public LinkedIn update previously reported that the channel had reached 500 uploads. This is recorded as a historical achievement. Live subscriber and view counts should be checked on the channel itself.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="relationship-heading">
        <h2 id="relationship-heading" className="text-xl font-semibold text-gray-900">
          Relationship to Blind Tech Community
        </h2>
        <p className="mt-3 text-gray-700">
          Interesting Tech for V I is my personal content-creation activity. It is not owned by, a department of, or an alternative name for Blind Tech Community. The two remain separate.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="visit-heading">
        <h2 id="visit-heading" className="text-xl font-semibold text-gray-900">
          Visit the channel
        </h2>
        <p className="mt-3 text-gray-700">
          Watch videos and subscribe on YouTube:
        </p>
        <p className="mt-2">
          <a
            href="https://www.youtube.com/@interestingtechforvi"
            className="font-medium text-brand-700 hover:underline focus:outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            youtube.com/@interestingtechforvi
          </a>
        </p>
        <p className="mt-4 text-sm text-gray-600">
          In later phases this section will support organised playlists, featured videos and an accessible way for me to manage video metadata without code changes. Automatic synchronisation will be added only through authorised methods.
        </p>
      </section>
    </div>
  );
}
