import { NextResponse } from "next/server";

export const GET = async () => {
    const res = await fetch("http://127.0.0.1:8000/courses/");
    const data = await res.json();

    return NextResponse.json(data)
}