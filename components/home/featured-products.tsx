"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    category: 'Apparel',
    price: '$29.99',
    image: 'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'classic-t-shirt'
  },
  {
    id: 2,
    name: 'Canvas Tote',
    category: 'Accessories',
    price: '$24.99',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'canvas-tote'
  },
  {
    id: 3,
    name: 'Ceramic Mug',
    category: 'Home',
    price: '$19.99',
    image: 'https://images.pexels.com/photos/5858232/pexels-photo-5858232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'ceramic-mug'
  },
  {
    id: 4,
    name: 'Premium Hoodie',
    category: 'Apparel',
    price: '$59.99',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'premium-hoodie'
  }
];

export default function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <div className="h-full bg-background relative">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full py-16" ref={ref}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Our most popular items ready for your creative touch.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 md:mt-0"
            >
              <Button variant="outline" className="group">
                View all products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="relative rounded-lg overflow-hidden mb-4 aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="font-medium mt-1">{product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}