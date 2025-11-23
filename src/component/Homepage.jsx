import { Link } from 'react-router-dom'
const email = import.meta.env.VITE_EMAIL || 'you@example.com'

const Homepage = () => {
  return (
    
  <main className="min-h-screen text-white">
      <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">  
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hi, I'm Durgaprasad</h1>
          <p className="text-white mb-6">I am a <strong>Software Engineering</strong>  Student of S.Y at <strong>Vishwakarma Institute of Technology, Pune</strong>, skilled wth the programming language and Web technologies. I enjoy building things that connect the frontend to backend logically.</p>

          <div className="flex flex-wrap gap-4">
            <Link to="/project" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">See Projects</Link>
            <Link to="/contact" className="inline-block border border-white text-white px-6 py-3 rounded-md hover:bg-indigo-50 hover:text-black">Contact Me</Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg">
            <img src="/Ubhya.jpg" alt="Durgaprasad" loading="lazy" className="w-full h-full object-cover block" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6"> Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold mb-2">🍱 Messmate</h4>
            <p className="text-sm text-white">Project to make the mess owner and student life easy.

            </p>
          </article>
          <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold mb-2">Personal Assistant</h4>
            <p className="text-sm text-white">A Small Assistant made using python which can work only with normal commands.</p>
          </article>
          <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold mb-2">VIT Cricket</h4>
            <p className="text-sm text-white">A two player vitual cricket game made with <strong>C</strong>{ ' '}which can be played with computer. </p>
          </article>
          
                
        </div>
      </section>

      <section id="contact" className=" text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-2">Let's build something together</h3>
          <p className="mb-6 max-w-2xl mx-auto">I'm available for freelance and full-time work. Send me a message and I'll get back to you.</p>
          <a href={`mailto:${email}`} className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-50 hover:text-indigo-950">Email Me</a>        </div>
      </section>
    </main>
  )
}

export default Homepage