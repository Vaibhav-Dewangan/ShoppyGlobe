import React from "react";
import ProductList from "./ProductList";
import WelcomePage from "./welcomePage";

function Body() {
    
    return(
        <div className="Body-container min-h-screen  ">
           
            <section className="Welcome-page flex flex-row overflow-x-scroll ">
               <WelcomePage />
            </section>

            <section className="productList mt-5">
               <ProductList />
            </section>

            

        </div> 
    );
};

export default Body;