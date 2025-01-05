import { columns } from "./columns";
import { DataTable } from "./data-table";
import SearchBox from "@/components/SearchBox";

async function getData() {
  // Fetch data from your API here.
  const res = await fetch(
    "https://677a2824671ca03068333314.mockapi.io/api/v1/hymns"
  );
  const data = await res.json();
  return data;
}

export default async function page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 flex flex-col gap-4">
      <div>
        <SearchBox />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
