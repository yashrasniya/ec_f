import {Search_bar} from "@/components/search";
import {Nav_bar} from "@/components/navbar";
import React from "react";

const Product = () => {
  return(
      <div className={'flex items-center gap-3 text-primary-1'}>
          <img src={'/product.png'}  className={'w-60'} alt={' '}/>
          <div className={''}>
          <p className={'text-[12px]'}>
              Cosmic Byte Hades 2.4Ghz Wireless, Bluetooth Headphone, Dual Mode....
          </p>
              <div className={'flex text-[25px] gap-2 justify-evenly mt-6 items-center'}>
                  <h3 className={''}>₹4,499/-</h3>
                  <div className={'bg-primary-1 text-[18px] text-white px-2  py-1 rounded'}>
                      Add Cart
                  </div>
              </div>

          </div>
      </div>
  )
}

export default function Search_result() {
    let products=[
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    return (
        <>
            <div className={'root pt-4 pb-2 px-2'}>
                <Search_bar></Search_bar>
                {products.map(Product)}

            </div>
                <Nav_bar></Nav_bar>

        </>

    )
}