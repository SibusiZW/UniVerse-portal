"use client";
import { Home } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardMainPage() {
    const [username, setUsername] = useState("Guest");

    useEffect(() => {
        const name = localStorage.getItem("username");

        if (name) {
            setUsername(name);
        }
    });

    return (
        <div>
            <Home className="mb-6" size={100}/>
            <h1 className="text-xl font-semibold">{`Welcome ${username}!`}</h1>
        </div>
    )
}
