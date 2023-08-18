import purses from "@/components/assets/images/collectionList/purses.jpg";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/components/hira/data";

export default async function Home() {
  // const data: IProduct[] = await getData();
  // console.log(data);
  // const data = [
  //   {
  //     id: 1,
  //     name: "purses",
  //     bgPic: purses,
  //     //https://unsplash.com/photos/4frKet-PJss
  //     heading: "Carrie",
  //     paragraph:
  //       "Explore the new arrivals or bestselling purses from Fablou. New arrivals every week. Explore the new season purses or shop bestsellers.",
  //   },
  // ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 justify-center items-center gap-y-8 mt-24">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-2 mx-auto">
          <Link href={`/collections/${item.name}`}>
            <Image
              src={item.bgPic}
              alt="item.alt"
              width={250}
              height={300}
              className="max-h-[250px] object-cover object-top"
            />
            <div className="pdh">{item.name}</div>
            <div className="pdp">{item.heading}</div>
            {/* <div className="pdh2">${item.paragraph}</div> */}
          </Link>
        </div>
      ))}
    </div>
  );
}
