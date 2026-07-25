function ExperienceCard({ item }) {
  return (
    <div className="relative pl-10 pb-12">

      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

      {/* Timeline Line */}
      <div className="absolute left-[7px] top-6 w-[2px] h-full bg-slate-700"></div>

      <span className="text-cyan-400 font-semibold">
        {item.year}
      </span>

      <h3 className="text-2xl font-bold mt-2">
        {item.title}
      </h3>

      <h4 className="text-slate-400">
        {item.company}
      </h4>

      <p className="mt-4 text-slate-400 leading-7">
        {item.description}
      </p>

    </div>
  );
}

export default ExperienceCard;