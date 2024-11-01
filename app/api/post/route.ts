import { postSchema } from "@/lib/zodvalidator";
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(req:NextRequest){
    const body = await req.json();
    const session  = await getServerSession();
    if(session){
        //@ts-ignore
        console.log(session.user?.id)
    }  

    if(!body.about||!body.image){
        return NextResponse.json({
            error: 'Missing required fields'
        }, { 
            status: 400 
        });
    };

    const postParser = postSchema.safeParse(body);

    if (!postParser.success) {
        return NextResponse.json({
            message: 'Check Your Credentials',
            error: postParser.error.errors 
        }, {
            status: 400
        });
    }

    const post = await prisma.posts.create({
        data:{
            image:postParser.data.image ,
            about:postParser.data.about ,
            authorId:""
        }
    })
}