"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HomeHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const calculateMovement = (axis: 'x' | 'y', intensity = 0.02) => {
    const centerPosition = axis === 'x' ? windowSize.width / 2 : windowSize.height / 2;
    const mousePos = axis === 'x' ? mousePosition.x : mousePosition.y;
    return (mousePos - centerPosition) * intensity;
  };
  
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-background to-muted">
      {/* Background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: calculateMovement('x', 0.03),
          y: calculateMovement('y', 0.03),
        }}
        transition={{ type: 'spring', damping: 50 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          x: calculateMovement('x', -0.02),
          y: calculateMovement('y', -0.02),
        }}
        transition={{ type: 'spring', damping: 50 }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Your design, our expertise.
            <span className="block text-primary">Perfect products.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Create custom apparel and accessories with our premium print-on-demand service. 
            Designed by you, crafted by us.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button size="lg" className="group">
              Start designing
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Explore products
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <motion.div 
            className="w-1 h-8 bg-border rounded-full overflow-hidden"
            initial={{ opacity: 0.6 }}
          >
            <motion.div 
              className="w-full bg-primary"
              initial={{ height: 0 }}
              animate={{ 
                height: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}