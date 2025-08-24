import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function ShadcnShowcase() {
  const [email, setEmail] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">shadcn/ui</h2>
        <p className="text-gray-600">Demo of installed components</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Different types of buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Delete</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>Inputs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input type="password" placeholder="Password" />
            <Input disabled placeholder="Disabled input" />
            {email && (
              <p className="text-sm text-green-600">✓ Email: {email}</p>
            )}
          </CardContent>
        </Card>

        {/* Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog</CardTitle>
            <CardDescription>Modal</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  Open Modal
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Example Dialog</DialogTitle>
                  <DialogDescription>
                    Example modal 
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <Input placeholder="Your name" />
                  <Input type="email" placeholder="Your email" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Card Example */}
        <Card>
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>Card</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              shadcn/ui
            </p>
            <Button variant="ghost" className="w-full">
              Ghost Button
            </Button>
          </CardContent>
        </Card>
      </div>
      </div>
  );
}
