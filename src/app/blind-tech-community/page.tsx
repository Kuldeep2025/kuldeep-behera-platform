import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blind Tech Community",
  description: "Kuldeep Behera’s organisational role as Director of the Marketing Department and Content Department at Blind Tech Community.",
};

export default function BlindTechCommunityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Blind Tech Community</h1>

      <p className="mt-4 text-lg text-gray-700">
        Blind Tech Community is a distinct organisation focused on technology, education and independence for visually impaired users. It is not the same as my personal YouTube channel.
      </p>

      <section className="mt-10" aria-labelledby="role-heading">
        <h2 id="role-heading" className="text-xl font-semibold text-gray-900">
          My current role
        </h2>
        <p className="mt-3 text-gray-700">
          <strong>Director, Marketing Department and Content Department</strong>
          <br />
          Blind Tech Community
        </p>
        <p className="mt-4 text-gray-700">
          In this role I am responsible for areas that include:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
          <li>Marketing direction</li>
          <li>Content planning</li>
          <li>Content development and publishing</li>
          <li>Communication and organisational announcements</li>
          <li>Audience engagement and brand communication</li>
          <li>Community information and marketing/content initiatives</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          Specific campaigns, metrics and outcomes will be added only when verified and approved. This page describes the current designation and the nature of the responsibilities, not invented results.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="separation-heading">
        <h2 id="separation-heading" className="text-xl font-semibold text-gray-900">
          Separation from personal content creation
        </h2>
        <p className="mt-3 text-gray-700">
          The YouTube channel <Link href="/youtube" className="text-brand-700 hover:underline focus:outline-none">Interesting Tech for V I</Link> is my independent content-creation activity. It is not a department, subsidiary or alternative name of Blind Tech Community. Both are important parts of my work, but they remain organisationally separate.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="note-heading">
        <h2 id="note-heading" className="text-xl font-semibold text-gray-900">
          Note on earlier designations
        </h2>
        <p className="mt-3 text-gray-700">
          My current designation is the one stated above. Previous titles (including any earlier HR Manager designation) are not used on this platform.
        </p>
      </section>
    </div>
  );
}
