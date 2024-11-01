"use client"
import { signIn } from "next-auth/react"
export async function AppBar(){
    
    return <div>
        <button>Sign In</button>
    </div>
}