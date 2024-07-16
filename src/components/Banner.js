import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
	const title = 'Jungle-House'
	return (
		<div className='jungle-house-banner'>
			<img src={logo} alt='Jungle-House' />
			<h1 className='jungle-house-title'>{title}</h1>
		</div>
	)
}

export default Banner

