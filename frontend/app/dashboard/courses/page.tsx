"use client";
import { useState, useEffect } from "react";
import { GraduationCap } from "lucide-react";

interface Course {
    course_code: string,
    lecturer: string
    course_name: string,
    description: string
}

export default function CoursesPage() {

    const [courses, setCourses] = useState<Course[]>([])

    useEffect(() => {
        fetch("/api/courses")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-semibold mb-6">Courses Offered</h1>
            <GraduationCap size={100} />

            <ul>
                {courses.map(c => 
                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 mb-4">
                        <h1 className="text-xl">Course code: {c.course_code}</h1>
                        <p className="text-2xl mt-6">{c.course_name}</p>
                        <p className="text-sm mt-6">{c.description}</p>
                        <p>Course lecturer: {c.lecturer}</p>
                    </div>
                )
                }
            </ul>
        </div>
    )
}