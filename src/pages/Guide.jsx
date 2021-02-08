import React from "react";

export default function Guide() {
  return (
    <article className="py-12 px-4">
      <h1 className="text-4xl text-center mb-4 font-semibold font-heading font-semibold">
        The Official Dunder Mifflin Scranton Diary
      </h1>
      <p className="text-center">
        <span>October 22, by</span>
        <a className="ml-1 text-indigo-600 hover:underline" href="#">
          Michael Scott
        </a>
      </p>

      <div className="max-w-3xl mx-auto">
        <p className="mb-4">
          We offer a dependable and quick supply of copy paper suited to all
          kinds of printers. Each of our various products is designed to provide
          the finest performance and meet international standards.
        </p>
        <p className="mb-4">
          We’re dedicated to ensure the highest level of customer satisfaction
          based on long-term professional relationships. By creating the
          positive working environment we’re enabling our employees to
          significantly improve not only their productivity, but what’s more
          important – job satisfaction.
        </p>
        <ul className="mb-4 list-inside list-disc">
          <li>High durability</li>
          <li>Value-based price</li>
          <li>Perfect performance on copy machines</li>
          <li>Long lasting whiteness</li>
        </ul>
        <p className="mb-10">
          We deliver our services with passion and dedication unmatched by other
          so called “big players”. We create a friendly environment for our
          workers and that’s what makes their dedication soar to the maximum.
          You are getting not only the best possible product, but also our love
          for paper (completely free of charge).
        </p>
        <blockquote className="text-center mb-10">
          <p className="text-lg font-semibold mb-2">
            "I would say I kind of have an unfair advantage, because I watch
            reality dating shows like a hawk, and I learn. I absorb information
            from the strategies of the winners and the losers. Actually, I
            probably learn more from the losers."
          </p>
          <footer className="text-gray-400">Michael Scott</footer>
        </blockquote>
        <p>Because the real business is done on paper.</p>
      </div>
    </article>
  );
}
