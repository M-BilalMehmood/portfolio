function About() {
    return (
      <section id="about" className="w-full py-16 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold font-playwrite mb-8">About me</h2>
  
        <div className="max-w-3xl">
          <p className="text-lg font-doto mb-6">
            Hello! I'm Bilal, I'm a full-stack developer with over 5 years experience.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 rounded-3xl p-6">
            <h3 className="text-xl font-mono mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2 font-doto">
              <Skill>JavaScript</Skill>
              <Skill>React</Skill>
              <Skill>Vue</Skill>
              <Skill>Next.js</Skill>
              <Skill>HTML</Skill>
              <Skill>CSS</Skill>
            </div>
          </div>
  
          <div className="bg-gray-800 rounded-3xl p-6">
            <h3 className="text-xl font-mono mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2 font-doto">
              <Skill>Node.js</Skill>
              <Skill>Express</Skill>
              <Skill>MongoDB</Skill>
              <Skill>PostgreSQL</Skill>
              <Skill>Python</Skill>
              <Skill>Django</Skill>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function Skill({ children }) {
    return <span className="px-3 py-1 bg-black rounded-full text-sm">{children}</span>
  }
  
  export default About
  