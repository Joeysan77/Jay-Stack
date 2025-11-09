export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
    
    
    <div className="mb-4 md:mb-0">
      <img src="logo.png" alt="" className="h-12"/>
    </div>
    
    
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
      <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
      <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
      <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
      <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
    </ul>

    
    <div className="mt-4 md:mt-0 text-xs text-gray-500">
      &copy; 2025 Jay. All rights reserved.
    </div>

  </div>
</footer>
    )
}