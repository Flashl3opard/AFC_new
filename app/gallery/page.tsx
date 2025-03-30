import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">GALLERY</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden card-hover">
              <Image
                src="/gallery-1.png"
                alt="Gallery Image 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden card-hover">
              <Image
                src="/gallery-2.png"
                alt="Gallery Image 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden card-hover">
              <Image
                src="/gallery-3.png"
                alt="Gallery Image 3"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden card-hover md:col-span-2">
              <Image
                src="/gallery-4.png"
                alt="Gallery Image 4"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden card-hover">
              <Image
                src="/gallery-5.png"
                alt="Gallery Image 5"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden card-hover">
              <Image
                src="/gallery-6.png"
                alt="Gallery Image 6"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden card-hover">
              <Image
                src="/gallery-7.png"
                alt="Gallery Image 7"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden card-hover">
              <Image
                src="/gallery-8.png"
                alt="Gallery Image 8"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">EVENTS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <Image
                  src="/event-1.png"
                  alt="Annual Drone Exhibition"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-primary text-black text-sm font-bold px-2 py-1 rounded mb-2 inline-block">
                    MAY 2023
                  </div>
                  <h3 className="text-xl font-bold">Annual Drone Exhibition</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-400">
                  Showcasing our latest drone projects and innovations to the
                  university community and industry partners.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <Image
                  src="/event-2.png"
                  alt="Workshop Series"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-primary text-black text-sm font-bold px-2 py-1 rounded mb-2 inline-block">
                    JULY 2023
                  </div>
                  <h3 className="text-xl font-bold">Workshop Series</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-400">
                  A series of hands-on workshops teaching drone building,
                  programming, and flight techniques to new members.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <Image
                  src="/event-3.png"
                  alt="Competition Preparation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-primary text-black text-sm font-bold px-2 py-1 rounded mb-2 inline-block">
                    SEPTEMBER 2023
                  </div>
                  <h3 className="text-xl font-bold">Competition Preparation</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-400">
                  Intensive training and preparation sessions for the upcoming
                  national drone competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
