import FlowingMenu from "./FlowingMenu"

function Work() {
  const workItems = [
    { link: "#", text: "E-commerce", image: "https://picsum.photos/600/400?random=1" },
    { link: "#", text: "Dashboard", image: "https://picsum.photos/600/400?random=2" },
    { link: "#", text: "Mobile App", image: "https://picsum.photos/600/400?random=3" },
    { link: "#", text: "API Integration", image: "https://picsum.photos/600/400?random=4" },
  ]

  return (
    <section className="w-full py-16">
      <h2 className="text-6xl md:text-8xl font-bold font-playwrite mb-12 px-8 md:px-16">Work</h2>

      <div className="h-[600px] relative">
        <FlowingMenu items={workItems} />
      </div>
    </section>
  )
}

export default Work
