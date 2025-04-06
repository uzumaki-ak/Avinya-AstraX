import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function handleErrors(
  request: NextRequest,
  next: () => Promise<NextResponse>
) {
  try {
    return await next()
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}