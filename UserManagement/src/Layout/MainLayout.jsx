import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

function MainLayout() {
    return (
        <>
            <Header />
            <main className="text-center my-12 text-2xl container mx-auto min-h-[60vh]">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
