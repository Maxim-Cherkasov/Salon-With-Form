"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Menu, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#services" className="text-lg">Services</Link>
                <Link href="#gallery" className="text-lg">Our Works</Link>
                <Link href="#prices" className="text-lg">Prices</Link>
                <Link href="#contact" className="text-lg">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">StyleCuts Studio</h1>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium">Services</Link>
          <Link href="#gallery" className="text-sm font-medium">Our Works</Link>
          <Link href="#prices" className="text-sm font-medium">Prices</Link>
          <Link href="#contact" className="text-sm font-medium">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Contact Us</DialogTitle>
              <div className="space-y-4">
                <p className="text-lg">Call us at: +1 (555) 123-4567</p>
                <p>Available Monday-Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Send us a Message</DialogTitle>
              <div className="space-y-4">
                <p className="text-lg">Email: info@stylecuts.com</p>
                <p>We typically respond within 24 hours</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}