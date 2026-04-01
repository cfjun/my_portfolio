import React from 'react'
import projects from '../data/projects.json'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          项目展示
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  查看项目
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects