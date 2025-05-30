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
  BarChart3,
  ShoppingBag,
  Package,
  Users,
  Settings,
  LayoutGrid,
  Search,
  Download,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Plus,
  Filter,
} from 'lucide-react';

// Sample data for the dashboard
const recentOrders = [
  { id: '#ORD-2023-1456', customer: 'Sarah Johnson', date: '2023-05-15', total: '$89.97', status: 'Delivered' },
  { id: '#ORD-2023-1455', customer: 'Michael Chen', date: '2023-05-14', total: '$124.50', status: 'Processing' },
  { id: '#ORD-2023-1454', customer: 'Emma Rodriguez', date: '2023-05-14', total: '$59.99', status: 'Shipped' },
  { id: '#ORD-2023-1453', customer: 'Alex Thompson', date: '2023-05-13', total: '$45.99', status: 'Processing' },
  { id: '#ORD-2023-1452', customer: 'Jamal Williams', date: '2023-05-12', total: '$79.98', status: 'Delivered' },
];

const productList = [
  { 
    id: 1, 
    name: 'Classic T-Shirt', 
    image: 'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$29.99',
    stock: 145,
    category: 'Apparel',
    status: 'Active'
  },
  { 
    id: 2, 
    name: 'Premium Hoodie', 
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$59.99',
    stock: 89,
    category: 'Apparel',
    status: 'Active'
  },
  { 
    id: 3, 
    name: 'Canvas Tote', 
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$24.99',
    stock: 212,
    category: 'Accessories',
    status: 'Active'
  },
  { 
    id: 4, 
    name: 'Ceramic Mug', 
    image: 'https://images.pexels.com/photos/5858232/pexels-photo-5858232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$19.99',
    stock: 178,
    category: 'Home',
    status: 'Active'
  },
  { 
    id: 5, 
    name: 'Baseball Cap', 
    image: 'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$29.99',
    stock: 67,
    category: 'Accessories',
    status: 'Low Stock'
  },
];

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="bg-muted min-h-screen flex">
      {/* Sidebar */}
      <aside className={`bg-background transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} h-screen fixed shadow-md z-10`}>
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {sidebarOpen ? (
              <h1 className="font-bold text-lg">PrintMint Admin</h1>
            ) : (
              <span className="font-bold text-lg">PM</span>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? '<' : '>'}
            </Button>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className={`w-full justify-${sidebarOpen ? 'start' : 'center'}`}>
                <BarChart3 className={`h-5 w-5 ${sidebarOpen ? 'mr-2' : ''}`} />
                {sidebarOpen && 'Dashboard'}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className={`w-full justify-${sidebarOpen ? 'start' : 'center'}`}>
                <ShoppingBag className={`h-5 w-5 ${sidebarOpen ? 'mr-2' : ''}`} />
                {sidebarOpen && 'Orders'}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className={`w-full justify-${sidebarOpen ? 'start' : 'center'}`}>
                <Package className={`h-5 w-5 ${sidebarOpen ? 'mr-2' : ''}`} />
                {sidebarOpen && 'Products'}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className={`w-full justify-${sidebarOpen ? 'start' : 'center'}`}>
                <Users className={`h-5 w-5 ${sidebarOpen ? 'mr-2' : ''}`} />
                {sidebarOpen && 'Customers'}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className={`w-full justify-${sidebarOpen ? 'start' : 'center'}`}>
                <LayoutGrid className={`h-5 w-5 ${sidebarOpen ? 'mr-2' : ''}`} />
                {sidebarOpen && 'Categories'}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className={`w-full justify-${sidebarOpen ? 'start' : 'center'}`}>
                <Settings className={`h-5 w-5 ${sidebarOpen ? 'mr-2' : ''}`} />
                {sidebarOpen && 'Settings'}
              </Button>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* Main content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Admin!</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Product
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Orders', value: '1,245', change: '+12.5%', trend: 'up' },
              { title: 'Total Revenue', value: '$48,325', change: '+8.2%', trend: 'up' },
              { title: 'Avg. Order Value', value: '$38.82', change: '-2.4%', trend: 'down' },
              { title: 'Active Customers', value: '842', change: '+5.3%', trend: 'up' },
            ].map((stat, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-muted-foreground">{stat.title}</h2>
                  <span className={`flex items-center text-xs px-2 py-1 rounded-full ${
                    stat.trend === 'up' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
          
          {/* Main content tabs */}
          <Tabs defaultValue="recent-orders">
            <TabsList className="mb-6">
              <TabsTrigger value="recent-orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent-orders">
              <div className="bg-background rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 flex justify-between items-center border-b border-border">
                  <h2 className="font-bold">Recent Orders</h2>
                  <div className="flex items-center">
                    <div className="relative mr-2">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search orders..."
                        className="pl-9 pr-4 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center">
                            Order ID
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center">
                            Customer
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center">
                            Date
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center">
                            Total
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center">
                            Status
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-muted/50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {order.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {order.customer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {order.total}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                                : order.status === 'Shipped'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="px-6 py-4 border-t border-border flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Showing 5 of 125 orders
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="products">
              <div className="bg-background rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 flex justify-between items-center border-b border-border">
                  <h2 className="font-bold">Products</h2>
                  <div className="flex items-center">
                    <div className="relative mr-2">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="pl-9 pr-4 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center">
                            Price
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center">
                            Stock
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center">
                            Category
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center">
                            Status
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {productList.map((product) => (
                        <tr key={product.id} className="hover:bg-muted/50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="relative h-10 w-10 rounded overflow-hidden mr-3">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                              <span className="font-medium">{product.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {product.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {product.stock}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {product.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              product.status === 'Active' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                            }`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="px-6 py-4 border-t border-border flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Showing 5 of 25 products
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}