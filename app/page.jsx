import React, { Suspense } from "react";
import { categories } from "@/app/lib/dummy/data";
import Link from "next/link";
import { Card } from "@mantine/core";
import ProductList from "@/app/components/ProductList"
import { LocationOnOutlined, QuestionMark } from "@mui/icons-material";
const fastLinks = [{
  url: "/faq",
  text: "FAQ",
  icon: <QuestionMark sx={{fontSize: 80}}/>
},{
  url: "/orders",
  text: "Track my order",
  icon: <LocationOnOutlined sx={{fontSize: 80}}/>
},{
  url: "/faq/how-to-sell",
  text: "How to sell",
  icon: <LocationOnOutlined sx={{fontSize: 80}}/>
},{
  url: "/faq/how-to-buy",
  text: "How to buy",
  icon: <LocationOnOutlined sx={{fontSize: 80}}/>
}]
export default function Home() {
  console.log(categories)
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">Categories</h2>
      <div className="flex gap-5 w-full overflow-auto">
        {categories.map((category, index) => {
          return <Link className="bg-teal-300 p-5 rounded-lg" href={`/category/${category}`} key={index}>{category}</Link>;
        })}
      </div>
      <Suspense>
        <ProductList/>
      </Suspense>

      <div className="flex gap-5">
        {fastLinks.map((link,index) => {
            return <Card component={Link} href={link.url} key={index} withBorder>
              <div className="flex flex-col justify-center items-center">
                {link.icon}
                <p className="text-center">{link.text}</p>
              </div>
              
          </Card>
        })}
        
      </div>
    </div>
  );
}
