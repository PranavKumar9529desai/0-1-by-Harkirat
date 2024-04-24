import { useCallback, useMemo, useState } from 'react'
import './Paragraph.css' ;
import { ParagraphGenerator } from './Paragraph';

export function Frontend (){
     const [numbers , setNumbers] = useState() ;
     const [GeratePara , setGenratePara] = useState(false) ;

     const handleChange = useCallback((e) =>{
        const value = e.target.value ;
        setNumbers(value);
        console.log(numbers) ;
     } , []);
    //   Empty array means the function will not change the acorss the re renders 
    

     

    return(
    <div className="Background">
        <div className="Title">Para Genrator</div>
        <div className="Downdiv grid grid-cols-1 md:grid-cols-5">
        <div className='grids-a col-span-4'><input placeholder="Enter the Number of Words" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " onChange={handleChange} ></input ></div>
        <div className='grids-a col-span-1'><button id="GenrateButton" style={{margin :"auto" }} onClick={()=>{setGenratePara(true);}}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Genrate</button></div>
       </div>
         { GeratePara ? <div className='TheParaDiv' style={{marginTop : 40 , fontSize : 20}}>
          <ParagraphGenerator numWords={numbers} />
         </div> : null }
    </div>)

}