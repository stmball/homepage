import Navbar from "@/components/Navbar";
import ContentCard from "@/components/ContentCard";
import courses from "@/public/teaching_info.json";

interface Course {
  title: string;
  description: string;
  tags: string[];
}

export default function Teaching() {
  const courseList = courses as Course[];

  return (
    <div className="bg-linear-to-bl from-gray-950 to-slate-950 min-h-screen text-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-48">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-100 mb-8">
          Teaching
        </h1>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I&apos;m passionate about teaching people to build practical AI solutions
            to real-world problems, especially in healthcare.
          </p>
          <p>
            My teaching focuses on clear fundamentals, hands-on projects, and
            accessible explanations so learners from any background can apply
            machine learning with confidence.
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mt-16">
          Courses
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {courseList.map((course) => (
            <ContentCard
              key={course.title}
              title={course.title}
              description={course.description}
              tags={course.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
