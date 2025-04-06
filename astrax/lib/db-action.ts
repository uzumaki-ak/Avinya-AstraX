import { LostStatus, FoundStatus } from "@prisma/client"
import { db } from "./Prisma"

export async function createUser(email: string, firstName: string, lastName: string, imageUrl?: string, mobileNumber?: string) {
  try {
    const user = await db.user.create({
      data: {
        emailAddress: email,   // Mapping to the correct field in the schema
        firstName: firstName,
        lastName: lastName,
        imageUrl: imageUrl,    // Optional field
        mobileNumber: mobileNumber,  // Optional field
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating user", error);
    return null;
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        emailAddress: email, // The correct field in the schema is 'emailAddress'
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email", error);
    return null;
  }
}


export async function createLostItem(
  data: {
    title: string
    description: string
    category: string
    locationLost: string
    userId: string
  }
) {
  return await db.lostItem.create({
    data: {
      ...data,
      status: "PENDING" as LostStatus,
      reportedAt: new Date(),
    },
  })
}

export async function createFoundItem(
  data: {
    title: string
    description: string
    imageUrl: string
    category: string
    locationFound: string
    userId: string
  }
) {
  return await db.foundItem.create({
    data: {
      ...data,
      status: "UNCLAIMED" as FoundStatus,
      reportedAt: new Date(),
    },
  })
}