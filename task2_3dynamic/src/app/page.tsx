import Filter from "@/components/Filter";
import Main from "@/components/Main";
import Hero from "@/components/hero";
import CollectionGrid from "@/components/hira";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <CollectionGrid /> */}
      {/* <Filter /> */}
      {/* <Link href="/zia">
        <Main props={value1} />
      </Link>
      <br />
      <Link href="/zeeshan">Go to Zeeshan page</Link>
      <br />
      <Link href="/hira">Go to Hira page</Link> */}
      <Main />
    </div>
  );
}
