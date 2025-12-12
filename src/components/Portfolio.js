"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const categories = ["Semua", "Landing Page", "Sistem POS/Kasir", "Web Apps Custom"];

const projects = [
  {
    title: "Promosi Kopi Gayo",
    category: "Landing Page",
    image: "https://placehold.co/600x400/795548/ffffff?text=Kopi+Gayo",
    link: "#",
  },
  {
    title: "Sistem Kasir Warung Pintar",
    category: "Sistem POS/Kasir",
    image: "https://placehold.co/600x400/2196f3/ffffff?text=POS+System",
    link: "#",
  },
  {
    title: "Aplikasi Manajemen Gudang",
    category: "Web Apps Custom",
    image: "https://placehold.co/600x400/607d8b/ffffff?text=Manajemen+Gudang",
    link: "#",
  },
  {
    title: "Company Profile Konstruksi",
    category: "Landing Page",
    image: "https://placehold.co/600x400/ff9800/ffffff?text=Company+Profile",
    link: "#",
  },
  {
    title: "Aplikasi Booking Klinik",
    category: "Web Apps Custom",
    image: "https://placehold.co/600x400/4caf50/ffffff?text=Aplikasi+Klinik",
    link: "#",
  },
  {
    title: "Sistem Kasir Distro",
    category: "Sistem POS/Kasir",
    image: "https://placehold.co/600x400/e91e63/ffffff?text=Kasir+Distro",
    link: "#",
  },
];

export default function Portfolio({ limit }) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = activeCategory === "Semua"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="portofolio" className="py-15 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portofolio Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Lihat beberapa hasil karya terbaik kami yang telah membantu klien mencapai tujuan bisnis mereka.
          </p>

          {!limit && (
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.category}</p>
                <span
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Lihat Website <ExternalLink size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/portofolio"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Lihat Semua Portofolio
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
