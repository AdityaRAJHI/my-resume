const Skills = () => {
  const skillsList = [
    {
      category: "QA MANUAL/Automation",
      skills: "Software Development Life Cycle (SDLC), JMeter, Springboot, Hibernate, Jira, SQL, Dyanodb, Aws"
    },
    {
      category: "Ui/Ux",
      skills: "Conceptual design, Protyping, Figma, Flutterflow, Sketch"
    },
    {
      category: "Aws Cloud Essentials",
      skills: "IAM, VPC, EC2, Lamda, Fargate, S3, Eks container, ECS container, Cloudfront, Cloudwatch, Serverless, DynamoDB"
    },
    {
      category: "DevOPS",
      skills: "Operating System, Cli console, Storage, Container, Version Control, Serverless, Aws Cli console"
    },
    {
      category: "CyberOps Associate",
      skills: "Fundamental, Vapt, Redhat, Cryptography, Networking, Hashtable, Cloud skills"
    },
    {
      category: "Prompt Engineering",
      skills: "Prompt hacking, vocabulary, LLM settings, Nlp, image prompting, Improve Reliability"
    }
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid gap-4">
        {skillsList.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg">{item.category}</h3>
            <p className="text-gray-700">{item.skills}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
