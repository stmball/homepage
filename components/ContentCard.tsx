import Link from "next/link";

interface ContentCardProps {
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  href?: string;
}

export default function ContentCard({
  title,
  description,
  tags = [],
  link,
  href,
}: ContentCardProps) {
  const inner = (
    <>
      <div className="aspect-video bg-gray-800 rounded-md mb-4 flex items-center justify-center">
        <span className="text-gray-600">Image</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-100 mb-3">{title}</h3>
      {description && (
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
      )}
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );

  const baseClass =
    "bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-colors duration-300 block";

  if (link) {
    return (
      <Link href={link} className={baseClass}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {inner}
      </a>
    );
  }

  return <div className={baseClass}>{inner}</div>;
}
