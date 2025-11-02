import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython size={40} />, color: "#3776AB", progress: 40 },
    { name: "Java", icon: <FaJava size={40} />, color: "#E76F00", progress: 30 },
    { name: "HTML", icon: <FaHtml5 size={40} />, color: "#E34F26", progress: 80 },
    { name: "CSS", icon: <FaCss3Alt size={40} />, color: "#1572B6", progress: 80 },
    { name: "JavaScript", icon: <SiJavascript size={40} />, color: "#F7DF1E", progress: 40 },
    { name: "MySQL", icon: <SiMysql size={40} />, color: "#00758F", progress: 60 },
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#47A248", progress: 50 },
    { name: "Figma", icon: <FaFigma size={40} />, color: "#F24E1E", progress: 40 },
    { name: "React", icon: <FaReact size={40} />, color: "#61DAFB", progress: 20 },
  ];

  {/* animation */}
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-800 text-white flex flex-col justify-center"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* title*/}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Languages & Tools I Use
        </motion.h2>

        {/* Icon cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <Card
                className="bg-gray-800/60 backdrop-blur-sm hover:bg-gray-700/70 hover:scale-120 transition-all text-center p-4 flex flex-col items-center justify-center rounded-xl shadow-lg hover:shadow-xl"
                style={{
                  borderColor: skill.color,
                  borderWidth: "1px",
                }}
              >
                <CardContent className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mb-2"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </motion.div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* progress bar */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl font-semibold mb-6 text-gray-300 text-center"
        >
          My Learning Progress
        </motion.h3>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
