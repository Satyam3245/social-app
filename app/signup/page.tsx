"use client"

import CustomSVG from "../components/togethercomp"

export default function SignIn(){
    return <div className="bg-gray-200 ">
        <div className="m-0 p-0">
            <CustomSVG/>
        </div>
        <form className="">
            <div>Create Your Account</div>
            <div>Start Your Journey</div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" className="" placeholder="Full Name"/>
                <label htmlFor="Email">Email</label>
                <input type="text" className="" placeholder="Email"/>
            </div>
            <div>
                <label htmlFor="password">Password*</label>
                <input type="password" className="" placeholder="Enter Your Password"/>
                <label htmlFor="confirm-password">Confirm Password*</label>
                <input type="password" placeholder="Re-enter Your Password"/>
            </div>
            <div>
                
            </div>
        </form>
    </div>
}