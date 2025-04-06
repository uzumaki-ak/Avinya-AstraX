// lib/schemas.ts
import { z } from 'zod'

export const reportSchema = z.object({
  title: z.string().min(3, "Item name must be at least 3 characters"),
  category: z.enum(['electronics', 'clothing', 'accessories', 'books', 'other']),
  location: z.string().min(3, "Location must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z.instanceof(File).optional(),
  type: z.enum(['lost', 'found'])
})