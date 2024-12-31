import React from "react";

const skills = [
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Vite", level: 70 },
  // Add more skills as needed
];

function Skills() {
  return (
    <div className="space-y-4 bg-slate-600 p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>
      {skills.map((skill) => (
        <div key={skill.name} className="w-full">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{skill.name}</span>a{" "}
            <span className="text-sm font-medium">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
