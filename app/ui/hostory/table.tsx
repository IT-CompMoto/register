
import { fetchRacer } from '@/app/lib/data';
import Image from 'next/image';
import { UpdateRacer, DeleteRacer } from './buttom';
// import InvoiceStatus from '@/app/ui/invoices/status';


export default async function HistoryTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const racers = await fetchRacer(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {racers?.map((racer) => (
              <div
                key={racer.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={racer.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${racer.fullname}'s profile picture`}
                      />
                      <p>{racer.fullname}</p>
                    </div>
                    <p className="text-sm text-gray-500">Racer Number: {racer.number}</p>
                  </div>
                  {racer.team}
                  {/* <InvoiceStatus status={invoice.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {/* {formatCurrency(invoice.amount)} */}
                      Phone Number: {racer.phone}
                    </p>
                    <p>
                    Email: {racer.email}
                      {/* {formatDateToLocal(invoice.date)} */}
                      </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateRacer id={racer.id} />
                    <DeleteRacer id={racer.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Racer Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {racers?.map((racer) => (
                <tr
                  key={racer.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={racer.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${racer.fullname}'s profile picture`}
                      />
                      <p>{racer.fullname}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* <InvoiceStatus status={invoice.status} /> */}
                    {racer.number}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {racer.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* {formatCurrency(invoice.amount)} */}
                    {racer.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* {formatDateToLocal(invoice.date)} */}
                    {racer.team}
                  </td>
                  
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateRacer id={racer.id} />
                      <DeleteRacer id={racer.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

