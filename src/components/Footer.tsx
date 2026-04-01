import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Portfolio
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © {new Date().getFullYear()} 个人作品集. 保留所有权利.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
              首页
            </a>
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
              关于我
            </a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
              项目
            </a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
              联系
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer