import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "@/lib/zodvalidator";
export async function POST(req:NextRequest){
    const body = await req.json()
    const parseBody = userSchema.safeParse(body);
    if(!parseBody.success){
        return NextResponse.json({
            message : 'Check Your Credentials'
        },{
            status: 400
        })
    }

}