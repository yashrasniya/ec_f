'use client'

import {Carousel} from "@material-tailwind/react";
import React from "react";
import {useRouter} from "next/navigation";
import Image from 'next/image'


const Img = (e: { link: string; url: string })  => {
    const router = useRouter()

    return(

      <Image
          src={e?.url}
          alt="image 1"
          className=" w-full h-full object-covers"
            onClick={()=>router.push(e?.link)}
      />
  )
}
export const Carousel2 = () => {
    let img=[
        {url:'/banner.png',link:'/banner.png'},
        {url:'/banner.png',link:'/banner.png'},
        {url:'/banner.png',link:'/banner.png'},
        {url:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',link:'/banner.png'},
        {url:'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',link:'/banner.png'},
    ]
    return(<Carousel className="rounded-xl w-full h-[200px] overflow-hidden mt-4" placeholder={''}
                     nextArrow={()=>{return}}
                     prevArrow={()=>{return}}
                     loop={true}
                     autoplay={true} >
            {img.map(Img)}


        </Carousel>
    )
}
