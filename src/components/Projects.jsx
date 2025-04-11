import { FaArrowRight } from "react-icons/fa"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "The simplest example is kafka + golang",
      description:
        "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      title: "The simplest example is kafka + golang",
      description:
        "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
      image: "https://picsum.photos/600/400?random=2",
    },
  ]

  return (
    <section id="projects" className="w-full py-8 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold font-playwrite mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-3xl p-6">
            <h3 className="text-xl font-mono mb-4">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-6">{project.description}</p>
            <div className="flex items-center justify-between">
              <button className="bg-white text-black px-6 py-2 rounded-full font-doto hover:bg-gray-300 transition-colors">
                Read more
              </button>
              <div className="p-2 rounded-full border border-white">
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
