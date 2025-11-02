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
    },
    {
      title: "Student portal",
      img: "/project2.png",
      description:
        "This is another project showcasing my design and frontend development skills. Built with modern technologies and responsive layouts.",
      images: ["/project2.png", "/project2 (2).png", "/project2 (3).png"],
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

        {/* Projects Grid - Centered */}
        <div className="flex justify-center gap-10 flex-wrap">
          {projects.map((p) => (
            <div
              key={p.title}
              onClick={() => openProject(p)}
              className="cursor-pointer bg-black rounded-xl overflow-hidden shadow-lg hover:scale-120 transition-transform w-120"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center font-semibold">{p.title}</div>
            </div>
          ))}
        </div>

        {/* modal*/}
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
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
