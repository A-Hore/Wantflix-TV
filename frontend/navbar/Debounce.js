import {useState, useEffect} from 'react';

const Debounce =(val,delay) =>{
    const [debounceVal,setDebounceVal] =useState(val);

    useEffect(() =>{
        const handler =setTimeout(()=> {
            setDebounceVal(val);
        },delay);
        
    

  return () =>{
    clearTimeout(handler);
  };
}, );
return debounceVal;

};

export default Debounce