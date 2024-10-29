import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { IoIosArrowDown, IoMdMenu } from 'react-icons/io';
import Logo from '../../assets/logo.png';
import { FaRegCircleUser } from 'react-icons/fa6';

const Header = () => {
	return (
		<header className='fixed top-0 left-0 z-50 w-full p-4 transition-all bg-[#343232] shadow-md'>
			<div className='container flex items-center justify-between mx-auto'>
				<a href='http://dung.io.vn' className='h-20 w-52'>
					<img src={Logo} alt='Wear Your Way' className='object-contain w-full h-full' />
				</a>

				<nav className='hidden space-x-8 font-semibold text-white uppercase md:flex'>
					<a href='#' className='transition-colors hover:text-yellow-400'>
						Thiết Kế
					</a>
					<a href='http://dung.io.vn/product-list' className='transition-colors hover:text-yellow-400'>
						Sản Phẩm Mẫu
					</a>
					<div className='relative group'>
						<a href='#' className='flex items-center transition-colors hover:text-yellow-400'>
							Thông Tin <IoIosArrowDown className='ml-1' />
						</a>
						<ul className='absolute left-0 flex-col hidden p-4 mt-2 space-y-2 transition-all bg-gray-700 rounded shadow-lg group-hover:flex'>
							<a
								href='http://dung.io.vn/table-price'
								className='text-white transition-colors hover:text-yellow-400'
							>
								Bảng Giá
							</a>
							<a href='#' className='text-white transition-colors hover:text-yellow-400'>
								Bài Viết
							</a>
						</ul>
					</div>
					<a href='http://dung.io.vn/posts' className='transition-colors hover:text-yellow-400'>
						Tin Tức
					</a>
					<a href='http://dung.io.vn/about' className='transition-colors hover:text-yellow-400'>
						About Us
					</a>
				</nav>

				<div className='flex items-center space-x-6 text-white'>
					<a href='/cart' className='relative'>
						<MdOutlineAddShoppingCart className='text-3xl transition-colors hover:text-yellow-400' />
						<span className='absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-gray-800 bg-yellow-400 rounded-full'>
							2
						</span>
					</a>
					<FaRegCircleUser className='text-3xl transition-colors hover:text-yellow-400' />
					<IoMdMenu className='text-3xl transition-colors cursor-pointer md:hidden hover:text-yellow-400' />
				</div>
			</div>
		</header>
	);
};

export default Header;
