"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  User,
  ShoppingBag,
  Heart,
  Settings,
  LogOut,
  Package,
  Clock,
  CheckCircle,
  X,
  Edit,
} from 'lucide-react';

const savedDesigns = [
  {
    id: 1,
    name: 'Summer Team Shirt',
    date: '2023-05-10',
    image: 'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    product: 'Classic T-Shirt',
  },
  {
    id: 2,
    name: 'Conference Swag',
    date: '2023-04-22',
    image: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    product: 'Premium Hoodie',
  },
];

const orders = [
  {
    id: '#ORD-2023-1456',
    date: '2023-05-15',
    status: 'Delivered',
    total: '$89.97',
    items: [
      {
        name: 'Classic T-Shirt (Custom Design)',
        quantity: 3,
        price: '$29.99',
        image: 'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
  {
    id: '#ORD-2023-1387',
    date: '2023-04-02',
    status: 'Processing',
    total: '$59.99',
    items: [
      {
        name: 'Premium Hoodie (Custom Design)',
        quantity: 1,
        price: '$59.99',
        image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
];

export default function AccountPage() {
  const [editing, setEditing] = useState(false);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="bg-background rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Profile"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className="text-xl font-medium">Sarah Johnson</h2>
              <p className="text-muted-foreground">sarah.j@example.com</p>
            </div>
            
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Orders
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Heart className="mr-2 h-4 w-4" />
                Saved Designs
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="orders" className="flex-1">Orders</TabsTrigger>
              <TabsTrigger value="designs" className="flex-1">Saved Designs</TabsTrigger>
              <TabsTrigger value="profile" className="flex-1">Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders">
              <div className="bg-background rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Order History</h2>
                
                {orders.length > 0 ? (
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg overflow-hidden">
                        <div className="bg-muted p-4 flex flex-col sm:flex-row justify-between">
                          <div>
                            <div className="flex items-center mb-2">
                              <span className="font-medium mr-2">{order.id}</span>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                order.status === 'Delivered' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Ordered on {order.date}
                            </p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <span className="text-sm font-medium">Total: {order.total}</span>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          {order.items.map((item, i) => (
                            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center py-3">
                              <div className="relative w-16 h-16 rounded-md overflow-hidden mr-4 mb-4 sm:mb-0">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  Qty: {item.quantity} × {item.price}
                                </p>
                              </div>
                              {order.status === 'Delivered' && (
                                <Button size="sm" variant="outline" className="mt-2 sm:mt-0">
                                  Buy Again
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-muted p-4 border-t border-border">
                          <div className="flex justify-between">
                            <Button variant="outline" size="sm">
                              Order Details
                            </Button>
                            <Button size="sm">
                              Track Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                    <p className="text-muted-foreground mb-4">
                      When you place an order, it will appear here.
                    </p>
                    <Button>Start Shopping</Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="designs">
              <div className="bg-background rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Saved Designs</h2>
                
                {savedDesigns.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {savedDesigns.map((design) => (
                      <div key={design.id} className="border border-border rounded-lg overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={design.image}
                            alt={design.name}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-1">{design.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Saved on {design.date} • {design.product}
                          </p>
                          <div className="flex space-x-2">
                            <Button size="sm">Edit Design</Button>
                            <Button size="sm" variant="outline">Order Now</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">No saved designs</h3>
                    <p className="text-muted-foreground mb-4">
                      Your custom designs will appear here when you save them.
                    </p>
                    <Button>Start Designing</Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="profile">
              <div className="bg-background rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Profile Information</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setEditing(!editing)}
                  >
                    {editing ? (
                      <>
                        <X className="h-4 w-4 mr-2" /> 
                        Cancel
                      </>
                    ) : (
                      <>
                        <Edit className="h-4 w-4 mr-2" /> 
                        Edit
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      {editing ? (
                        <input
                          type="text"
                          defaultValue="Sarah"
                          className="w-full px-3 py-2 border border-input rounded-md"
                        />
                      ) : (
                        <p>Sarah</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      {editing ? (
                        <input
                          type="text"
                          defaultValue="Johnson"
                          className="w-full px-3 py-2 border border-input rounded-md"
                        />
                      ) : (
                        <p>Johnson</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      {editing ? (
                        <input
                          type="email"
                          defaultValue="sarah.j@example.com"
                          className="w-full px-3 py-2 border border-input rounded-md"
                        />
                      ) : (
                        <p>sarah.j@example.com</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      {editing ? (
                        <input
                          type="tel"
                          defaultValue="(555) 123-4567"
                          className="w-full px-3 py-2 border border-input rounded-md"
                        />
                      ) : (
                        <p>(555) 123-4567</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="font-medium mb-4">Default Shipping Address</h3>
                    {editing ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium mb-2">
                            Street Address
                          </label>
                          <input
                            type="text"
                            defaultValue="123 Main St, Apt 4B"
                            className="w-full px-3 py-2 border border-input rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            defaultValue="San Francisco"
                            className="w-full px-3 py-2 border border-input rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            State
                          </label>
                          <input
                            type="text"
                            defaultValue="CA"
                            className="w-full px-3 py-2 border border-input rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Zip Code
                          </label>
                          <input
                            type="text"
                            defaultValue="94103"
                            className="w-full px-3 py-2 border border-input rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Country
                          </label>
                          <input
                            type="text"
                            defaultValue="United States"
                            className="w-full px-3 py-2 border border-input rounded-md"
                          />
                        </div>
                      </div>
                    ) : (
                      <address className="not-italic">
                        123 Main St, Apt 4B<br />
                        San Francisco, CA 94103<br />
                        United States
                      </address>
                    )}
                  </div>
                  
                  {editing && (
                    <div className="flex justify-end">
                      <Button>Save Changes</Button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}