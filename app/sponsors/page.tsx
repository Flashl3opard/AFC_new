import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">SPONSORS</h1>

          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
            We are grateful to our sponsors who make our innovative drone
            projects possible. Their support enables us to push the boundaries
            of aerospace engineering and participate in competitions nationwide.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sponsor) => (
              <div
                key={sponsor}
                className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-8 flex items-center justify-center w-full h-40"
              >
                <Image
                  src={`/placeholder.svg?height=120&width=200`}
                  alt={`Sponsor ${sponsor}`}
                  width={200}
                  height={120}
                  className="object-contain max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            OUR VALUED PARTNERS
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                Platinum Sponsors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 card-hover">
                  <div className="w-32 h-32 bg-white/5 rounded-lg flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=100&width=100`}
                      alt="Platinum Sponsor 1"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Aerospace Innovations Inc.
                    </h4>
                    <p className="text-gray-400">
                      A leading aerospace technology company supporting our
                      advanced drone research and development initiatives.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 card-hover">
                  <div className="w-32 h-32 bg-white/5 rounded-lg flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=100&width=100`}
                      alt="Platinum Sponsor 2"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      TechDrone Systems
                    </h4>
                    <p className="text-gray-400">
                      Providing cutting-edge drone components and technical
                      expertise for our competition projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                Gold Sponsors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((sponsor) => (
                  <div
                    key={sponsor}
                    className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 text-center card-hover"
                  >
                    <div className="w-24 h-24 mx-auto bg-white/5 rounded-lg flex items-center justify-center mb-4">
                      <Image
                        src={`/placeholder.svg?height=80&width=80`}
                        alt={`Gold Sponsor ${sponsor}`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-bold mb-2">
                      Gold Sponsor {sponsor}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Supporting our mission to innovate in the field of
                      unmanned aerial vehicles.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                Silver Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((sponsor) => (
                  <div
                    key={sponsor}
                    className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-4 text-center card-hover"
                  >
                    <div className="w-16 h-16 mx-auto bg-white/5 rounded-lg flex items-center justify-center mb-3">
                      <Image
                        src={`/placeholder.svg?height=50&width=50`}
                        alt={`Silver Sponsor ${sponsor}`}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-sm">
                      Silver Sponsor {sponsor}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Become a Sponsor</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join our mission to innovate in the field of unmanned aerial
            vehicles. Your support helps us develop cutting-edge drone
            technology and train the next generation of aerospace engineers.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold"
            asChild
          >
            <Link href="/contact">Contact Us About Sponsorship</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
