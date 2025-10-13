import { Link } from 'react-router-dom'
const email = import.meta.env.VITE_EMAIL;

const ProjectCard = ({ title, desc, link }) => (
  <article className="shadow-slate-500 rounded-lg p-4  hover:shadow-md transition bg-gray-600/80">
    <h4 className="font-semibold mb-2 text-white">{title}</h4>
    <p className="text-sm text-indigo-100 mb-4">{desc}</p>
    {link && <Link to={link} className="text-indigo-200 underline">View project →</Link>}
  </article>
)

const Projects = () => {
  const projects = [
    { title: 'Messmate', desc: 'App to help mess owners and students coordinate menus and payments. In this web app we can find mess nearby us and then we can take a plate by booking the orders as per convinience of menu displayed by mess owners.  Technologies I used for this were mongoDB Atlas, Express JS for backend and the EJS for frontend.\n This project provided me the hands on experience on developing the web Application and handling the backend.', link: 'https://mess-project-jlj7.onrender.com/' },
    { title: 'Personal Assistance', desc: 'A personal assistance which can do basic tasks like clikcing picture , play song through youtube, making pc to go to Sleep Mode, Sending messages through whatsapp , opening the social media on device and many more. The technology I used to develop this project was pure python only i used the packages ', link: 'https://github.com/durgaprasadg1/Personal_Assistant.git' },
    { title: 'VIT Cricket', desc: 'The Cricket Based Virtual Game In which the player has to random number of runs from 0-6, at the same time the computer select the runs and if both the (Computer and User) then player wicket falls. The Techstack i used there is just C.'  ,  link: 'https://github.com/durgaprasadg1/VIT_Cricket.git'},
  ]

  return (
    <>
    <main className="min-h-screen text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} desc={p.desc} link={p.link} />
          ))}
        </div>


        <div className="mt-8 text-indigo-200">
         <Link to="/" className="underline">Back to home</Link>
        </div>
      </div>
    </main>
   
    </>
  )
}

export default Projects