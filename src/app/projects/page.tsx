export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0 bg-black text-white">
      <section className="max-w-4xl w-full py-24 px-6 mx-auto animate-fadein">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center">Projects</h1>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Example Project Card */}
          <div className="group bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800 hover:border-blue-500 transition duration-300 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">Portfolio Website</h2>
            <p className="mb-2 text-gray-300">A modern personal portfolio built with Next.js, React, and Tailwind CSS. Features responsive design, dynamic content, and fast performance.</p>
            <span className="text-sm text-gray-500">Tech: Next.js, React, Tailwind CSS</span>
          </div>
          <div className="group bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800 hover:border-blue-500 transition duration-300 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">E-commerce Platform</h2>
            <p className="mb-2 text-gray-300">Developed a scalable e-commerce platform with secure authentication, product management, and payment integration.</p>
            <span className="text-sm text-gray-500">Tech: React, Node.js, MongoDB, Stripe</span>
          </div>
          <div className="group bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800 hover:border-blue-500 transition duration-300 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">Task Manager App</h2>
            <p className="mb-2 text-gray-300">Created a full stack task manager app with real-time updates and user collaboration features.</p>
            <span className="text-sm text-gray-500">Tech: Next.js, Express, Socket.io</span>
          </div>
        </div>
      </section>
    </main>
  );
}
