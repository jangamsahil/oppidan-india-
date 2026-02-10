import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Dumbbell, Mail, Phone, MapPin } from "lucide-react";

export default function OppidanHomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Oppidan India Sportz Academy</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#programs" className="hover:text-gray-300">Programs</a>
            <a href="#whyus" className="hover:text-gray-300">Why Us</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Building Champions. <br /> Shaping Futures.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Oppidan India Sportz Academy is dedicated to nurturing athletic talent with
              professional coaching, modern infrastructure, and a champion mindset.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">Enroll Now</Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
              alt="Sports Training"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">About Oppidan</h3>
          <p className="text-gray-600 leading-relaxed">
            Oppidan India Sportz Academy focuses on holistic athlete development by combining
            physical training, mental conditioning, discipline, and sports ethics. Our goal is
            to prepare athletes for competitive excellence at state, national, and international levels.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Our Programs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <Trophy className="mx-auto mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2">Professional Coaching</h4>
                <p className="text-gray-600">
                  Certified and experienced coaches focused on skill, performance, and growth.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <Dumbbell className="mx-auto mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2">Strength & Conditioning</h4>
                <p className="text-gray-600">
                  Scientific fitness programs designed to build endurance, strength, and agility.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2">Youth Development</h4>
                <p className="text-gray-600">
                  Grassroots programs that identify and nurture young sporting talent early.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="whyus" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us</h3>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">Modern Facilities</h4>
            <p className="text-gray-600">World-class infrastructure for elite training.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Expert Mentors</h4>
            <p className="text-gray-600">Guidance from seasoned professionals.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Proven Results</h4>
            <p className="text-gray-600">Athletes performing at top competitive levels.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Holistic Growth</h4>
            <p className="text-gray-600">Focus on discipline, mindset, and sportsmanship.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="mx-auto mb-3" />
              <p>+91 9XXXXXXXXX</p>
            </div>
            <div>
              <Mail className="mx-auto mb-3" />
              <p>info@oppidansportz.com</p>
            </div>
            <div>
              <MapPin className="mx-auto mb-3" />
              <p>India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} Oppidan India Sportz Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}