function Footer() {
    return (
      <footer className="w-full py-8 px-8 md:px-16 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-xl font-playwrite mb-2">Site</h3>
            <div className="space-y-1 font-mono text-sm text-gray-400">
              <p>Handcrafted by ME /</p>
              <p>Designed by Taisia /</p>
              <p>Powered by React</p>
            </div>
          </div>
  
          <div className="mt-6 md:mt-0">
            <p className="font-doto text-gray-400">© {new Date().getFullYear()} M. Bilal Mehmood</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  