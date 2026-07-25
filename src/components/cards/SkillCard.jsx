function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">
      <Icon className={`text-3xl ${skill.color}`} />

      <h3 className="font-medium text-white">
        {skill.name}
      </h3>
    </div>
  );
}

export default SkillCard;