import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import './scrollTopButton.css'

function ScrollTopButton() {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShow(window.scrollY > 250)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	if (!show) return null

	return (
		<button
			className='scroll-top'
			onClick={scrollTop}
			aria-label='Scroll to top'
		>
			<FiArrowUp size={24} />
		</button>
	)
}

export default ScrollTopButton
