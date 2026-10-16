import { AdminPageHeading } from "@/components/admin/admin-page-heading";
import { AdminCustomersTable } from "@/components/admin/admin-customers-table";
import { requireAdminUser } from "@/lib/auth/authorization";

export default async function AdminCustomersPage() {
  await requireAdminUser();

  return (
    <>
      <AdminPageHeading eyebrow="CUSTOMERS" title="مشتریان" description="فهرست مشتریان و اطلاعات پایه" />
      <AdminCustomersTable />
    </>
  );
}
