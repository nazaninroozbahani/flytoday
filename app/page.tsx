import Flights from "@/components/home/flights";

async function fetchData() {
  const res = await fetch("http://localhost:4000/search", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await fetchData();

  return <Flights data={data} />;
}
