"use client";
import { useState, useEffect } from "react";
import { Landmark } from "lucide-react";


export default function Page() {
    const [studentName, setStudentName] = useState("");

    useEffect(() => {
        const name = localStorage.getItem("username");

        if (name) {
            setStudentName(name);
        }
    });



    return (
        <div>
            <h1 className="text-4xl font-semibold mb-6">Enrollments</h1>
            <Landmark className="mb-6" size={50} />
            <p>{studentName}</p>
        </div>
    )
}