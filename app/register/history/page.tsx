import React from 'react'
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import { fetchRacerPages } from '@/app/lib/data';
import Search from '@/app/ui/search';
import { AddRacer } from '@/app/ui/hostory/buttom';
import Table from '@/app/ui/hostory/table';
import Pagination from '@/app/ui/hostory/pagination';


export default async function HistoryPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchRacerPages(query);


  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>History Page</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <AddRacer />
      </div>
      <Suspense key={query + currentPage} fallback={<RevenueChartSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}


