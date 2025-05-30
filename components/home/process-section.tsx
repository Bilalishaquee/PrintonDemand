"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Shirt, Truck, Zap } from 'lucide-react';

const steps = [
  {
    title: 'Choose Your Product',
    description: 'Select from our range of premium quality products.',
    icon: Shirt,
    color: 'bg-chart-1/10 text-chart-1'
  },
  {
    title: 'Design & Customize',
    description: 'Upload your design or use our tools to create something unique.',
    icon: Palette,
    color: 'bg-chart-2/10 text-chart-2'
  },
  {
    title: 'Rapid Production',
    description: 'We print your design with precision and care.',
    icon: Zap,
    color: 'bg-chart-3/10 text-chart-3'
  },
  {
    title: 'Fast Delivery',
    description: 'Your custom product ships to your door.',
    icon: Truck,
    color: 'bg-chart-4/10 text-chart-4'
  }
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <div className="h-full bg-muted relative">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full py-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to creation, we make it easy to bring your ideas to life with premium quality products.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mt-16"
          >
            <div className="h-1 bg-border rounded-full w-full max-w-md relative">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 1.5, delay: 0.7, ease: 'easeOut' }}
                className="absolute top-0 left-0 h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}