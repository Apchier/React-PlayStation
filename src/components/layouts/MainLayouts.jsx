import Navbar from '../Navbar.jsx'
import Header from '../MobileHeader.jsx'
import Footer from '../FooterMobile.jsx'
import Card from '../Card.jsx'
import Console from '../CardConsole.jsx'

export default function MainLayouts() {
    return (
        <section id="container" className="flex flex-col gap-5 w-full h-full p-3">
            <Header />
            <Navbar />
            <main className="flex flex-col w-full">
                <div id="heading" className="flex justify-between items-center text-[1.3rem] mb-6 translate-y-4">
                    <span className="font-bold">Popular Product</span>
                    <span className="text-red-600">View all</span>
                </div>
                <Card />
            </main>
            <section className="-translate-y-5 sm:translate-y-0 mb-[60px] sm:mb-none">
                <div id="heading" className="flex justify-between pb-4">
                    <span className="text-[1.3rem] font-bold">Recomended</span>
                    <span className="text-[1.3rem] text-red-600">View all</span>
                </div>
                <Console />
            </section>
            <Footer />
        </section>
    )
}