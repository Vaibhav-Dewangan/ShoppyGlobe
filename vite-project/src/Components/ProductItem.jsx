import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductItem(props){

    const [ItemImage, setItemImage] = useState(props.itemImage);

    if(ItemImage.length > 1){
        setItemImage([props.itemImage[1]]);

    };
    
    return(
       <>

       <Link to={`/products/productDetails/${props.itemId}`}> <div className="Item-Card h-64 w-48 lg:h-72 lg:w-52 shadow-md  flex justify-center  flex-col bg-white items-center flex-shrink-0 p-5 hover:scale-105 rounded-lg" >
         
       <img className="Item-Card-img mb-5 bg-cover h-32 w-32  lg:h-36 lg:w-36 rounded-md bg-white " src={props.loadingStatus === false?  ItemImage : '/loading.gif'} alt="book" />
       
       <div className="flex text-center flex-col ">
       <p>{props.loadingStatus === false? props.itemTitle : ''} <b>{props.loadingStatus === false? props.itemBrand : ""} </b></p>
       <p><b>$ {props.loadingStatus === false? props.itemPrice : ""}</b></p>
       </div>
      
       </div></Link>
       
       </>
    );
};

export default ProductItem;

