import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">TEAM</h1>

          {/* Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover">
              <div className="relative h-96">
                <Image
                  src="/Faculty.jpg"
                  alt="Vijay Kumar Gupta"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    VIJAY KUMAR GUPTA
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-primary">
                  Faculty Incharge
                </h4>
                <p className="text-gray-400 mt-2">
                  Providing guidance and mentorship to the team, bringing years
                  of experience in aerospace engineering and research.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover">
              <div className="relative h-96">
                <Image
                  src="/Coordinator.jpg"
                  alt="Rudresh Singh"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    RUDRESH SINGH
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-primary">
                  Coordinator
                </h4>
                <p className="text-gray-400 mt-2">
                  Leading the team's overall direction and strategy,
                  coordinating between different sub-teams to ensure cohesive
                  project execution.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover">
              <div className="relative h-96">
                <Image
                  src="/Co-coordinator.jpg"
                  alt="Sankalp"
                  fill
                  className="object-cover object-top" // Focus on the top part
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">SANKALP</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-primary">
                  Co-Coordinator
                </h4>
                <p className="text-gray-400 mt-2">
                  Supporting the coordination efforts and providing leadership
                  in specific project areas, ensuring smooth day-to-day
                  operations.
                </p>
              </div>
            </div>
          </div>

          {/* Team Divisions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-2">Technical Team</h3>
              <p className="text-gray-400">
                Responsible for the design, engineering, and technical aspects
                of all drone projects.
              </p>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-2">Management Team</h3>
              <p className="text-gray-400">
                Handles promotion, outreach, and communication of the club's
                activities and achievements.
              </p>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-2">Finance Team</h3>
              <p className="text-gray-400">
                Manages budgeting, fundraising, and financial planning for all
                club projects and activities.
              </p>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-2">Events Team</h3>
              <p className="text-gray-400">
                Oversees club operations, membership, and coordination between
                different teams.
              </p>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-2">Social Media Team</h3>
              <p className="text-gray-400">
                Focuses on acquiring resources, developing partnerships, and
                planning for future growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
