import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Portfolio
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition-colors">首页</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">关于我</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">项目</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">联系</a>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header