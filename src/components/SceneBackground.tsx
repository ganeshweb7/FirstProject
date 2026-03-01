import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SceneBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -2, perspective: '1000px', overflow: 'hidden' }}>
      <div className="fog-layer" />
      
      {/* 3D Floating Geometry (CSS Only) */}
      <motion.div 
        style={{ 
          position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px',
          border: '1px solid rgba(0, 229, 255, 0.1)', borderRadius: '50%',
          y: y1, rotateX: rotate, rotateY: rotate
        }} 
      />
      <motion.div 
        style={{ 
          position: 'absolute', bottom: '10%', left: '5%', width: '600px', height: '600px',
          border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '40%',
          y: y2, rotateX: rotate, rotateY: y1
        }} 
      />
      
      {/* Moving Grid Floor */}
      <div style={{
        position: 'absolute', bottom: '-50%', left: '-50%', width: '200%', height: '100%',
        background: 'linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        transform: 'rotateX(70deg)',
        maskImage: 'linear-gradient(to top, black, transparent)',
        animation: 'grid-scroll 20s linear infinite'
      }} />

      <style>{`
        @keyframes grid-scroll {
          from { transform: rotateX(70deg) translateY(0); }
          to { transform: rotateX(70deg) translateY(100px); }
        }
      `}</style>
    </div>
  );
};

export default SceneBackground;
