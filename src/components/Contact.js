import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Siap untuk mendigitalkan bisnis Anda? Hubungi kami sekarang untuk konsultasi gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">WhatsApp / Telepon</h3>
                <p className="text-gray-600">+62 812 3456 7890</p>
                <p className="text-gray-500 text-sm">Senin - Jumat, 09:00 - 17:00 WIB</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">halo@almuhayatsyahstudio.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Alamat Studio</h3>
                <p className="text-gray-600">
                  Jl. Merdeka No. 123, Blangpidie<br />
                  Aceh Barat Daya, Aceh 23763
                </p>
              </div>
            </div>
          </div>

          <form className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="Nama Anda" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Nomor WhatsApp</label>
              <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="0812..." />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Pesan / Kebutuhan</label>
              <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-32" placeholder="Ceritakan kebutuhan website Anda..."></textarea>
            </div>
            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
