interface AnnouncementsPageProps {
    id: Number,
    made_by: string,
    description: string,
    announced_on: string
}

export default function AnnouncementsPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-semibold">University Announcements</h1>

            <ul>
                
            </ul>
        </div>
    )
}