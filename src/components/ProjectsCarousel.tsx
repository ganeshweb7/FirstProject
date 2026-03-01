import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data';
import ProjectCard from './ProjectCard';
import DecryptedText from './DecryptedText';

const ProjectsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" style={{ padding: '100px 0', overflow: 'hidden' }} ref={containerRef}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem' }}>
              <DecryptedText text="FEATURED MODULES" />
            </h2>
            <p style={{ opacity: 0.6, letterSpacing: '2px' }}>DEPLOYED ARTIFACTS</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <motion.button 
              onClick={() => scroll('left')} 
              className="glass-card" 
              whileHover={{ scale: 1.1, x: -5, borderColor: 'var(--accent-cyan)' }}
              whileTap={{ scale: 0.9 }}
              style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--accent-cyan)' }}
            >
              ←
            </motion.button>
            <motion.button 
              onClick={() => scroll('right')} 
              className="glass-card" 
              whileHover={{ scale: 1.1, x: 5, borderColor: 'var(--accent-cyan)' }}
              whileTap={{ scale: 0.9 }}
              style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--accent-cyan)' }}
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
      
      <motion.div 
        ref={scrollRef}
        style={{ 
          display: 'flex', 
          gap: '3rem', 
          padding: '20px 10vw', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 100, rotateY: 30 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 50 }}
            style={{ scrollSnapAlign: 'start', perspective: '1000px' }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
        <div style={{ minWidth: '5vw' }}></div>
      </motion.div>
    </section>
  );
};

export default ProjectsCarousel;
