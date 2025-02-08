import { Layout, Code2, Smartphone, Database } from "lucide-react";
export interface Technology {
 name: string;
 category: "frontend" | "backend" | "mobile" | "database";
}

export interface TechnologyCategory {
 id: string;
 title: string;
 icon: string;
 technologies: string[];
}


export const techCategory: TechnologyCategory[] = [
 {
  id: "frontend",
  title: "Front End",
  icon: Layout.name,
  technologies: ["React", "Next.js", "Vue.js", "Angular"],
 },
 {
  id: "backend",
  title: "Back End",
  icon: Code2.name,
  technologies: ["Node.js", "Python", "Java", "Go"],
 },
 {
  id: "mobile",
  title: "Mobile App",
  icon: Smartphone.name,
  technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
 },
 {
  id: "database",
  title: "Database",
  icon: Database.name,
  technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
 },
]

