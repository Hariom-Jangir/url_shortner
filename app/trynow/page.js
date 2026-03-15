"use client";

import { useState } from "react";

export default function TryNow() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {

    if (!url) return;

    setLoading(true);

    try {

      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      });

      const data = await res.json();

      setShortUrl(data.shortUrl);

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-[450px]">

        <h1 className="text-2xl font-bold text-center mb-6">
          URL_shortNER
        </h1>

        <input
          type="text"
          placeholder="Paste your long URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border p-3 rounded-md mb-4"
        />

        <button
          onClick={handleShorten}
          className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800"
        >
          {loading ? "Generating..." : "Generate Short URL"}
        </button>

        {shortUrl && (
          <div className="mt-6 text-center">

            <p className="mb-2 text-gray-600">Your Short URL</p>

            <a
              href={shortUrl}
              target="_blank"
              className="text-blue-600 underline"
            >
              {shortUrl}
            </a>

          </div>
        )}

      </div>

    </div>
  );
}