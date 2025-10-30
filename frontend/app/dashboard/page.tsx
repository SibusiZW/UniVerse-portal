"use client";

import { useEffect, useState } from "react";

export default function DashboardMainPage() {
    const [username, setUsername] = useState("Guest");

    useEffect(() => {
        const name = localStorage.getItem("username")

        if (name) {
            setUsername(name);
        }
    });

    return (
        <div>
            <h1 className="text-xl font-semibold">{`Welcome ${username}!`}</h1>
        </div>
    )
}
