import { FaArrowRight } from "react-icons/fa"

function Articles() {
  const articles = [
    {
      id: 1,
      title: "The simplest example is kafka + golang",
      description:
        "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
    },
    {
      id: 2,
      title: "The simplest example is kafka + golang",
      description:
        "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
    },
    {
      id: 3,
      title: "The simplest example is kafka + golang",
      description:
        "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
    },
    {
      id: 4,
      title: "The simplest example is kafka + golang",
      description:
        "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
    },
  ]

  return (
    <section id="articles" className="w-full py-16 px-8 md:px-16 bg-black">
      <h2 className="text-6xl md:text-8xl font-bold font-playwrite mb-12 text-center">Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-gray-800 rounded-3xl p-6">
            <h3 className="text-xl font-mono mb-4">{article.title}</h3>
            <p className="text-sm text-gray-400 mb-6">{article.description}</p>
            <div className="flex items-center justify-between">
              <button className="bg-white text-black px-6 py-2 rounded-full font-doto hover:bg-gray-300 transition-colors">
                Read more
              </button>
              <div className="p-2 rounded-full border border-white">
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Articles
