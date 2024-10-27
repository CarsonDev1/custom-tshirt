import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LogoControls from '../canvas/LogoControls';
import TextControls from '../canvas/TextControls';
import state from '../store';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes, texturesLogos } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { ColorPicker, CustomButton, FilePicker, TextureLogoPicker, Tab } from '../components';

const Customizer = () => {
	const snap = useSnapshot(state);

	const [file, setFile] = useState('');
	const [activeEditorTab, setActiveEditorTab] = useState('');
	const [activeFilterTab, setActiveFilterTab] = useState({
		frontLogoShirt: true,
		backLogoShirt: true,
		frontTextShirt: true,
		backTextShirt: true,
		stylishShirt: false,
	});

	const generateTabContent = () => {
		switch (activeEditorTab) {
			case 'colorpicker':
				return <ColorPicker />;
			case 'filepicker':
				return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
			case 'logocontrols':
				return <LogoControls />;
			case 'textcontrols':
				return <TextControls />;
			case 'texturelogopicker':
				return (
					<TextureLogoPicker texturesLogos={texturesLogos} handleTextureLogoClick={handleTextureLogoClick} />
				);
			default:
				return null;
		}
	};

	const handleTextureLogoClick = (textureLogo) => {
		if (textureLogo.type === 'texture') {
			state.fullDecal = textureLogo.image;
		} else if (textureLogo.type === 'frontLogo') {
			state.frontLogoDecal = textureLogo.image;
		} else if (textureLogo.type === 'backLogo') {
			state.backLogoDecal = textureLogo.image;
		}
	};

	const handleDecals = (type, result) => {
		const decalType = DecalTypes[type];
		state[decalType.stateProperty] = result;

		if (!activeFilterTab[decalType.filterTab]) {
			handleActiveFilterTab(decalType.filterTab);
		}
	};

	const handleActiveFilterTab = (tabName) => {
		if (tabName === 'downloadShirt') {
			downloadCanvasToImage();

			// Show toast notification
			toast.success('Tải xuống thành công vui lòng gửi hình vào hotline để chúng tôi sẽ lên đơn cho bạn', {
				autoClose: 4000,
			});

			// Redirect after 2 seconds
			setTimeout(() => {
				window.location.href = 'https://wear-your-way.vercel.app/';
			}, 4000);
		} else {
			switch (tabName) {
				case 'frontLogoShirt':
					state.isFrontLogoTexture = !activeFilterTab[tabName];
					break;
				case 'backLogoShirt':
					state.isBackLogoTexture = !activeFilterTab[tabName];
					break;
				case 'frontTextShirt':
					state.isFrontText = !activeFilterTab[tabName];
					break;
				case 'backTextShirt':
					state.isBackText = !activeFilterTab[tabName];
					break;
				case 'stylishShirt':
					state.isFullTexture = !activeFilterTab[tabName];
					break;
				default:
					break;
			}

			setActiveFilterTab((prevState) => ({
				...prevState,
				[tabName]: !prevState[tabName],
			}));
		}
	};

	const readFile = (type) => {
		reader(file).then((result) => {
			handleDecals(type, result);
			setActiveEditorTab('');
		});
	};

	return (
		<AnimatePresence>
			<ToastContainer position='top-right' closeOnClick pauseOnHover draggable />

			{!snap.intro && (
				<>
					<motion.div key='custom' className='absolute top-0 left-0 z-10' {...slideAnimation('left')}>
						<div className='flex items-center min-h-screen'>
							<div className='editortabs-container tabs'>
								{EditorTabs.map((tab) => (
									<Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} />
								))}
								{generateTabContent()}
							</div>
						</div>
					</motion.div>

					<motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
						<CustomButton
							type='filled'
							title='Go Back'
							handleClick={() => (state.intro = true)}
							customStyles='w-fit px-4 py-2.5 font-bold text-sm'
						/>
					</motion.div>

					<motion.div className='filtertabs-container' {...slideAnimation('up')}>
						{FilterTabs.map((tab) => (
							<Tab
								key={tab.name}
								tab={tab}
								isFilterTab
								isActiveTab={activeFilterTab[tab.name]}
								handleClick={() => handleActiveFilterTab(tab.name)}
							/>
						))}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Customizer;
