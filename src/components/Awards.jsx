const Awards = () => {
  const awards = [
    {
      title: "Microsoft Azure Top Perks",
      year: "2023",
      description: "Recognition for outstanding performance in Azure cloud services"
    }
    // Add more awards here as needed
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Awards</h2>
      <div className="grid gap-4">
        {awards.map((award, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-500"
          >
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">{award.title}</h3>
              <span className="text-gray-600 text-sm">{award.year}</span>
            </div>
            <p className="text-gray-700">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awards
