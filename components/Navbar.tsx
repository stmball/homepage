import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-32 w-full flex items-center justify-center text-gray-100 font-semibold fixed">
      <div className="h-16 rounded-full flex items-center justify-between bg-gray-900 border border-gray-500 backdrop-blur-2xl opacity-90 shadow-2xl">
        <Link
          href="/"
          className="h-full flex items-center justify-center w-32 hover:bg-gray-800 rounded-full transition-colors"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="h-full flex items-center justify-center w-32 hover:bg-gray-800 rounded-full transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/teaching"
          className="h-full flex items-center justify-center w-32 hover:bg-gray-800 rounded-full transition-colors"
        >
          Teaching
        </Link>
      </div>
    </nav>
  );
}
