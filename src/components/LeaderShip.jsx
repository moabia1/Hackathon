import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const leaders = [
  {
    name: "ABHISHEK MALHAN",
    role: "CO-FOUNDER",
    img: "/assets/abhishek.jpg",
    linkedin: "#",
  },
  {
    name: "NISCHAY MALHAN",
    role: "CO-FOUNDER",
    img: "/assets/nischay.jpg",
    linkedin: "https://www.instagram.com/triggeredinsaan/?hl=en",
  },
  {
    name: "ANKIT MADAAN",
    role: "FOUNDER & CEO",
    img: "/assets/ankit-madaan.jpg",
    linkedin: "https://www.instagram.com/ankitmadaan/?hl=en",
  },
  {
    name: "MAYANK MISHRA",
    role: "FOUNDER & COO",
    img: "/assets/marquee6.jpeg",
    linkedin: "#",
  },
  {
    name: "AMAN MADAAN",
    role: "CO-FOUNDER, CFO",
    img: "/assets/aman-madaan.jpg",
    linkedin: "#",
  },
];

const Leadership = () => {
  return (
    <section className="py-16 px-6 bg-yellow-100/50 text-center w-full">
      <h2 className="text-3xl font-bold text-zinc-700 mb-12">Our Leadership</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {leaders.map((leader, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              scale={1.02}
              className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-0 right-0 bg-white p-1 rounded-full shadow-md hover:scale-105 transition"
                >
                  <img
                    src="/assets/instagram.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-600">{leader.role}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
