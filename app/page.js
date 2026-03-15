import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      
      <h1 className="text-5xl font-bold mb-6">
        The Best URL Shortener
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        URL_shortNER helps you shorten long links instantly.
        Fast, reliable and easy to use.
      </p>

      <div className="flex gap-4">
        <Link
          href="/shorten"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Try Now
        </Link>

        <Link
          href="https://github.com/Hariom-Jangir"
          className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition"
        >
          GitHub
        </Link>
      </div>

    </section>
  );
}