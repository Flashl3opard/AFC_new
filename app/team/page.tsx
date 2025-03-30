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
              <div className="relative h-80">
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
              <div className="relative h-80">
                <Image
                  src="/coordinator.jpg"
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
              <div className="relative h-80">
                <Image
                  src="/co-coordinator.jpg"
                  alt="Sankalp"
                  fill
                  className="object-cover"
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

      {/* Technical Team */}
      <section className="py-20 bg-gradient-to-b from-blue-950/10 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            TECHNICAL TEAM
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
              <div
                key={member}
                className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              >
                <div className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Team Member ${member}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold">Team Member {member}</h3>
                  <p className="text-sm text-gray-400">Technical Specialist</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Teams */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            OTHER TEAM MEMBERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Management Team
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((member) => (
                  <div
                    key={member}
                    className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-4 flex items-center gap-4 card-hover"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=100&width=100`}
                        alt={`Management Member ${member}`}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Management Member {member}</h4>
                      <p className="text-sm text-gray-400">
                        Management Specialist
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Finance Team
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((member) => (
                  <div
                    key={member}
                    className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-4 flex items-center gap-4 card-hover"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=100&width=100`}
                        alt={`Finance Member ${member}`}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Finance Member {member}</h4>
                      <p className="text-sm text-gray-400">
                        Finance Specialist
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Events Team
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((member) => (
                  <div
                    key={member}
                    className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-4 flex items-center gap-4 card-hover"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=100&width=100`}
                        alt={`Management Member ${member}`}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Management Member {member}</h4>
                      <p className="text-sm text-gray-400">Events</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Social Media
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((member) => (
                  <div
                    key={member}
                    className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-4 flex items-center gap-4 card-hover"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=100&width=100`}
                        alt={`R&D Member ${member}`}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">R&D Member {member}</h4>
                      <p className="text-sm text-gray-400">Social Media</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
