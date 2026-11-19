import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning in Public",
  description: "Notes, explanations and learning records from Kuldeep Behera.",
};

export default function LearningPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Learning in Public</h1>
      <p className="mt-4 text-gray-700">
        This section will hold programming notes, software engineering explanations, accessibility observations, development experiments and lessons learned. The purpose is to record what was understood, how it was applied, and what changed as a result.
      </p>
      <p className="mt-4 text-gray-700">
        Content will be added through an accessible content management dashboard in a later phase. Until then, this page remains a clear placeholder so the structure of the site is already in place.
      </p>
      <p className="mt-6 text-sm text-gray-600">
        No sample or invented articles are published here.
      </p>
    </div>
  );
}
