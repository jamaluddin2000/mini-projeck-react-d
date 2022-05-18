import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>
    <nav class="bg-purple-200 text-white   ">
			<div class=" mx-auto ">
			
					<div class="flex justify-between px-10">
						<div>
							{/* <!-- Website Logo --> */}
							<Link to="/Home" class="flex items-center py-4 px-2 cursor-pointer hover:scale-125"><h1 className='text-4xl font-bold'>
                                    E-LOundry
                                </h1></Link>
							{/* <a href="" class="flex items-center py-4 px-2">
                                <h1 className='text-4xl font-bold'>
                                    E-LOundry
                                </h1>
							</a> */}
						</div>

						{/* <!-- Primary Navbar items --> */}
						<div class="hidden md:flex items-center space-x-1">
							<Link to='/Home' class="py-4 px-20 text-2xl cursor-pointer hover:scale-125 text-white hover:text-green-500  border-green-500 font-semibold ">Home</Link>
							<Link to='/Service' class="py-4 px-20 text-2xl cursor-pointer hover:scale-125 text-white font-semibold hover:text-green-500 transition duration-300">Services</Link>
							<Link to='/Status' class="py-4 px-20 text-2xl cursor-pointer hover:scale-125 text-white font-semibold hover:text-green-500 transition duration-300">Status</Link>
							<Link to='/About' class="py-4 px-20 text-2xl cursor-pointer hover:scale-125 text-white font-semibold hover:text-green-500 transition duration-300">About</Link>
						</div>
					</div>
				
					{/* <!-- Mobile menu button --> */}
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				
			</div>
			 {/* mobile menu  */}
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
			{/* <script>
				const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
			</script> */}
		</nav>
    </>
  )
}
