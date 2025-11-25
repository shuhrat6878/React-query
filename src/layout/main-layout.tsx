import { Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-amber-400 p-5 font-bold ">  CRUD </header>
            <main className="flex-1">
                <Outlet />
            </main>
            <footer className="bg-gray-800 p-4 text-white text-center">© 2025 My Company</footer>

        </div>
    )
}

