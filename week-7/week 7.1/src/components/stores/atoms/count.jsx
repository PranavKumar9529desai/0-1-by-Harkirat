import { atom  ,selector } from 'recoil' ;

export const countAtom = atom ({
    key : "countAtom" ,
    default : 0 , 
}) 

// create recoil selector 
export const isEven = selector({
    key : "isEven",
    get : ({get})=>{
       const count = get(countAtom);
       if (count===0) return 'zero' ;
       return count % 2 === 0 ;
    },
})