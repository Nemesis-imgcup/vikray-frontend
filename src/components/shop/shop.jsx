import React from 'react'
import { Navbar } from '../common';
import { Footercomn } from '../common';
import './card.css'
import { Card1, Card2, Card3, Brand1, Brand2, Brand3, Brand4, Top1, Top2, Top3, Top4, Jack, Bag, Shoe } from './shopassets';


const shop = () => {
    return (
      <div className="shop">
        <Navbar />
        <div class="flex">
          <div className="flex justify-left text-white font-medium pl-40 text-2xl pt-[15vh]">
            DEALS OF THE DAY
          </div>
          <div class="flex border h-0 w-[10vw] border-white mt-[17vh] ml-[1em]"></div>
        </div>
        <div class="flex pt-8 space-x-20 pl-40">
          <img src={Card1} />
          <img src={Card2} />
          <img src={Card3} />
        </div>
        <div class="flex">
          <div className="flex justify-left text-white font-medium pl-40 text-2xl pt-[15vh]">
            CATEGORIES TO BAG
          </div>
          <div class="flex border h-0 w-[10vw] border-white mt-[17vh] ml-[1em]"></div>
        </div>
        <div class="flex pt-8 space-x-20 pl-40">
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Jeans
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Shoes
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Shirts
          </button>
          <button className="flex items-center bg-[#F8F872] text-black font-medium rounded-2xl px-20 py-6">
            Top
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Hoodies
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Traushoer
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Jacket
          </button>
        </div>
        <div class="flex pt-20 space-x-20 pl-40">
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Tees
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Watches
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Glasses
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Acces
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Bags
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Shocks
          </button>
          <button className="flex items-center bg-[#434343] text-white font-medium rounded-2xl px-20 py-6">
            Panties
          </button>
        </div>

        <div class="flex">
          <div className="flex justify-left text-white font-medium pl-40 text-2xl pt-[12vh]">
            DEALS ON TOP BRANDS
          </div>
          <div class="flex border h-0 w-[10vw] border-white mt-[14vh] ml-[1em]"></div>
        </div>
        <div class="flex pt-8 space-x-20 pl-40">
          <img src={Brand1} />
          <img src={Brand2} />
          <img src={Brand3} />
          <img src={Brand4} />
        </div>
        <div class="flex pt-[10vh]">
          <div class="container11">
            <div class="card">
              <div class="imgBx">
                <img src={ Shoe } />
              </div>
              <div class="contentBx">
                <h2>Nike Shoes</h2>
                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="pt-6">
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={Jack} />
              </div>
              <div class="contentBx">
                <h2>CP-Jacket</h2>
                <div class="size">
                  <h3>Size :</h3>
                  <span>M</span>
                  <span>S</span>
                  <span>L</span>
                  <span>XL</span>
                </div>
                <div class="pt-6">
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={Bag} />
              </div>
              <div class="contentBx">
                <h2>Cam Bag</h2>
                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div class="pt-6">
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div className="flex justify-left text-white font-medium pl-40 text-2xl pt-[12vh]">
            TOP PICKS FOR YOU
          </div>
          <div class="flex border h-0 w-[10vw] border-white mt-[14vh] ml-[1em]"></div>
        </div>
        <div class="flex">
          <div class=" pt-8 space-x-20 pl-40 pb-40">
            <img src={Top1} />
            <button className=" items-center bg-[#F8F872] text-black font-bold rounded-3xl px-20 py-6">
              BUY NOW
            </button>
          </div>
          <div class=" pt-8 space-x-20 pl-40 pb-40">
            <img src={Top2} />
            <button className=" items-center bg-[#F8F872] text-black font-bold rounded-3xl px-20 py-6">
              BUY NOW
            </button>
          </div>
          <div class=" pt-8 space-x-20 pl-40 pb-40">
            <img src={Top3} />
            <button className=" items-center bg-[#F8F872] font-bold text-black  rounded-3xl px-20 py-6">
              BUY NOW
            </button>
          </div>
          <div class=" pt-8 space-x-20 pl-40 pb-40">
            <img src={Top4} />
            <button className=" items-center bg-[#F8F872] text-black font-bold rounded-3xl px-20 py-6">
              BUY NOW
            </button>
          </div>
        </div>

        <Footercomn />
      </div>
    );
}

export default shop