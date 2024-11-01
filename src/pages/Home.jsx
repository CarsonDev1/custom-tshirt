import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import Header from '../components/header/Header';
import Footer from '../components/Footet';

const Home = () => {
	const snap = useSnapshot(state);

	return (
		<AnimatePresence>
			{snap.intro && (
				<>
					<motion.section className='home' {...slideAnimation('left')}>
						<Header />
						<motion.div className='home-content' {...headContainerAnimation}>
							<motion.div {...headTextAnimation}>
								<h1 className='head-text'>
									LET'S <br className='hidden xl:block' /> DO IT.
								</h1>
							</motion.div>
							<motion.div {...headContentAnimation} className='flex flex-col gap-5'>
								<p className='max-w-md text-base font-normal text-gray-600'>
									Create your unique and exclusive shirt with our brand-new 3D customization tool.{' '}
									<strong>Unleash your imagination</strong> and define your own style.
								</p>

								<CustomButton
									type='filled'
									title='Customize It'
									handleClick={() => (state.intro = false)}
									customStyles='w-fit px-4 py-2.5 font-bold text-sm'
								/>
							</motion.div>
						</motion.div>
						{/* <Footer /> */}
					</motion.section>
				</>
			)}
		</AnimatePresence>
	);
};

export default Home;
