"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-800 to-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight mb-3">About</h2>
          <Separator className="mx-auto w-24 bg-white mb-4" />
          <p className="text-gray-300 max-w-3xl mx-auto">
            Welcome to my portfolio! I’m passionate about creating beautiful and
            functional web experiences. Here’s a bit about me and what I do.
          </p>
        </motion.div>

        {/* content cection */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* picture */}
          <motion.div
            className="flex-shrink-0 w-full md:w-1/3"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/profile.jpg"
              alt="James Carlo Pesigan"
              className="rounded-2xl shadow-lg object-cover w-full h-[420px] hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* text content */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">
              Computer Science Student
            </h3>
            <p className="mb-6">
              Hello! I'm{" "}
              <span className="font-bold">James Carlo R. Pesigan</span>, a
              passionate Computer Science student from{" "}
              <span className="font-bold">
                Cavite State University – Bacoor Campus
              </span>
              . Currently a 3rd-year student, I’m continuously learning and
              improving my skills in web development, design, and innovation.
            </p>

            {/* Info Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/60 border border-gray-700 backdrop-blur-md shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-gray-200">
                  <Info label="Birthday" value="June 14, 2004" />
                  <Info label="Age" value="21" />
                  <Info label="Motto" value="It is what it is" />
                  <Info label="Email" value="jamespsgn@gmail.com" />
                  <Info label="City" value="Bacoor, Cavite" />
                  <Info label="Phone" value="09475754388" />
                </CardContent>
              </Card>
            </motion.div>

            <motion.p
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My goal is to build creative and efficient digital solutions that
              solve real-world problems — combining logic, design, and passion
              for technology.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ x: 5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <ArrowRight size={16} className="text-indigo-400" />
      <span>
        <span className="font-semibold text-white">{label}:</span> {value}
      </span>
    </motion.div>
  );
}
