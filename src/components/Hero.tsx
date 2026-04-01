import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">你好，我是</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">开发者</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              专注于前端开发，热爱创造美观且功能强大的网页应用
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                查看项目
              </a>
              <a href="#contact" className="px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-colors">
                联系我
              </a>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/20">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20developer%20portrait%20avatar%20minimalist%20style&image_size=square" 
                alt="开发者头像" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero