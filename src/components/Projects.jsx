const Projects = () => {
  const projects = [
    {
      title: "Natural Language Processing",
      url: "https://github.com/AdityaRAJHI/NLP",
      description: "NLP project focusing on language processing and analysis",
      tech: ["Python", "NLP", "Machine Learning"]
    }
    // Add more projects here as needed
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline mb-2 inline-block"
            >
              {project.url}
            </a>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
