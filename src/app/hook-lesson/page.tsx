"use client"

import { useState } from "react";
import { toast } from "react-hot-toast";

const Hookpage = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-yellow-200">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
        onClick={
            ()=>{
                setCount(count + 1);
                toast.success(`Button clicked ${count} times!`, {
                    icon: '👏',
                });
            }
        }
            
            >
            Click Me
        </button>
        
        <p className="text-lg font-semibold">Click count: {count}  </p>
    </div>
  )
}

export default Hookpage
