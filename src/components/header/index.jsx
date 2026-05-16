export function Header() {
    return (
        <header className="flex items-center justify-between p-6 fixed top-0 left-0 right-0 z-100 border-b-5 border-red-800 bg-white mx-auto">
            <h1 className="text-blue-950 text-4xl font-bold ">LS Empresarial</h1>
            <nav className="hidden lg:flex">
                <ul className="flex gap-8 text-gray-500 text-2xl">
                    <li className="hover:text-blue-950 hover:underline hover:decoration-red-500 hover:underline-offset-8 transition-all"><a href="#product">Catalog</a></li>
                    <li className="hover:text-blue-950 hover:underline hover:decoration-red-500 hover:underline-offset-8 transition-all"><a href="#benefits">Benefits</a></li>
                    <li className="hover:text-blue-950 hover:underline hover:decoration-red-500 hover:underline-offset-8 transition-all"><a href="#testimonials">Testimonials</a></li>
                    <li className="hover:text-blue-950 hover:underline hover:decoration-red-500 hover:underline-offset-8 transition-all"><a href="#footer">Support</a></li>
                </ul>
            </nav>
            <a 
                href="https://wa.me/5518996644674?text=Olá! Gostaria de saber mais sobre o massageador profissional."
                target="_blank"
                rel="noopener noreferrer"
            >
                <button type="button" className="bg-blue-950 text-white font-bold text-lg py-2 px-8 rounded-3xl hover:bg-blue-800 transition-colors cursor-pointer">
                    Contact us
                </button>
            </a>
           
        </header>
    )
}