import { Suspense } from "react";
import CardWrapper from "@/app/ui/dashboard/cards";
import { fetchRevenue, fetchLatestInvoices } from "../../lib/data";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LastestInvoices from "../../ui/dashboard/latest-invoices";
import { lusitana } from "../../ui/fonts";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "../../ui/skeletons";

export default async function DashBoard() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LastestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
