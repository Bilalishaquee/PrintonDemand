import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ProductCustomizer from '@/components/products/product-customizer';
import RelatedProducts from '@/components/products/related-products';
import ProductReviews from '@/components/products/product-reviews';

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  // In a real app, this would fetch product data based on the slug
  const product = {
    id: 1,
    name: 'Classic T-Shirt',
    slug: 'classic-t-shirt',
    price: 29.99,
    description: 'Our premium t-shirt made from 100% organic cotton. Soft, breathable, and perfect for everyday wear. Available in multiple colors and sizes.',
    features: [
      'Premium 100% organic cotton',
      'Pre-shrunk fabric',
      'Durable stitching',
      'Tear-away label',
      'Eco-friendly production'
    ],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 2}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-medium mb-6">${product.price}</p>
          
          <div className="mb-6">
            <p className="text-muted-foreground">{product.description}</p>
          </div>
          
          {/* Color selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex space-x-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  style={{ 
                    backgroundColor: color.toLowerCase(),
                    border: color.toLowerCase() === 'white' ? '1px solid #e5e7eb' : 'none'
                  }}
                  aria-label={color}
                />
              ))}
            </div>
          </div>
          
          {/* Size selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border border-input rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div className="mb-8">
            <h3 className="font-medium mb-2">Features</h3>
            <ul className="space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col space-y-4">
            <Button size="lg">Add to Cart</Button>
            <Button size="lg" variant="outline">Customize Design</Button>
          </div>
        </div>
      </div>
      
      {/* Product Customizer */}
      <ProductCustomizer product={product} />
      
      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} />
      
      {/* Reviews */}
      <ProductReviews productId={product.id} />
    </div>
  );
}