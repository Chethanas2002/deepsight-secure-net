
import { Shield, Heart, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-darker relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and mission */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-cyber-blue" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Ransom</span>
                <span className="text-cyber-blue">Shield</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Advanced ransomware protection through AI-driven analysis and honeypot technology.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">How It Works</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Community</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="bg-cyber-dark p-4 rounded-lg border border-gray-800">
              <p className="text-sm text-gray-400 mb-2">Stay updated with our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-cyber-darker text-sm p-2 rounded-l border border-gray-700 focus:outline-none focus:border-cyber-blue flex-grow"
                />
                <button className="bg-cyber-blue hover:bg-cyber-blue/90 text-white text-sm px-3 py-2 rounded-r transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RansomShield. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-gray-500 text-sm flex items-center">
              Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> for cybersecurity
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
