"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BrandColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface BillboardClientProps {
  data: BrandColumn[];
}

export const BrandsClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading
          title={`Brands (${data.length})`}
          description="Manage brands"
        />
        <Button onClick={() => router.push(`/${params.storeId}/brands/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API brands" />
      <Separator />
      <ApiList entityName="brands" entityIdName="brandId" />
    </>
  );
};
