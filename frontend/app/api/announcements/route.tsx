import { NextResponse } from "next/server";

export const GET = async () => {
    const API_URL = "http://127.0.0.1:8000/announcements/";
    const res = await fetch(API_URL, { cache: 'no-store' })
    const data = await res.json();

    return NextResponse.json(data);
}