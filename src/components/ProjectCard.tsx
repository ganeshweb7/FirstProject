import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../data';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * width); // Scale for effect intensity
    y.set(yPct * height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="super-card"
      style={{ rotateX, rotateY, perspective: 1000, minWidth: '400px', height: '550px', cursor: 'pointer' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, translateZ: 20 }}
    >
      <div style={{ height: '60%', overflow: 'hidden', position: 'relative' }}>
        <motion.img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-surface), transparent)' }} />
      </div>

      <div style={{ padding: '2rem', position: 'relative', zIndex: 2 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            {project.tags.slice(0,2).map((tag: string) => (
              <span key={tag} style={{ border: '1px solid var(--accent-cyan)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>{tag}</span>
            ))}
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'white' }}>{project.title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{project.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
