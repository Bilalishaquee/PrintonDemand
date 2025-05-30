"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium T-Shirt',
    description: 'Ultra-soft cotton blend with a perfect fit.',
    image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$29.99',
  },
  {
    id: 2,
    name: 'Eco Hoodie',
    description: 'Sustainable materials with premium feel and durability.',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$59.99',
  },
  {
    id: 3,
    name: 'Canvas Tote',
    description: 'Sturdy, high-quality canvas built to last.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$24.99',
  },
];

export default function ProductShowcase() {
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const nextProduct = () => {
    setCurrentProduct((current) => (current + 1) % products.length);
  };
  
  const prevProduct = () => {
    setCurrentProduct((current) => (current - 1 + products.length) % products.length);
  };
  
  return (
    <div className="h-full bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 h-full py-16">
          <div className="flex flex-col justify-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              key={`title-${currentProduct}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              Crafted with care,<br />designed by you
            </motion.h2>
            
            <motion.div
              key={`product-${currentProduct}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-medium mb-2">{products[currentProduct].name}</h3>
              <p className="text-muted-foreground mb-4">{products[currentProduct].description}</p>
              <p className="text-xl font-medium">{products[currentProduct].price}</p>
            </motion.div>
            
            <div className="flex space-x-4 mb-8">
              <Button>Customize Now</Button>
              <Button variant="outline">View Details</Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={prevProduct}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="text-sm text-muted-foreground">
                {currentProduct + 1} / {products.length}
              </div>
              <Button variant="ghost" size="icon" onClick={nextProduct}>
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center h-full">
            <div className="relative w-full aspect-square">
              <motion.div
                key={`image-${currentProduct}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={products[currentProduct].image}
                  alt={products[currentProduct].name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}