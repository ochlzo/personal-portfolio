import React, { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 50, category: "frontend" },
  { name: "Bootsrap CSS", level: 60, category: "frontend" },

  // Backend
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MySQL", level: 85, category: "backend" },

  // Other
  { name: "C", level: 87, category: "other languages" },
  { name: "C++", level: 85, category: "other languages" },
  { name: "Java/Java Swing", level: 89, category: "other languages" },

  // Tools
  { name: "Git/GitHub", level: 75, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Dev C++", level: 90, category: "tools" },
  { name: "NetBeans", level: 90, category: "tools" },
];

const getColor = (level) => {
  if (level >= 85) return "bg-green-500";
  if (level >= 70) return "bg-yellow-500";
  return "bg-red-500";
};

const categories = ["all", "frontend", "backend", "other languages", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My<span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full border shadow-sm transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-background text-foreground border-border hover:shadow-md hover:border-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded0-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  🛠 {skill.name}
                </h3>
              </div>
              <div className="relative w-full">
                <div className="bg-secondary/50 rounded-full h-2 overflow-hidden">
                  <div
                    className={cn(
                      "h-2 rounded-full transition-all duration-700 ease-in-out",
                      getColor(skill.level)
                    )}
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="absolute top-[-1.5rem] right-0 text-sm text-muted-foreground">
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
