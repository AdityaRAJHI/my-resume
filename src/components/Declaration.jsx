const Declaration = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Declaration</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-start space-x-4">
          <svg 
            className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <p className="text-gray-700 text-justify leading-relaxed">
            I am an enthusiastic individual dedicated to completing every task efficiently and on time.
            My passion for learning is everything for me onwards.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Declaration
