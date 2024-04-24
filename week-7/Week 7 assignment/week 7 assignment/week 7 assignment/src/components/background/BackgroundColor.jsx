import { useState } from "react";


export function  BackgroundChanger(){
    const [color , setColor] = useState('') ;

    function handleClick(newColor){
       setColor(newColor) ;
       console.log(newColor);

    }

    return <div className="ScreenBackgorund" style={{
        backgroundColor : color , height : 700 , display: 'flex', alignItems: 'flex-end'}}>
          <div className="DownBox " style={{display : "flex", width : "100%" , justifyContent : "space-around" , backgroundColor : "white" , padding : 20 , margin : 30 }}>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{handleClick('red')}} >red</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{handleClick('blue')}}>blue</button>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{handleClick('orange')}}>orange</button>
        <button  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"  onClick={()=>{handleClick('yellow')}}>yellow</button>
        <button className="bg-red-300 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{handleClick('pink')}}>pink</button>
        <button className="bg-green-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{handleClick('green')}}>green</button>
        </div>
        </div>

}