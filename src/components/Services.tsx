import { motion } from "framer-motion";
import { Tv, Share2, Radio, PenTool, Video, Calendar } from "lucide-react";
import Beam from "././ui/CardWithBeam";

const services = [
  {
    icon: <Radio size={24} />,
    title: "Media Management & Consultant",
    description:
      "Comprehensive media consulting services to enhance your brand presence",
  },
  {
    icon: <Share2 size={24} />,
    title: "Digital & Social Media Marketing",
    description:
      "Strategic social media management and digital marketing solutions",
  },
  {
    icon: <PenTool size={24} />,
    title: "Research & Branding",
    description: "In-depth market research and powerful branding strategies",
  },
  {
    icon: <Calendar size={24} />,
    title: "Event Management",
    description: "End-to-end event planning and execution services",
  },
  {
    icon: <Video size={24} />,
    title: "Video Production",
    description: "Professional video and TV program production",
  },
  {
    icon: <Tv size={24} />,
    title: "Reality Show Production",
    description: "Innovative reality show concepts and production",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A1A1A] via-[#2C1F3A] to-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gradient"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-[#1A1A1A]/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl border border-[#2C1F3A] overflow-hidden"
            >
              <Beam className="top-0" />
              <Beam className="top-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
              <div className="z-0 ">
                <div className="absolute bottom-0 right-4 mt-[2px] flex h-8 items-end overflow-hidden">
                  <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
