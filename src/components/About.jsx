import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-800 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-3">About</h2>
          <Separator className="mx-auto w-24 bg-white mb-4" />
          <p className="text-gray-300 max-w-3xl mx-auto">
            Welcome to my portfolio! I’m passionate about creating beautiful and
            functional web experiences. Here’s a bit about me and what I do.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src="/profile.jpg"
              alt="James Carlo Pesigan"
              className="rounded-2xl shadow-lg object-cover w-full h-[420px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-3">
              Computer Science Student
            </h3>
            <p className="mb-6">
              Hello! I'm{" "}
              <span className="font-bold">
                James Carlo R. Pesigan
              </span>
              , a passionate Computer Science student from{" "}
              <span className="font-bold">
                Cavite State University – Bacoor Campus
              </span>
              . Currently a 3rd-year student, I’m continuously learning and
              improving my skills in web development, design, and innovation.
            </p>

            {/* Info Grid */}
            <Card className="bg-gray-800/60 border border-gray-700 backdrop-blur-md shadow-lg">
              <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-gray-200">
                <div className="flex items-center gap-2">
                  <ArrowRight size={16} />
                  <span>
                    <span className="font-semibold text-white">Birthday:</span>{" "}
                    June 14, 2004
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={16} />
                  <span>
                    <span className="font-semibold text-white">Age:</span> 21
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight  size={16} />
                  <span>
                    <span className="font-semibold text-white">Motto:</span>{" "}
                    It is what it is
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={16} />
                  <span>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    jamespsgn@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={16} />
                  <span>
                    <span className="font-semibold text-white">City:</span>{" "}
                    Bacoor, Cavite
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={16} />
                  <span>
                    <span className="font-semibold text-white">
                      Phone:
                    </span>{" "}
                    09475754388
                  </span>
                </div>
              </CardContent>
            </Card>

            <p className="mt-6 ">
              My goal is to build creative and efficient digital solutions that
              solve real-world problems — combining logic, design, and passion
              for technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
