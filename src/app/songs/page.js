import { columns } from "./columns";
import { DataTable } from "./data-table";
import SearchBox from "@/components/SearchBox";

async function getData() {
  // Fetch data from your API here.
  const res = await fetch("http://localhost:3000/api/hymns");
  const data = await res.json();
  return data;
}

export default async function page() {
  const data = await getData();

  return (
    <div className="container sm:max-w-[700px] sm:m-auto py-10 flex flex-col gap-4">
      <div>
        <SearchBox />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
