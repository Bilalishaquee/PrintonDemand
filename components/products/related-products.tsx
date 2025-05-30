"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  currentProductId: number;
};

const relatedProducts = [
  {
    id: 2,
    name: 'Premium Hoodie',
    price: '$59.99',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'premium-hoodie'
  },
  {
    id: 3,
    name: 'Canvas Tote',
    price: '$24.99',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'canvas-tote'
  },
  {
    id: 4,
    name: 'Ceramic Mug',
    price: '$19.99',
    image: 'https://images.pexels.com/photos/5858232/pexels-photo-5858232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'ceramic-mug'
  },
  {
    id: 5,
    name: 'Baseball Cap',
    price: '$29.99',
    image: 'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'baseball-cap'
  },
];

export default function RelatedProducts({ currentProductId }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <div className="mb-16" ref={ref}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {relatedProducts.filter(p => p.id !== currentProductId).map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/products/${product.slug}`}>
              <div className="relative rounded-lg overflow-hidden mb-3 aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-muted-foreground">{product.price}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}