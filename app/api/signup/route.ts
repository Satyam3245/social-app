import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "@/lib/zodvalidator";
import prisma from "@/prisma";
import { hashPassword } from "@/lib/bcrypt";

export async function POST(req: NextRequest) {
    const body = await req.json();
    
    if (!body.name || !body.username || !body.password || !body.email || !body.bio || !body.dateOfBirth || !body.image) {
        return NextResponse.json({
            error: 'Missing required fields'
        }, { 
            status: 400 
        });
    }
    
    const parseBody = userSchema.safeParse(body);

    if (!parseBody.success) {
        return NextResponse.json({
            message: 'Check Your Credentials',
            error: parseBody.error.errors 
        }, {
            status: 400
        });
    }

    try {
        const hashedPassword = await hashPassword(parseBody.data.password);
        const dob = new Date(parseBody.data.dateOfBirth);

        const user = await prisma.user.create({
            data: {
                name: parseBody.data.name,
                username: parseBody.data.username,
                email: parseBody.data.email,
                password: hashedPassword,
                bio: parseBody.data.bio,
                image: parseBody.data.image,
                dateofBirth: dob,
            },
            select: {
                email: true  
            }
        });

        return NextResponse.json({
            message: 'User created successfully',
            user: user  
        }, {
            status: 201
        });
    } catch (error: any) {
        console.error(error);
        
        if (error.code === 'P2002') { 
            return NextResponse.json({
                message: 'Username or Email already exists'
            }, {
                status: 400
            });
        }

        return NextResponse.json({
            message: 'Error creating user'
        }, {
            status: 500
        });
    }
}
