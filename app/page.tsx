import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import meImage from "@/public/me.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
          <div className="flex justify-center items-center">
            <Image
              src={meImage}
              alt="Portrait of Dr. Samuel Ball"
              className="w-full h-full max-h-[600px] object-cover rounded-lg shadow-lg ring-1 ring-white/10"
              priority
            />
          </div>
          <div>
            <h1 className="text-6xl font-bold text-gray-100 mb-6">
              Dr. Samuel Ball
            </h1>
            <h2 className="text-3xl font-semibold text-blue-400 mb-8">
              Lecturer of Health Data Science at the University of Liverpool
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Bridging the gap between artificial intelligence and healthcare to
              solve real medical challenges. I specialize in developing
              data-driven solutions that improve patient outcomes and advance
              medical research.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              With expertise in machine learning, clinical data analysis, and
              healthcare informatics, I transform complex medical data into
              actionable insights that make a difference in patient care.
            </p>
            <div className="mt-10">
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="https://github.com/stmball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-gray-200 border border-white/10 hover:border-white/20 hover:bg-white/5 transition"
                  aria-label="Visit my GitHub profile (opens in a new tab)"
                >
                  {/* GitHub mark */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 opacity-80"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.016c0 4.424 2.865 8.175 6.839 9.496.5.093.683-.217.683-.483 0-.238-.009-.868-.014-1.704-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.948 0-1.092.39-1.986 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.686 0 3.845-2.339 4.692-4.566 4.941.359.31.679.921.679 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.481C19.138 20.187 22 16.437 22 12.016 22 6.484 17.523 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="/CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-white font-semibold shadow hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download CV
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-white font-semibold shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition"
                >
                  View my work
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Browse a list of my projects applying AI to real medical
                problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
