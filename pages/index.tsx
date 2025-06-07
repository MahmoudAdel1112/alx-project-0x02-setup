import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-2xl space-y-8">
        {/* Main heading */}
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to Our Platform
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600">
          Discover amazing features and get started today
        </p>

        {/* Decorative divider */}
        <div className="w-24 h-1 bg-indigo-400 mx-auto rounded-full" />

        {/* Call-to-action button */}
        <div className="pt-6">
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore More →
          </Link>
        </div>

        {/* Secondary navigation */}
        <div className="pt-12 space-x-4">
          <Link
            href="/about"
            className="text-indigo-600 hover:text-indigo-800 transition duration-200"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
