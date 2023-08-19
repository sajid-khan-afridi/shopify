import bag1 from "@/components/assets/images/Collectiongrid/bag1.jpg";
import bag2 from "@/components/assets/images/Collectiongrid/bag2.jpg";
import bag3 from "@/components/assets/images/Collectiongrid/bag3.jpg";
import bag4 from "@/components/assets/images/Collectiongrid/bag4.jpg";
import bag5 from "@/components/assets/images/Collectiongrid/bag5.jpg";
import bag6 from "@/components/assets/images/Collectiongrid/bag6.jpg";
import bag7 from "@/components/assets/images/Collectiongrid/bag7.jpg";
import bag8 from "@/components/assets/images/Collectiongrid/bag8.jpg";
import bag9 from "@/components/assets/images/Collectiongrid/bag9.jpg";
import bag10 from "@/components/assets/images/Collectiongrid/bag10.jpg";
import { IconType } from "react-icons";
import { GrStar } from "react-icons/gr";



import purses from "@/components/assets/images/collectionList/purses.jpg";
import clearance from "@/components/assets/images/collectionList/clearance.jpg"
import llchelsea from "@/components/assets/images/collectionList/llchelsea.jpg"

export const iconComponent: { [key: string]: IconType } = {
  GrStar,
};


export const data = [
    {
      id: 1,
      name: "purses",
      bgPic: purses,
      //https://unsplash.com/photos/4frKet-PJss
      heading: "Carrie",
      paragraph:"Explore the new arrivals or bestselling purses from Fablou. New arrivals every week. Explore the new season purses or shop bestsellers.",
      subData:[
        {
          img: bag5,
          title: "Carrie-Frapp1",
          hoverimage: bag7,
          link: "/",
          // new: "$45.00",
          // old: "$55.00",
          // title: "City - All Black",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#EF9A9A",
          review: 2,
          sale: "sale",
          
        },
        {
          img: bag6,
          title: "Carrie-Blush",
          hoverimage: bag10,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
        },
        {
          img: bag7,
          title: "Carrie-Berrie",
          hoverimage: bag5,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
          sale: "sale",
        },
        {
          img: bag8,
          title: "Carrie-Steel",
          hoverimage: bag4,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#EF9A9A",
          review: 3,
          sale: "sold out",
        },
        {
          img: bag2,
          title: "Carrie-All Black",
          hoverimage: bag3,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
        },
        {
          img: bag8,
          title: "Carrie-Navy",
          hoverimage: bag4,
          link: "/",
          // new: "$45.00",
          // old: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
          sale: "sold out",
        },
        {
          img: bag1,
          title: "Carrie-Sol",
          hoverimage: bag2,
          link: "/",
          // new: "$45.00",
          // old: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
        },
      ],
    },
    {
      id: 2,
      name: "Clearance",
      bgPic: clearance,
      //https://unsplash.com/photos/4frKet-PJss
      heading: "Clearance",
      paragraph:"",
      subData:[
        {
          img: bag5,
          title: "Carrie-Frapp2",
          hoverimage: bag7,
          link: "/",
          // new: "$45.00",
          // old: "$55.00",
          // title: "City - All Black",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#EF9A9A",
          review: 2,
          sale: "sale",
          
        },
        {
          img: bag6,
          title: "Carrie-Blush",
          hoverimage: bag10,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
        },
        {
          img: bag7,
          title: "Carrie-Berrie",
          hoverimage: bag5,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
          sale: "sale",
        },
        {
          img: bag8,
          title: "Carrie-Steel",
          hoverimage: bag4,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#EF9A9A",
          review: 3,
          sale: "sold out",
        },
        {
          img: bag2,
          title: "Carrie-All Black",
          hoverimage: bag3,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
        },
        {
          img: bag8,
          title: "Carrie-Navy",
          hoverimage: bag4,
          link: "/",
          // new: "$45.00",
          // old: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
          sale: "sold out",
        },
        {
          img: bag1,
          title: "Carrie-Sol",
          hoverimage: bag2,
          link: "/",
          // new: "$45.00",
          // old: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
        },
      ],
    },

    // 3
    {
      id: 3,
      name: "ll-chelsea",
      bgPic: llchelsea,
      //https://unsplash.com/photos/4frKet-PJss
      heading: "LL Chelsea",
      paragraph:"",
      subData:[
        {
          img: bag5,
          title: "Carrie-Frapp3",
          hoverimage: bag7,
          link: "/",
          // new: "$45.00",
          // old: "$55.00",
          // title: "City - All Black",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#EF9A9A",
          review: 2,
          sale: "sale",
          
        },
        {
          img: bag6,
          title: "Carrie-Blush",
          hoverimage: bag10,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
        },
        {
          img: bag7,
          title: "Carrie-Berrie",
          hoverimage: bag5,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
          sale: "sale",
        },
        {
          img: bag8,
          title: "Carrie-Steel",
          hoverimage: bag4,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#EF9A9A",
          review: 3,
          sale: "sold out",
        },
        {
          img: bag2,
          title: "Carrie-All Black",
          hoverimage: bag3,
          link: "/",
          // new: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
        },
        {
          img: bag8,
          title: "Carrie-Navy",
          hoverimage: bag4,
          link: "/",
          // new: "$45.00",
          // old: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
          sale: "sold out",
        },
        {
          img: bag1,
          title: "Carrie-Sol",
          hoverimage: bag2,
          link: "/",
          // new: "$45.00",
          // old: "$55.00",
          price: 89,
          disPrice: 99,
          icon: ["GrStar", "GrStar", "GrStar", "GrStar", "GrStar"],
          color: "#334155",
          review: 0,
        },
      ],
    },
  ];