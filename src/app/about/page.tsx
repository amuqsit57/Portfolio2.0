export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0 bg-black text-white">
      <section className="max-w-2xl w-full py-24 px-6 mx-auto animate-fadein">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About Me</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Hi, I'm Amuqsit, a passionate Full Stack Developer specializing in modern web technologies. I create scalable, high-performance applications for clients worldwide.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-2 text-left text-base text-gray-400">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>Cloud (AWS, Vercel)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <ul className="list-disc pl-6 text-left text-base text-gray-400">
            <li>Developed and maintained full stack web applications for multiple clients.</li>
            <li>Led frontend development using React and Next.js, focusing on performance and UX.</li>
            <li>Built RESTful APIs and backend services with Node.js and Express.</li>
            <li>Integrated cloud solutions and CI/CD pipelines for scalable deployments.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
