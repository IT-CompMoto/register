import Form from '@/app/ui/invoices/edit-form';
import { fetchRacerNameById, fetchRacerName } from '@/app/lib/data';
 
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  return (
    <main>
      
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}