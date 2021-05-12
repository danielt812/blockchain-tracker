import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<nav className='nav-background'>
			<ul className='nav-ul'>
				<li className='nav-li'>
					<Link to='/prices'>Prices</Link>
				</li>
				<li className='nav-li'>
					<Link to='/settings'>Settings</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
