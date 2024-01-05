'use client'
import React from "react";
import {Search_bar} from "@/components/search";
import {Carousel2} from "@/app/home/Carousel";



const Product_preview = (e: { img: string; price: string; title: string; live: boolean }) => {
  return(
      <div className={'bg-[#fff] w-full text-[10px]  p-3 rounded-md'}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={e?.img}  className={'w-full'} alt={''} />
          <p>{e?.title}</p>
          <p className={'flex gap-2'}>₹{e?.price}/-
              {e?.live?<svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                  <path
                      d="M10.2458 4.5358L5.9558 0.295798C5.86283 0.20207 5.75223 0.127676 5.63037 0.0769072C5.50852 0.0261385 5.37781 0 5.2458 0C5.11379 0 4.98308 0.0261385 4.86122 0.0769072C4.73936 0.127676 4.62876 0.20207 4.5358 0.295798L0.295798 4.5358C0.20207 4.62876 0.127675 4.73936 0.0769067 4.86122C0.026138 4.98308 0 5.11379 0 5.2458C0 5.37781 0.026138 5.50852 0.0769067 5.63037C0.127675 5.75223 0.20207 5.86283 0.295798 5.9558C0.483161 6.14205 0.736612 6.24659 1.0008 6.24659C1.26498 6.24659 1.51844 6.14205 1.7058 5.9558L5.2458 2.4158L8.7858 5.9558C8.97206 6.14054 9.22346 6.24469 9.4858 6.2458C9.6174 6.24656 9.74787 6.22133 9.86971 6.17157C9.99154 6.12181 10.1024 6.04848 10.1958 5.9558C10.2929 5.86618 10.3712 5.75821 10.4263 5.63814C10.4814 5.51806 10.5122 5.38826 10.5169 5.25622C10.5215 5.12419 10.4999 4.99254 10.4534 4.86889C10.4069 4.74523 10.3363 4.63202 10.2458 4.5358Z"
                      fill="#01FF02"/>
              </svg>:''}
          </p>
      </div>
  )
}
const Live_Bargaining = () => {
    let live=[
        {title:'yash',img:'/01.png',price:'25,000',live:true},
        {title:'yash',img:'/01.png',price:'25,000',live:true},
        {title:'yash',img:'/01.png',price:'25,000',live:true},

    ]
  return(
      <div className={'w-full text-primary-1'}>
          <h3 className={' font-medium mt-2 '}>
              Live Bargaining
          </h3>
          <div className={'grid grid-cols-2  gap-2 pt-2'}>
              {
                  live.map(Product_preview)
              }

          </div>

      </div>
  )
}
const Recommender_product = () => {
    let live=[
        {title:'yash',img:'/01.png',price:'25,000',live:false},
        {title:'yash',img:'/01.png',price:'25,000',live:false},
        {title  :'yash',img:'/01.png',price:'25,000',live:false},
        {title  :'yash',img:'/01.png',price:'25,000',live:false},
        {title  :'yash',img:'/01.png',price:'25,000',live:false},
        {title  :'yash',img:'/01.png',price:'25,000',live:false},
        {title  :'yash',img:'/01.png',price:'25,000',live:false},
    ]
    return(
        <div className={'w-full text-primary-1'}>
            <h3 className={' font-medium mt-2 '}>
                Recommender Product
            </h3>
            <div className={'grid grid-cols-2  gap-2 pt-2'}>
                {
                    live.map(Product_preview)
                }

            </div>

        </div>
    )
}

export default function Home() {

    return (
        <>
        <div className={'root p-4 '}>
      <Search_bar></Search_bar>
            <Carousel2></Carousel2>
<Live_Bargaining></Live_Bargaining>
<Recommender_product></Recommender_product>

        </div>
            {/*<Nav_bar></Nav_bar>*/}

        </>

    )
        }
