import { Suspense } from "react";

import Table from "../../ui/customers/table";
import {InvoicesMobileSkeleton} from '../../ui/skeletons'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div>
      <Suspense fallback={<InvoicesMobileSkeleton />}>
        <Table query={query} />
      </Suspense>
    </div>
  );
}
