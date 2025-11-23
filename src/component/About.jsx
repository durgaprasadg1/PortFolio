import { Link } from 'react-router-dom'
const email = import.meta.env.VITE_EMAIL;


const SkillTag = ({ children }) => (
  <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">{children}</span>
)

const About = () => {
  return (
    <main className="min-h-screen  text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <div className="bg-gray-600 text-white rounded-lg p-6 shadow">
              <h1 className="text-2xl font-bold mb-2">About Me</h1>
              <p className="text-sm">Hello, I'm Durgaprasad, an enthusiastic Software Engineering student at VIT, Pune, dedicated to building scalable and efficient applications.

My foundational expertise is in Java, which I actively leverage for both competitive programming (DSA) and backend development. I have hands-on, full-stack experience, having successfully developed and deployed a project.

I am currently expanding my capabilities by mastering Next.js to build modern, high-performance user interfaces and further optimize my implementation skills.

My commitment is to continuously integrate strong DSA problem-solving logic with cutting-edge technologies to deliver high-quality software solutions.</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <a href={`mailto:${email}`} className="text-white hover:underline">Email</a>
              <div className="mt-4">
                <Link to="/project" className="inline-block bg-gray-600 text-white px-4 py-2 rounded-md">See my projects</Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">Summary</h2>
              <p className="text-white"></p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
                <div className="container">
                <SkillTag>Java</SkillTag>
                <SkillTag>JavaScript (ES6+)</SkillTag>
                <SkillTag>React</SkillTag>
                <SkillTag>NextJs</SkillTag>
                <SkillTag>Python</SkillTag>

                
                 <SkillTag>Express</SkillTag>
                 <SkillTag>Node JS</SkillTag>
                <SkillTag>MongoDB</SkillTag>
                <SkillTag>Tailwind CSS</SkillTag>
                <SkillTag>C</SkillTag>

              </div>
            </section>

            

            <section>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-white">B.Tech in Computer Engineering - Vishwakarma Institute Of Technology, Pune</p>
            </section>
            <br />
            <section>
              <h3 className="text-xl font-semibold mb-3">Hobbies</h3>
              <p className="text-white">Solving problems, Chess, Badmiton & Cricket. 
              </p>
            </section>
            <br />
            <section>
              <h3 className="text-xl font-semibold mb-3">Achievements</h3>
              <p className="text-white">SSC : <strong>91.40 %</strong> at <strong> Nutan English School , Gondia.</strong>
              </p>
              <p className="text-white">HSC : <strong>93.33 %</strong> at <strong> Mahavir Marwadi Junior College , Gondia.</strong>
              </p>
              <p className="text-white">FY : <strong>8.93 CGPA</strong> at <strong> Vishwakarma Institute Of Technology, Pune.</strong>
              </p>

            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
