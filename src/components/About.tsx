import React from 'react'
import skills from '../data/skills.json'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          关于我
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">个人简介</h3>
            <p className="text-gray-300 mb-6">
              我是一名前端开发者，拥有多年的Web开发经验。我热衷于学习新技术，不断提升自己的技能水平。
              我擅长使用React、TypeScript等现代前端技术栈，构建美观且功能强大的网页应用。
            </p>
            <p className="text-gray-300">
              我注重代码质量和用户体验，追求编写简洁、高效、可维护的代码。
              我相信技术的力量可以改变世界，希望通过我的工作为用户带来更好的体验。
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">技能列表</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-gray-400">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About