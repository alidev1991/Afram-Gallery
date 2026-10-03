"use server";

import { signOut } from "@/auth";

export async function logoutCustomer() {
  await signOut({ redirectTo: "/" });
}
