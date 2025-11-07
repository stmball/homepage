import Navbar from "@/components/Navbar";
import ContentCard from "@/components/ContentCard";
import projectInfo from "@/public/project_info.json";

interface Project {
  id: number;
  name: string;
  description: string;
  problem: string;
  solution: string;
  facts: string[];
  tags: string[];
}

export default function Projects() {
  const projects = projectInfo as Project[];

  return (
    <div className="bg-linear-to-bl from-gray-950 to-slate-950 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-48">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-100 mb-8">
          Projects
        </h1>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I love building practical, impactful tools—especially where AI can
            make a real difference. From prototypes to production-ready systems,
            I focus on solutions that are reliable, explainable, and useful in
            the real world.
          </p>
          <p>
            Below is a selection of my work across health data science, machine
            learning, and engineering. Each project emphasizes clear problem
            framing, thoughtful evaluation, and reproducibility.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ContentCard
              key={project.id}
              title={project.name}
              description={project.description}
              link={`/projects/${project.id}`}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
