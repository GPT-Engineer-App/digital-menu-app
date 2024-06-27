import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-4xl font-bold text-center">Welcome to Our Restaurant</h1>
      <p className="text-center text-lg">Explore our delicious menu below</p>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Appetizers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Start your meal with our delightful appetizers.</p>
            <Button variant="outline" className="mt-2">View Appetizers</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Main Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Enjoy our delicious main courses.</p>
            <Button variant="outline" className="mt-2">View Main Courses</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Desserts</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Indulge in our sweet and savory desserts.</p>
            <Button variant="outline" className="mt-2">View Desserts</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Beverages</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Refresh yourself with our variety of beverages.</p>
            <Button variant="outline" className="mt-2">View Beverages</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;