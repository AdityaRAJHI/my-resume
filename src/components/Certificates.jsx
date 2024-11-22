const Certificates = () => {
  const certificates = [
    {
      category: "AWS",
      items: [
        "AWS Cloud Practitioner",
        "AWS Computer Serverless",
        "AWS Cloud Essentials"
      ]
    },
    {
      category: "Google Cloud",
      items: [
        "GCP Generative AI",
        "Responsible AI",
        "NLP",
        "Tensorflow"
      ]
    },
    {
      category: "Cisco",
      items: [
        "Cisco CyberOps Associate",
        "Cisco Packet Tracer"
      ]
    },
    {
      category: "Others",
      items: [
        "Accenture Data Analytics @forage"
      ]
    }
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-800">
              {cert.category}
            </h3>
            <ul className="space-y-2">
              {cert.items.map((item, i) => (
                <li 
                  key={i}
                  className="flex items-center text-gray-700"
                >
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
