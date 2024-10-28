"use client"

import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@stylecuts.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Style Street, Beauty City, ST 12345</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <div>
                <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                <p>Sat: 10:00 AM - 6:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          © 2024 StyleCuts Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}