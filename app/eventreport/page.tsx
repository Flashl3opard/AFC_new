"use client";
import { useState } from "react";
import Image from "next/image";

export default function EventReportPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const events = [
    {
      title: "Aerothon",
      image: "/googledocs.png",
      reportText: "Open Report",
    },
    {
      title: "WRC",
      image: "/googledocs.png",
      reportText: "Open Report",
    },
    {
      title: "DDC",
      image: "/googledocs.png",
      reportText: "Open Report",
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Event Reports
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-4">
                Featured in Tech Magazine
              </h3>
              <p className="text-gray-400 mb-4">
                Our innovative approach to drone design was featured in the
                leading technology magazine "TechInnovate" in their special
                issue on emerging aerospace technologies.
              </p>
              <div className="text-primary font-medium">June 2022</div>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-4">
                University Excellence Award
              </h3>
              <p className="text-gray-400 mb-4">
                Received the University Excellence Award for outstanding
                contribution to technical innovation and research in the field
                of unmanned aerial vehicles.
              </p>
              <div className="text-primary font-medium">December 2022</div>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-4">Local News Coverage</h3>
              <p className="text-gray-400 mb-4">
                Our team's success at the National Drone Competition was covered
                by local news channels, highlighting the innovative work being
                done by students in aerospace engineering.
              </p>
              <div className="text-primary font-medium">March 2023</div>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-4">Industry Partnership</h3>
              <p className="text-gray-400 mb-4">
                Established a collaborative partnership with leading aerospace
                company for research and development of next-generation drone
                technologies.
              </p>
              <div className="text-primary font-medium">August 2023</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
