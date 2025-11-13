"use client";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { Newspaper } from "lucide-react";

interface Announcement {
    id: number,
    made_by: string,
    title: string,
    description: string,
    announced_on: string
}

export default function AnnouncementsPage() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [session, setSession] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetch("http://localhost:3000/api/announcements")
            .then(res => res.json())
            .then(data => setAnnouncements(data))
    }, [])


    return (
        <div className="space-y-4">
            <Newspaper size={100}/>

            <ul>
                {
                    announcements.map((a: Announcement) => (
                        <div key={a.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 mb-4">
                            <h1 className="text-4xl font-semibold mb-4">{a.title}</h1>
                            <p className="text-sm">{a.description}</p>
                            <p className="text-xl mt-6">Announcement made on: {a.announced_on}</p>
                            <p className="text-xl mt-6">By: {a.made_by}</p>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}