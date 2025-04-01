"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Lottie from "lottie-react";
import Drone1GIF from "../public/droneGIF3.json";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col">
      <section
        className="relative min-h-screen flex items-center pt-16"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r " />
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1
                className="text-5xl md:text-7xl tracking-tight font-extrabold font-milker"
                style={{ fontFamily: "CustomFont" }}
                data-aos="fade-right"
              >
                AERO
                <br />
                FABRICATION
                <br />
                CLUB
              </h1>
              <p
                className="text-xl md:text-2xl font-medium text-primary"
                data-aos="fade-left"
              >
                WHERE PASSION MEETS PROPULSION
              </p>
              <p className="text-gray-300 max-w-lg" data-aos="fade-up">
                Designing, building, and flying innovative unmanned aerial
                vehicles. Join us in pushing the boundaries of aerospace
                engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-bold"
                  asChild
                  data-aos="fade-up"
                >
                  <Link href="/projects">Explore Projects</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                  data-aos="fade-up"
                >
                  <Link href="/contact">Join Us</Link>
                </Button>
              </div>
            </div>
            <div
              className="relative h-[600px] hidden lg:block rounded-lg overflow-hidden"
              data-aos="fade-left"
            >
              <Lottie animationData={Drone1GIF} className="" />
            </div>
          </div>
        </div>
        <div className="wave-pattern"></div>
      </section>

      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="section-heading" data-aos="fade-up">
            FEATURED PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Micro Class UAV",
                image: "/Project1.jpg",
                description:
                  "3D printed RC Plane optimized for maximum payload fraction and minimum empty weight.",
              },
              {
                title: "Autonomous UAV",
                image: "/Project2.jpg",
                description:
                  "Autonomous unmanned aerial vehicle capable of hotspot detection.",
              },
              {
                title: "Racing Drone",
                image: "/Project3.jpg",
                description:
                  "High-speed, agile racing drone with carbon fiber frame for competitive racing.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
                data-aos="fade-up"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Button
                    variant="link"
                    className="text-primary p-0 flex items-center gap-1"
                    asChild
                  >
                    <Link href="/projects">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
              data-aos="fade-up"
            >
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="section-heading" data-aos="fade-up">
            ACHIEVEMENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "2nd Place - Autonomous Drone-Aerothon22",
                image: "/Achievement1.jpg",
                description:
                  "Secured 2nd place in the design phase of the prestigious Autonomous Drone-Aerothon22.",
              },
              {
                title: "1st Place - SAE Indian Southern Section DDC '23",
                image: "/Achievement2.jpg",
                description:
                  "Secured 1st place in the Best Aerodynamics Analysis (CFD) category at the SAE Indian Southern Section DDC '23.",
              },
              {
                title: "3rd Place - Flight Fury at IIT Roorkee Tech Fest",
                image: "/Achievement3.jpg",
                description:
                  "Achieved 3rd place in Flight Fury at the esteemed IIT Roorkee Tech Fest.",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden card-hover"
                data-aos="fade-up"
              >
                <div className="relative h-64">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
              data-aos="fade-up"
            >
              <Link href="/achievements" className="flex items-center gap-2">
                View All Achievements <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="relative h-[400px] rounded-lg overflow-hidden"
              data-aos="fade-left"
            >
              <Image
                src="/aboutpng.png"
                alt="Team Photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold" data-aos="fade-right">
                ABOUT US
              </h2>
              <p className="text-gray-300" data-aos="fade-up">
                The Aero Fabrication Club. As the name itself suggests the clubs
                invokes learning in students by incorporating two major topics
                which form the building blocks of all the engineering sciences.
                Here at AFC we believe in "Creating to Learn, Learning to
                Create" and try to build out of the very basic laws provided by
                the nature. Constituting of a huge participation from all the
                years of the UG program we are an ever growing and an ever
                learning family.
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-black font-bold"
                asChild
                data-aos="fade-up"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-gradient-to-b from-blue-950/20 to-black relative"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Take Flight?
          </h2>
          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
          >
            Join the AeroFabrication Club and be part of our innovative team
            pushing the boundaries of aerospace engineering.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold"
            asChild
            data-aos="fade-up"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
