import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Way I Think",
  description: "Placeholder for Kuldeep Behera’s thinking, principles and intellectual development sections.",
};

export default function ThinkingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">The Way I Think</h1>
      <p className="mt-4 text-gray-700">
        This area is reserved for sections such as My Perspective, Things I Have Realised, Questions I Am Exploring, My Principles, and The Evolution of My Thinking.
      </p>
      <p className="mt-4 text-gray-700">
        Personal philosophy and first-person reflections will only be published after I review and approve the exact wording. Nothing is invented or presented as a quotation until that confirmation happens.
      </p>
      <p className="mt-6 text-sm text-gray-600">
        The structure of the platform already anticipates these sections so they can be filled through the future accessible CMS without changing the site architecture.
      </p>
    </div>
  );
}
