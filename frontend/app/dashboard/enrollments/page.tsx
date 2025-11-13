"use client";
import { useState, useEffect } from "react";
import { Landmark } from "lucide-react";

interface Enrollment {
    id: number,
    student: string,
    course: string,
    grade: string,
    date_enrolled: string
}

export default function Page() {
    const [studentName, setStudentName] = useState("");
    const [enrollment, setEnrollement] = useState<Enrollment>();

    useEffect(() => {
        const name = localStorage.getItem("username");

        if (!name) {
            alert("No enrollemnts founds. Log In!")
            return;
        }

        setStudentName(name);

        const getEnrollment = async (lookUpName: string) => {
            const res = await fetch("/api/enrollments");
            const data: Enrollment[] = await res.json();

            const enrollmentRecord = data.find(e => e.student.trim().toLowerCase() === lookUpName.trim().toLowerCase());

            if (!enrollmentRecord) {
                alert("No enrollemnt found");
                return;
            }
            setEnrollement(enrollmentRecord);
        }

        getEnrollment(name);
    }, []);





    return (
        <div>
            <h1 className="text-4xl font-semibold mb-6">Enrollments</h1>
            <Landmark className="mb-6" size={100} />
            
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 mb-4">
                <h1 className="text-xl">Enrolled on: {enrollment?.date_enrolled}</h1>
                <p className="text-2xl mt-6">{enrollment?.course}</p>
                <p className="text-sm mt-6">You've got a/an: {enrollment?.grade}</p>
                <p>Course ID: {enrollment?.id}</p>
            </div>
        </div>
    )
}