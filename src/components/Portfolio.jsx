import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Rock Paper Scissor Game",
      img: "/rpsjava.png",
      description:
        "This is my very first Java application — a simple Rock Paper Scissors game built using Java Swing. It showcases my early experience in GUI programming, event handling, and Java logic.",
      images: ["/rpsjavahome.png", "/rpscw.jpg", "/rpspw.jpg", "/rpsend.jpg"],
      link: null,
    },
    {
      title: "Student Portal",
      img: "/project2.png",
      description:
        "This project showcases my frontend and backend development skills using PHP and MySQL, designed for student management and grading systems.",
      images: ["/project2.png", "/project2 (2).png", "/project2 (3).png"],
      link: null,
    },
    {
      title: "Assessment Input System",
      img: "/Student_info.png",
      description:
        "An HTML-based version of my PHP project system for inputting student grades and performance. This is my very first project using mysql workbench",
      images: ["/Student_info.png","/Student_info (1).png","/Student_info (2).png","/Student_info (3).png"],
      link: "/student_info/main.html",
    },
    {
      title: "Manage Subjects Page",
      img: "/iscp (1).png",
      description:
        "This is my very first website it previews a supposed school website haha.",
      images: ["/iscp (1).png", "/iscp (2).png", "/iscp (3).png", "/iscp (4).png"],
      link: "/iscp/prototype.html",
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Portfolio
        </h2>

        {/* Projects Grid */}
        <div className="flex justify-center gap-10 flex-wrap">
          {projects.map((p) => (
            <div
              key={p.title}
              onClick={() => openProject(p)}
              className="cursor-pointer bg-black rounded-xl overflow-hidden shadow-lg hover:scale-110 transition-transform w-80"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center font-semibold">{p.title}</div>
            </div>
          ))}
        </div>

        {/* Modal for Carousel Projects */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-5xl bg-gray-900 text-white border border-gray-700">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center text-white">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400 text-center">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Carousel Section */}
                {selectedProject.images.length > 0 ? (
                  <Carousel className="w-full mt-8">
                    <CarouselContent>
                      {selectedProject.images.map((img, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={img}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            className="w-full h-[500px] object-contain rounded-lg"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-white hover:bg-indigo-600 transition" />
                    <CarouselNext className="text-white hover:bg-indigo-600 transition" />
                  </Carousel>
                ) : (
                  <p className="text-center mt-6 text-gray-500 italic">
                    No images available.
                  </p>
                )}

                {/* View Live Project Button */}
                {selectedProject.link && (
                  <div className="text-center mt-8">
                    <Button
                      onClick={() =>
                        window.open(selectedProject.link, "_blank", "noopener,noreferrer")
                      }
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
                    >
                      View Live Project ↗
                    </Button>
                  </div>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
