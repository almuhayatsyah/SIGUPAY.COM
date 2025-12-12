"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama proses pengerjaan?",
    answer: "Untuk Landing Page pengerjaan cepat 3-5 hari kerja. Sedangkan untuk Sistem Kos/Kasir dan Aplikasi Custom membutuhkan waktu 2-4 minggu tergantung kompleksitas fitur.",
  },
  {
    question: "Apakah Sistem POS memerlukan koneksi internet?",
    answer: "Sistem kami berbasis web (Cloud), yang berarti data aman tersimpan di server. Namun, kami juga menyediakan opsi Hybrid dimana kasir tetap bisa input transaksi saat internet mati.",
  },
  {
    question: "Apakah bisa request fitur khusus untuk aplikasi?",
    answer: "Tentu! Layanan utama kami adalah 'Web Apps Custom', dimana kami membangun sistem dari nol sesuai dengan alur kerja dan kebutuhan unik bisnis Anda.",
  },
  {
    question: "Apa bedanya Landing Page biasa dengan Plus CMS?",
    answer: "Landing Page biasa kontennya statis (tetap). Dengan Plus CMS, Anda mendapatkan panel admin untuk mengubah teks, harga, atau gambar produk sendiri kapan saja.",
  },
  {
    question: "Apakah ada biaya langganan bulanan?",
    answer: "Untuk paket Jasa Pembuatan (Jual Putus) tidak ada biaya bulanan, cukup perpanjang Domain & Hosting per tahun. Kecuali Anda mengambil paket Maintenance/Support khusus.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pertanyaan Umum (FAQ)</h2>
          <p className="text-gray-600">
            Jawaban untuk pertanyaan yang sering diajukan oleh calon klien kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
