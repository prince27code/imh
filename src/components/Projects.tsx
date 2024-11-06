import { motion } from 'framer-motion';
import tourism from '../assets/tourism.gif'; // GIF file
import disability from '../assets/disability.mp4'; // You can still use video or convert it to GIF if needed

const projects = [
  { 
    title: 'Tuborg Nagarkot Tourism Fair', 
    type: 'Event',
    video: tourism, // GIF instead of video
  },
  { 
    title: 'Acting Icon Kabre', 
    type: 'Reality Show',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-camera-for-her-video-blog-47654-large.mp4', // Video URL
  },
  { 
    title: 'Mr. & Ms. Nepal for Disability', 
    type: 'Reality Show',
    video: disability, // Video file
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Recent Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl h-64"
            >
              {/* Displaying GIF or Video depending on the format */}
              {project.video.endsWith('.gif') ? (
                <img 
                  src={project.video} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end group-hover:from-black/95 transition-colors duration-300">
                <div className="p-6 text-white w-full">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-medium gradient-accent px-3 py-1 rounded-full inline-block"
                  >
                    {project.type}
                  </motion.span>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl font-semibold mt-2"
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}