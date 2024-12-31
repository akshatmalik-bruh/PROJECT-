import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <>
        <div className = "w-full flex justify-between p-5 bg-zinc-900 fixed top-0 h-32  items-center">
            <Link to="/Home"><img src="https://media.istockphoto.com/id/1423278291/vector/69-number-sixty-nine-icon-sticker-on-gray-background.jpg?s=612x612&w=0&k=20&c=nXseodamJjLgLkCom7leAEKDZWt5eSpdKC06nf4mnv8=" className="w-20 h-20 rounded-xl"alt="" /></Link>
            
                <Link to = "/Logout" className="text-white mr-10 text-2xl bg-gray-700 p-3  rounded-xl">Logout</Link>
                </div>


           

        </>
    )
}

export default Navbar