import { redirect } from "next/navigation";

import { CheckoutContent } from "@/components/checkout/checkout-content";
import { getAuthenticatedUser } from "@/lib/auth/authorization";

export default async function CheckoutPage() {
  const customer = await getAuthenticatedUser();

  if (!customer) {
    redirect("/login?next=/checkout");
  }

  return (
    <CheckoutContent
      customer={{
        firstName: customer.firstName,
        lastName: customer.lastName,
        mobile: customer.mobile,
        email: customer.email,
      }}
    />
  );
}
