import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-transparent backdrop-blur-md">
      <div className="text-2xl font-bold tracking-tight text-white drop-shadow">
        Amuqsit
      </div>
      <ul className="flex gap-8 text-lg font-medium text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
      <div className="flex gap-4 text-xl">
        <a
          href="mailto:Amuqsit57@gmail.com"
          className="hover:text-blue-400"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/abdul555/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/amuqsit57"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}
