import { ToastContainer } from 'react-toastify';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<main className='transition-all ease-in app'>
			<Home />
			<Canvas />
			<Customizer />
			<ToastContainer />
		</main>
	);
}

export default App;
