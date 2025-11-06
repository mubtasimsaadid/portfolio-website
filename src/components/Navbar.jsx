import {useState, useEffect} from "react";


const Navbar = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            }
            else{
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <a href="#home"><h1 className="text-3xl font-bold text-black p-1 md:bg-transparent md:text-black"> Mubtasim </h1> </a>
            </div>

            <ul
              className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-ivory-100 backdrop-blur-md p-4 rounded-br-2xl md:bg-transparent transition-all md:transition-none 
              ${active ? "top-0 opacity-100" : "-top-10 opacity=0"}`}>    

                <li>
                    <a href="#" className="group relative sm:text-lg text-base font-medium transition duration-300">
                        Home
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#D2B48C] transition-all group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#D2B48C] transition-all group-hover:w-3/6"></span>
                    </a>
                </li>

                <li>
                    <a href="#about" className="group relative sm:text-lg text-base font-medium transition duration-300">
                        About
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#D2B48C] transition-all group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#D2B48C] transition-all group-hover:w-3/6"></span>
                    </a>
                </li>

                <li>
                    <a href="#skill" className="group relative sm:text-lg text-base font-medium transition duration-300">
                        Skills
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#D2B48C] transition-all group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#D2B48C] transition-all group-hover:w-3/6"></span>
                    </a>
                </li>

                <li>
                    <a href="#projects" className="group relative sm:text-lg text-base font-medium transition duration-300">
                        Projects
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#D2B48C] transition-all group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#D2B48C] transition-all group-hover:w-3/6"></span>
                    </a>
                </li>

                <li>
                    <a href="#contact" className="sm:text-lg text-base font-mono px-6 py-2 bg-[#D2B48C] rounded-lg shadow-md hover:bg-[#b89b6c] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D2B48C] focus:ring-offset-2">
                        Contact
                    </a>
                </li>

            </ul>

        
        </div>
    )
};

export default Navbar;

