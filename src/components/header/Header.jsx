import React, { useState } from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { IoIosArrowDown, IoMdMenu } from 'react-icons/io';
import Logo from '../../assets/logo.png';
import { FaRegCircleUser } from 'react-icons/fa6';

const Header = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<header className='fixed top-0 left-0 z-50 w-full p-4 transition-all bg-[#343232] shadow-md'>
			<div className='container flex items-center justify-between mx-auto'>
				<a href='https://wearyourway.shop' className='h-20 w-52'>
					<img src={Logo} alt='Wear Your Way' className='object-contain w-full h-full' />
				</a>

				<nav className='hidden space-x-8 font-semibold text-white uppercase md:flex'>
					<a href='#' className='transition-colors hover:text-yellow-400'>
						Thiết Kế
					</a>
					<a href='https://wearyourway.shop/product-list' className='transition-colors hover:text-yellow-400'>
						Sản Phẩm Mẫu
					</a>
					<div className='relative'>
						<a
							href='#'
							className='flex items-center transition-colors hover:text-yellow-400'
							onClick={toggleDropdown}
						>
							Thông Tin <IoIosArrowDown className='ml-1' />
						</a>
						{isDropdownOpen && (
							<ul className='absolute left-0 mt-2 space-y-2 transition-all duration-200 bg-gray-700 rounded shadow-lg'>
								<li>
									<a
										href='https://wearyourway.shop/table-price'
										className='block px-4 py-2 text-white transition-colors hover:text-yellow-400'
									>
										Bảng Giá
									</a>
								</li>
								<li>
									<a
										href='https://www.facebook.com/profile.php?id=61566002023966'
										className='block px-4 py-2 text-white transition-colors hover:text-yellow-400'
									>
										Bài Viết
									</a>
								</li>
							</ul>
						)}
					</div>
					<a href='https://wearyourway.shop/posts' className='transition-colors hover:text-yellow-400'>
						Tin Tức
					</a>
					<a href='https://wearyourway.shop/about' className='transition-colors hover:text-yellow-400'>
						About Us
					</a>
				</nav>

				<div className='flex items-center space-x-6 text-white'>
					<a href='https://wearyourway.shop/cart' className='relative'>
						<MdOutlineAddShoppingCart className='text-3xl transition-colors hover:text-yellow-400' />
						<span className='absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-gray-800 bg-yellow-400 rounded-full'>
							2
						</span>
					</a>
					<a href='https://wearyourway.shop/login'>
						<FaRegCircleUser className='text-3xl transition-colors hover:text-yellow-400' />
					</a>
					<IoMdMenu className='text-3xl transition-colors cursor-pointer md:hidden hover:text-yellow-400' />
				</div>
			</div>
		</header>
	);
};

export default Header;
