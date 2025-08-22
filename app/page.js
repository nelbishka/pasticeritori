"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dynamic from "next/dynamic";
import Image from "next/image";

const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
  ssr: false,
  loading: () => <p>Loading reviews...</p>,
});

const menuItems = [
  {
    title: "Traditional Bakllava",
    image: "/bakllava.png",
    alt: "Traditional Bakllava",
  },
  {
    title: "Zup",
    image: "/zup.png",
    alt: "Zup Tradicionale",
  },
  {
    title: "Kasatë Speciale",
    image: "/kasatspeciale.png",
    alt: "Kasatë speciale",
  },
  {
    title: "Rafaello Ball",
    image: "/rafaelloball.png",
    alt: "Rafaelo embelsir",
  },
  {
    title: "Ice Cream",
    image: "/icecream.png",
    alt: "Akullore",
  },
  {
    title: "Cherry Cake",
    image: "/cherrycake.png",
    alt: "Kek me qershi",
  },
  {
    title: "Momblan",
    image: "/momblan.png",
    alt: "Momblan tradicional",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/tori-banner.webp')" }}
      >
        <div className="absolute inset-0 bg-black/75 z-0"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Sweet Moments, Freshly Baked
          </h1>
          <p className="text-lg max-w-xl text-white drop-shadow m-auto">
            Discover Berat&apos;s best traditional and modern pastries — made with
            love.
          </p>
          <a
            href="#menu"
            className="mt-6 inline-block bg-[#8B5E3C] text-white px-6 py-2 rounded-full hover:bg-[#6E4B2C] transition"
          >
            View Our Sweets
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-26 py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          At Pasticeri Tori, we blend tradition with trend. From the beloved
          bakllava to modern mousse cakes, every bite is a piece of our passion,
          born in the heart of Berat.
        </p>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="scroll-mt-26 py-16 px-6 bg-[#F5EBDD] text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Sweets</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto"
        >
          {menuItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow rounded-xl p-4">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={240}
                  className="rounded-lg mb-3 h-60 w-full object-cover"
                  loading="lazy"
                />
                <h3 className="text-lg font-medium pb-5">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-lg max-w-xl m-auto pt-10">
          Whether you&apos;re craving a sweet from your childhood or looking for the
          next Instagram-worthy treat, we&apos;ve got it all — handmade, fresh, and
          full of love.
        </p>
      </section>

      {/* Google Reviews */}
      <section id="reviews" className="px-0 py-16 text-center bg-white">
        <GoogleReviews />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-26 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Visit Us</h2>
        <p className="text-gray-700">Located in the museum neighbourhood of Berat</p>
        <p className="text-gray-700">📍 Rruga Antipatrea, Berat, Albania</p>
        <div className="w-full h-[300px] md:h-[450px] mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.6206616293102!2d19.949329199999998!3d40.7043514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135aa39210fc41d3%3A0x45dca1b3006cbe9!2sPasti%C3%A7eri%20Tori%20Berat!5e0!3m2!1sen!2s!4v1745495125711!5m2!1sen!2s"
            className="w-full h-full rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pasticeri Tori Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
