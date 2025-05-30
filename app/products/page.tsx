"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: '$29.99',
    category: 'Apparel',
    image: 'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'classic-t-shirt'
  },
  {
    id: 2,
    name: 'Premium Hoodie',
    price: '$59.99',
    category: 'Apparel',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'premium-hoodie'
  },
  {
    id: 3,
    name: 'Canvas Tote',
    price: '$24.99',
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'canvas-tote'
  },
  {
    id: 4,
    name: 'Ceramic Mug',
    price: '$19.99',
    category: 'Home',
    image: 'https://images.pexels.com/photos/5858232/pexels-photo-5858232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'ceramic-mug'
  },
  {
    id: 5,
    name: 'Baseball Cap',
    price: '$29.99',
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'baseball-cap'
  },
  {
    id: 6,
    name: 'Phone Case',
    price: '$24.99',
    category: 'Tech',
    image: 'https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'phone-case'
  }
];

const categories = ['All', 'Apparel', 'Accessories', 'Home', 'Tech'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Popular'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Our Products</h1>
          <p className="text-muted-foreground">
            Premium quality products ready for your creative touch.
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-[200px]"
            />
          </div>
          
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-8">
        <p className="text-muted-foreground">
          Showing {filteredProducts.length} products
        </p>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-input bg-background px-3 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-medium mb-1">{product.name}</h3>
              <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
              <p className="font-medium">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}