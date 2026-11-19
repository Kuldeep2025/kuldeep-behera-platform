import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description: "How to connect with Kuldeep Behera.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Connect with me</h1>
      <p className="mt-4 text-gray-700">
        The most reliable place for professional conversation is LinkedIn.
      </p>
      <p className="mt-4">
        <a
          href="https://www.linkedin.com/in/kuldeepbehera"
          className="text-lg font-medium text-brand-700 hover:underline focus:outline-none"
          rel="noopener noreferrer"
          target="_blank"
        >
          linkedin.com/in/kuldeepbehera
        </a>
      </p>
      <p className="mt-6 text-gray-700">
        GitHub repositories are available at{" "}
        <a
          href="https://github.com/Kuldeep2025"
          className="text-brand-700 hover:underline focus:outline-none"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/Kuldeep2025
        </a>
        .
      </p>
      <p className="mt-6 text-sm text-gray-600">
        Member registration, messaging and collaboration features belong to later phases of the platform. They are not available yet.
      </p>
    </div>
  );
}
