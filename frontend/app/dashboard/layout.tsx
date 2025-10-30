import NavBar from "../components/NavBar"

export default function Dashboardlayout({ children } : Readonly<{ children: React.ReactNode }>)
{
    return (
        <html lang="en">
            <body>
                <NavBar />
                <main className="max-w-7xl mx-auto mt-6 px-4 text-black">{children}</main>
            </body>
        </html>
    )
}