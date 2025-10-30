"use client";

import { useState } from "react";

export default function DashboardMainPage() {
    const [username, setUsername] = useState("Guest");
    return (
        <div>
            <h1 className="text-xl font-semibold">{`Welcome ${username}!`}</h1>
        </div>
    )
}
