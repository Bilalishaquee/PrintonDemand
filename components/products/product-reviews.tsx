"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, MessageSquare, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  productId: number;
};

const reviews = [
  {
    id: 1,
    author: 'Alex Thompson',
    date: '2023-05-15',
    rating: 5,
    title: 'Excellent quality and print',
    content: 'I ordered a custom t-shirt with my own design and the quality exceeded my expectations. The print is vibrant and has held up through multiple washes. Sizing is perfect too.',
    helpful: 24,
    verified: true
  },
  {
    id: 2,
    author: 'Jamie Rodriguez',
    date: '2023-04-22',
    rating: 4,
    title: 'Great shirt, slightly small',
    content: 'The shirt quality and print are excellent. My only minor complaint is that it runs slightly smaller than expected. Consider sizing up if you\'re between sizes.',
    helpful: 18,
    verified: true
  },
  {
    id: 3,
    author: 'Sam Wilson',
    date: '2023-03-10',
    rating: 5,
    title: 'Perfect custom gift',
    content: 'Made a custom shirt as a gift and it turned out amazing. The recipient loved it and the quality is top-notch. Will definitely order again for future gifts.',
    helpful: 12,
    verified: true
  }
];

export default function ProductReviews({ productId }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState('reviews');
  
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  return (
    <div ref={ref}>
      <div className="border-t border-border pt-12">
        <div className="flex border-b border-border">
          <button
            className={`px-6 py-3 font-medium text-sm ${activeTab === 'reviews' ? 'border-b-2 border-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({reviews.length})
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm ${activeTab === 'faq' ? 'border-b-2 border-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQs
          </button>
        </div>
        
        {activeTab === 'reviews' && (
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-1"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-end mb-2">
                    <span className="text-4xl font-bold">{averageRating.toFixed(1)}</span>
                    <span className="text-lg text-muted-foreground">/5</span>
                  </div>
                  <div className="flex mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.round(averageRating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Based on {reviews.length} reviews</p>
                  <Button>Write a Review</Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-3"
              >
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center mb-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
                              />
                            ))}
                          </div>
                          <h3 className="font-medium">{review.title}</h3>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{review.content}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="text-sm mr-4">
                            <span className="font-medium">{review.author}</span>
                            {review.verified && (
                              <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          Helpful ({review.helpful})
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}
        
        {activeTab === 'faq' && (
          <div className="py-8">
            <p className="text-center text-muted-foreground">Product FAQs coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}