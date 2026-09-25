import { AdminPageHeading } from "@/components/admin/admin-page-heading";
import { AdminCustomersTable } from "@/components/admin/admin-customers-table";

export default function AdminCustomersPage() {
  return (
    <>
      <AdminPageHeading eyebrow="CUSTOMERS" title="مشتریان" description="فهرست مشتریان Mock و اطلاعات پایه" />
      <AdminCustomersTable />
    </>
  );
}
