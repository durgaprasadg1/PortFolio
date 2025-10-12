const email = import.meta.env.VITE_EMAIL;
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <main className="min-h-screen text-white py-16">
      <div className="container  px-6">
        <div className="max-w-3xl mx-auto shadow-slate-600 rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Get in touch</h1>
          <p className="mb-6 text-indigo-100">Have a project idea or want to work together? Send a message and I'll reply within a few days.</p>

          <form action={`mailto:${email}`} method="post" encType="text/plain" className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input required name="name" className="w-full border px-4 py-2 rounded-md text-white" placeholder="Your name" />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input required name="email" type="email" className="w-full border px-4 py-2 rounded-md text-white" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea required name="message" rows="5" className="w-full border px-4 py-2 rounded-md text-white" placeholder="Tell me about your idea.."></textarea>
            </div>

            <div className="flex items-center gap-4">
              <button type="submit" className="bg-white text-indigo-700 px-6 py-2 rounded-md font-semibold">Send</button>
              <a href="mailto:durgaprasadgirepunje@gmail.com" className="text-indigo-100 underline">Or email me directly</a>
            </div>
          </form>

          <div className="mt-8 border-t border-slate-600 pt-6 text-indigo-100">
            <h4 className="font-semibold mb-2">Other ways to reach me</h4>
            <p>Linked In : Durgaprasad Girepunje</p>
            <p className="mt-2">See my work: <Link to="/project" className="underline">Projects</Link></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
