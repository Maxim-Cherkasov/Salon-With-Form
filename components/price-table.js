"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const services = [
  { name: "Women's Haircut", price: "$60" },
  { name: "Men's Haircut", price: "$40" },
  { name: "Color & Highlights", price: "$120" },
  { name: "Blowout & Styling", price: "$45" },
  { name: "Hair Treatment", price: "$80" },
  { name: "Bridal Styling", price: "$150" },
]

export function PriceTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.name}>
            <TableCell className="font-medium">{service.name}</TableCell>
            <TableCell className="text-right">{service.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}