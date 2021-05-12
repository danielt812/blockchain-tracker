import { Route } from 'react-router-dom';
import Prices from './pages/Prices';
import Settings from './pages/Settings';
import Nav from './components/Nav';

const App = () => {
	return (
		<div className='App'>
			<Nav />
			<Route exact path='/' component={Prices} />
			<Route path='/prices' component={Prices} />
			<Route path='/settings' component={Settings} />
		</div>
	);
};

export default App;
