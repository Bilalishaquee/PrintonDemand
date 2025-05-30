"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Palette,
  Type,
  Image as ImageIcon,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Shirt,
  Tag,
  Layers,
} from 'lucide-react';

type Product = {
  id: number;
  name: string;
  price: number;
  images: string[];
  // other product props...
};

type Props = {
  product: Product;
};

export default function ProductCustomizer({ product }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('front');
  const [zoom, setZoom] = useState(1);
  const canvasRef = useRef<HTMLDivElement>(null);
  
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 1.5));
  };
  
  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.5));
  };
  
  const handleReset = () => {
    setZoom(1);
  };
  
  if (!isOpen) {
    return (
      <div className="bg-muted rounded-xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Make It Your Own</h2>
          <p className="text-muted-foreground mb-6">
            Use our interactive design tool to customize this product with your own artwork, text, and colors.
          </p>
          <Button size="lg" onClick={() => setIsOpen(true)}>
            Start Customizing
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-muted rounded-xl p-4 md:p-8 mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Customize Your {product.name}</h2>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
          Close Editor
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left sidebar - Tools */}
        <div className="bg-background rounded-lg p-4 shadow-sm">
          <Tabs defaultValue="text">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="text" className="flex-1">
                <Type className="h-4 w-4 mr-2" />
                Text
              </TabsTrigger>
              <TabsTrigger value="images" className="flex-1">
                <ImageIcon className="h-4 w-4 mr-2" />
                Images
              </TabsTrigger>
              <TabsTrigger value="colors" className="flex-1">
                <Palette className="h-4 w-4 mr-2" />
                Colors
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="text" className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Add Text</h3>
                <input
                  type="text"
                  placeholder="Enter your text here"
                  className="w-full px-3 py-2 border border-input rounded-md"
                />
                <Button className="w-full mt-2">Add Text</Button>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Font</h3>
                <select className="w-full px-3 py-2 border border-input rounded-md">
                  <option>Arial</option>
                  <option>Helvetica</option>
                  <option>Times New Roman</option>
                  <option>Montserrat</option>
                  <option>Roboto</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Text Color</h3>
                <div className="grid grid-cols-6 gap-2">
                  {['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00'].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{ backgroundColor: color }}
                      aria-label={`Color ${color}`}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="images" className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Upload Image</h3>
                <div className="border-2 border-dashed border-input rounded-md p-4 text-center">
                  <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your image here or click to browse
                  </p>
                  <Button size="sm" variant="outline">Browse Files</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Your Uploads</h3>
                <p className="text-sm text-muted-foreground">No images uploaded yet.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="colors" className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Product Color</h3>
                <div className="grid grid-cols-6 gap-2">
                  {['#FFFFFF', '#000000', '#0077B6', '#6C757D', '#DC3545', '#343A40'].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{ backgroundColor: color }}
                      aria-label={`Color ${color}`}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="text-sm font-medium mb-4">Layers</h3>
            <div className="bg-muted rounded-md p-3 mb-2 flex justify-between items-center">
              <div className="flex items-center">
                <Layers className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">Your Text</span>
              </div>
              <Button variant="ghost" size="sm">
                <Layers className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Drag layers to change their order.
            </p>
          </div>
        </div>
        
        {/* Center - Preview */}
        <div className="lg:col-span-2">
          <div className="bg-background rounded-lg p-4 shadow-sm mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <Button 
                  variant={selectedView === 'front' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedView('front')}
                >
                  Front
                </Button>
                <Button 
                  variant={selectedView === 'back' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedView('back')}
                >
                  Back
                </Button>
                <Button 
                  variant={selectedView === 'label' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedView('label')}
                >
                  Label
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={handleZoomOut}>
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleZoomIn}>
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative bg-muted/50 rounded-md overflow-hidden" style={{ height: '400px' }}>
              <div 
                ref={canvasRef}
                className="absolute inset-0 flex items-center justify-center"
                style={{ 
                  transform: `scale(${zoom})`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                {/* This would be replaced with actual customizable canvas */}
                <div className="relative w-full max-w-xs">
                  <Image
                    src={product.images[0]}
                    alt={`${product.name} ${selectedView} view`}
                    width={300}
                    height={400}
                    style={{ objectFit: 'contain' }}
                  />
                  {/* Placeholder for design elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-move">
                    <p className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded text-black font-medium border border-dashed border-gray-400">
                      Your Text Here
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-md px-3 py-2 text-xs">
                <div className="flex items-center">
                  <Shirt className="h-4 w-4 mr-2 text-primary" />
                  <span>{product.name} - {selectedView} view</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-lg p-4 shadow-sm flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-sm mb-1">Product Price: <span className="font-medium">${product.price.toFixed(2)}</span></p>
              <p className="text-xs text-muted-foreground">Customization is included in the price</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button variant="outline">Save Design</Button>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}