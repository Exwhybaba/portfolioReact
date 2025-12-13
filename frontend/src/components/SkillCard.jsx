const SkillCard = ({ name, expertise, logo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
      {logo && <img src={logo} alt={name} className="w-16 h-16 mb-2" />}
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-emerald-500 h-2.5 rounded-full"
          style={{ width: `${expertise}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
