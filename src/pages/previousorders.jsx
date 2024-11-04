import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { fetchGetOrders } from '@/api';
import { NavLinks } from '@/layout/navlinks';
import { Clients } from '@/layout/clients';
import { Footer } from '@/layout/footer';

export default function PreviousOrders() {
  const [orders, setOrders] = useState([]);
  const [openOrder, setOpenOrder] = useState(null);

  useEffect(() => {
    const getPrevOrders = async () => {
        try {
            const response = await fetchGetOrders();
            setOrders(response);
        } catch (error) {
            console.error("Error fetching cards", error);
        }
    };
    getPrevOrders();
}, []);

  const toggleOrder = (orderId) => {
    setOpenOrder(openOrder === orderId ? null : orderId);
  };

  return (
    <>
    <NavLinks/>
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Previous Orders</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="justify-between flex">
              <TableHead >Order ID</TableHead>
              <TableHead className="mr-12">Date</TableHead>
              <TableHead className="mr-12">Total</TableHead>
              <TableHead className="mr-12">Status</TableHead>
              <TableHead >Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <Collapsible
                key={order.id}
                open={openOrder === order.id}
                onOpenChange={() => toggleOrder(order.id)}
              >
                <TableRow className="flex justify-between border rounded">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{new Date(order.order_date).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">${order.price.toFixed(2)}</TableCell>
                  <TableCell>{order.products.length > 0 ? "Completed" : "Processing"}</TableCell>
                  <TableCell className="text-right">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        {openOrder === order.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                        <span className="sr-only">Toggle order details</span>
                      </Button>
                    </CollapsibleTrigger>
                  </TableCell>
                </TableRow>
                <CollapsibleContent asChild>
                  <TableRow >
                    <TableCell  colSpan={5}>
                      <div className="p-4 bg-muted rounded-md mt-2">
                        <h3 className="font-semibold mb-2">Order Details</h3>
                        <Table >
                          <TableHeader>
                            <TableRow>
                              <TableHead>Product</TableHead>
                              <TableHead>Quantity</TableHead>
                              <TableHead>Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {order.products.map((product, index) => (
                              <TableRow key={index}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.count}</TableCell>
                                <TableCell>${product.price.toFixed(2)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TableCell>
                  </TableRow>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    <Clients/>
    <Footer/>
    </>
  );
}
