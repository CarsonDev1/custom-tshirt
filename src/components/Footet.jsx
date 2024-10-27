import React from 'react';
import Logo from '../assets/logo.png';
import FooterIcon from '../assets/footer-icon.png';
import FooterFB from '../assets/footer-fb.png';
import FooterIG from '../assets/footer-ig.png';
import FooterX from '../assets/footer-fb-x.png';

const Footer = () => {
	return (
		<footer className='py-10 font-sans text-white bg-gray-800'>
			<div className='container flex flex-wrap items-start justify-between mx-auto space-y-6 lg:space-y-0'>
				{/* Logo and Description */}
				<div className='w-full px-4 lg:w-1/3'>
					<img src={Logo} alt='Wear Your Way' width={210} height={89} className='mb-4' />
					<p className='text-sm leading-relaxed text-gray-400'>
						WYW in áo thun theo yêu cầu cho mọi lứa tuổi và phong cách với nhiều mẫu mã, kiểu dáng và màu
						sắc. Bằng cách sử dụng hình ảnh, logo hoặc công cụ thiết kế trực tuyến đơn giản của WYW, bạn có
						thể tự do tạo ra thiết kế của riêng mình.
					</p>
				</div>

				{/* Customer Support */}
				<div className='w-full px-4 lg:w-1/4'>
					<h3 className='mb-3 text-lg'>Hỗ Trợ Khách Hàng</h3>
					<ul className='space-y-2 text-sm text-gray-400'>
						<li>
							<a href='#' className='hover:text-yellow-400'>
								Giới thiệu về chúng tôi
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-yellow-400'>
								Hướng dẫn sử dụng công cụ thiết kế
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-yellow-400'>
								Chính sách và quy định
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-yellow-400'>
								Chính sách bảo mật
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-yellow-400'>
								Thông tin sở hữu
							</a>
						</li>
					</ul>
				</div>

				{/* Contact Information */}
				<div className='w-full px-4 lg:w-1/4'>
					<h3 className='mb-3 text-lg'>Chăm Sóc Khách Hàng</h3>
					<p className='flex items-center mb-2 text-lg text-white'>
						<img src={FooterIcon} width={24} height={24} alt='footer-icon' className='mr-2' /> 0774023841
					</p>
					<p className='mb-4 text-sm text-yellow-400'>
						<a href='mailto:wearyourway.vn@gmail.com' className='hover:underline'>
							wearyourway.vn@gmail.com
						</a>
					</p>
					<div className='mt-3'>
						<h4 className='mb-2 text-base'>Follow Us</h4>
						<div className='flex space-x-4'>
							<a href='#'>
								<img
									src={FooterFB}
									width={24}
									height={24}
									alt='Facebook Icon'
									className='hover:text-yellow-400'
								/>
							</a>
							<a href='#'>
								<img
									src={FooterIG}
									width={24}
									height={24}
									alt='Instagram Icon'
									className='hover:text-yellow-400'
								/>
							</a>
							<a href='#'>
								<img
									src={FooterX}
									width={24}
									height={24}
									alt='X Icon'
									className='hover:text-yellow-400'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
