import React from 'react'
import {Link} from 'react-router-dom'

function LoginPage() {
  return (
    <>
    
    
    <div className=" flex flex-col h-screen w-full md:flex-row">
    <div className ="w-full h-1/2 md:w-[68vw] md:h-full bg-slate-50   text-black flex flex-col items-center justify-center">
        <div >
       {["WANT TO GO SOMEWHERE?","ALONE?","SIGN IN HERE TO FIND A COMPANY" ,"NOT A USER CLICK HERE!"].map((data,index) =>{
            
                return (
                        <>
                                <h1 className=" text-black lg:text-3xl " key ={index} > {index === 3 ? <Link to ="/Signup" className="underline">{data}</Link> : data }</h1>
                        
                        </>

                )


       })}
       </div>

    </div>
   
        
    <div className ="w-full h-1/2 bg-zinc-900 flex flex-col text-white md:h-full p-20 gap-5  justify-center items-center md:w-[32vw]">
    <h1 className='text-white text-center xl:text-2xl lg:text-lg sm:text-xs'>LOGIN</h1>
        <form action="/lol" method ="post" className='flex flex-col items-center gap-5 justify-center w-full'>
        
        
        {[{
                label : "Enter Username",
                placeholder : "Username......",
                ref:"username",
              
                reference1 : "username",
                


        },{
            reference1 : "password",
            label : "Enter the password",
            placeholder: "Enter the password......",
            ref : "password"
        }].map((data,index) =>{

            return (
                    <div key = {index} className='flex flex-col gap-5 w-full'>
                        <label htmlFor={data.ref} className ="xl:text-2xl lg:text-lg sm:text-xs">{data.label}</label>
                        <input type="text" name = {data.ref} placeholder={data.placeholder} className='text-xs p-2 rounded-lg w-full text-black md:p-3 md:text-lg '  />

                        </div>
                    
              




            )


        })}
        <button type='submit' className ="bg-slate-600 w-fit p-3 rounded-2xl  text-center lg:text-xs xl:text-xl">
                    Sign In
        </button>
        </form>
         </div>
         

    </div>
    
   </>
  )
}

export default LoginPage