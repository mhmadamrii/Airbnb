import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET() {
    try {
        const posts = await prisma.most.findMany({})
        if (posts) {
            return NextResponse.json({
                data: posts
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export async function POST(req: Response) {
    const payload = await req.json()
    const { title, description } = payload

    if (payload?.title === '' || payload?.description === '') {
        return NextResponse.json({
            message: 'fill the input'
        }, { status: 400 })
    }
    try {
        console.log('payload', payload)
        const post = await prisma.most.create({
            data: {
                title,
                description
            }
        })
        console.log('post', post)
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({ message: 'created!' }, { status: 201 })
}
