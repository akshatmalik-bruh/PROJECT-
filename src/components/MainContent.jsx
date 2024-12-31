import React from 'react'

function MainContent() {
  return (
            <>
            <div className="h-screen w-full bg-white  flex items-center justify-center ">

          
            <form action="/bozo" method="post" className="w-1/2 flex  flex-col  justify-center gap-5 " >
    {[{
        label: "Enter your Location",
        placeholder: "Start...",
        ref: "start"
    }, {
        label: "Where do you want to go",
        placeholder: "End...",
        ref: "end"
    }].map((data, index) => {
        return (
            <div key={index} className ="flex flex-col md:gap-10 gap-5 ">
                <label htmlFor={data.ref} className ="text-lg md:text-2xl text-center">{data.label}</label>
                <input type="text" placeholder={data.placeholder} id={data.ref} name={data.ref} className ="p-5 bg-slate-200 w-full rounded-xl "/>
            </div>
        );
    })}
    <button type="submit" className ="text-lg md:text-xl bg-black text-white p-3 rounded-xl w-fit ">Submit</button>
</form>

                        </div>
                        
            
            </>
  )
}

export default MainContent