import React from "react";
import useFetchData from "../hooks/useFetch";
import ProductItem from "./ProductItem";

function ProductList(){

    const url = "https://dummyjson.com/products";
    const {data, error, loading} = useFetchData(url);
    

    const beauty = data.filter((items)=>items.category === "beauty");
    const fragrances = data.filter((items)=>items.category === "fragrances");
    const furniture = data.filter((items)=>items.category === "furniture");
    const groceries = data.filter((items)=>items.category === "groceries");

    


    return(
        <>

          <section  className="Product-List pt-5 w-full bg-pink-200  max-sm:pb-0  box-border">
            <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20 ">Beauty</h2>
            <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto   ">
            
               {beauty.map((item)=>(
                    <ProductItem key={item.id} itemId={item.id} itemTitle={item.title} itemBrand={item.brand} itemPrice={item.price} itemImage={item.images} itemRating={item.rating} loadingStatus={loading} errorStatus={error}  />
                ))}
         
            </div>
            </section> 

            <section  className="Product-List pt-5 w-full bg-indigo-100  max-sm:pb-0  box-border">
            <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20 ">Groceries</h2>
            <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto   ">
            
               {groceries.map((item)=>(
                    <ProductItem key={item.id} itemId={item.id} itemTitle={item.title} itemBrand={item.brand} itemPrice={item.price} itemImage={item.images} itemRating={item.rating} loadingStatus={loading} errorStatus={error}  />
                ))}
         
            </div>
            </section> 

            <section  className="Product-List pt-5 w-full  bg-orange-200  max-sm:pb-0  box-border">
            <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20 ">Furniture</h2>
            <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto   ">
            
               {furniture.map((item)=>(
                    <ProductItem key={item.id} itemId={item.id} itemTitle={item.title} itemBrand={item.brand} itemPrice={item.price} itemImage={item.images} itemRating={item.rating} loadingStatus={loading} errorStatus={error}  />
                ))}
         
            </div>
            </section> 

            <section  className="Product-List pt-5 w-full bg-slate-100  max-sm:pb-0  box-border">
            <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20 ">Fragrances</h2>
            <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto   ">
            
               {fragrances.map((item)=>(
                    <ProductItem key={item.id} itemId={item.id} itemTitle={item.title} itemBrand={item.brand} itemPrice={item.price} itemImage={item.images} itemRating={item.rating} loadingStatus={loading} errorStatus={error}  />
                ))}
         
            </div>
            </section> 


        </>

        

    );
};

export default ProductList;