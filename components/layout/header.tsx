"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">PrintMint</Link>
        
        <nav className={cn(
          "fixed md:relative top-16 md:top-0 right-0 bottom-0 md:h-auto",
          "w-64 md:w-auto bg-background md:bg-transparent",
          "transform transition-transform duration-300 ease-in-out md:transform-none",
          "flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-0",
          "shadow-lg md:shadow-none z-40",
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
        )}>
          {[
            { title: 'Products', href: '/products' },
            { title: 'How It Works', href: '/how-it-works' },
            { title: 'About', href: '/about' },
            { title: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={cn(
                "relative px-2 py-1 text-foreground/80 hover:text-foreground transition-colors",
                pathname === item.href && "font-medium text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}