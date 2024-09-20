import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {React, lazy, Suspense} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Body from './Components/Body.jsx'
import App from './App.jsx'
import NotFound from './Components/NotFound.jsx'
import './index.css'

const Cart = lazy(()=> import ('./Components/Cart.jsx'));
const Search = lazy(()=> import('./Components/Search.jsx'));
const ProductDetails = lazy(()=> import('./Components/ProductDetail.jsx'))

const appRouter = createBrowserRouter([

  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",
        element:<Body />,
      },
      {
        path:"/Cart",
        element:(
        <Suspense fallback={ 
        <div className="min-h-screen">
          <img className="lg:w-10 mx-auto my-auto "src="/loading.gif" alt="loading" />
        </div> }>
          <Cart />
        </Suspense>),
      },
      {
        path:"/Search",
        element:(
          <Suspense fallback={ 
            <div className="min-h-screen">
              <img className="lg:w-10 mx-auto my-auto "src="/loading.gif" alt="loading" />
            </div> }>
            <Search />
            </Suspense>),
      },
      {
        path:"/products/productDetails/:id",
        element:(
          <Suspense fallback={ 
            <div className="min-h-screen">
              <img className="lg:w-10 mx-auto my-auto "src="/loading.gif" alt="loading" />
            </div> }>
             <ProductDetails />
             </Suspense>),
      },
      
    ],
    errorElement:<NotFound />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
