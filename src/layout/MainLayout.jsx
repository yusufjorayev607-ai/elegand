import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollTopButton from '../components/ScrollTopButton'

function MainLayout() {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [pathname])
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
			<ScrollTopButton />
		</>
	)
}

export default MainLayout
