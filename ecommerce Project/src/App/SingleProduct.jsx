import {  Image } from "antd";
import AddToCart from "../components/addToCart";

const SingleProduct=()=>{
    // const addToCart=()=>{
    //     <AddToCart/>
    // }
return <>
<div className="bg-blue-300 h-full p-auto">
   
<products className="flex align-center items-center pt-[10vh] ">


    <leftcontainer className="ml-[10vw] mr-[10vw]">
    <Image width={300}  height={300} src="../src/images/camera.jpg" className="bg-red-500 h-[20vh] w-[20vw]"/>


    </leftcontainer>
    <rightcontainer  className="flex flex-col">
    <productname className="text-2xl font-semibold mb-[5vh] mt-0 h-[10vh]">
            Sony Camera
        </productname>
        <description className="text-wrap">Sony Camera with professional looks</description>  

        <price className="text-green-700 font-bold">
    Price
   </price>
   <div className="ml-[25vw]">
   <AddToCart />

    </div> 
    </rightcontainer>

    </products>
    </div>
</>
}
export default SingleProduct;