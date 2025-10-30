import { NextResponse } from "next/server";

export const GET = async () => {
    const STUDENT_URL = "http://127.0.0.1:8000/students/";
    const res = await fetch(STUDENT_URL, { cache: 'no-store' });

    const data = await res.json();

    return NextResponse.json(data)
}