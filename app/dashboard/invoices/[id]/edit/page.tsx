import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const data = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
      ]);
      const invoice = data[0] || {
        amount: 0,
        id: '0',
        customer_id: '0',
        status: "paid",
      }
      const customers = data[1]


  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}