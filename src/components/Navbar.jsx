import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

function Navbar() {
	const { t } = useTranslation()
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
			<div className='container'>
				<div className='header-wrapper'>
					<div className='header__logo'>
						<Link to='/'>
							<img
								src='/image/ELEGAND_logo.svg'
								alt='ELEGAND_logo'
								width={50}
							/>
						</Link>
					</div>

					<nav className='header__nav'>
						<Link to='/about' className='header__nav-link'>
							{t('header.about')}
						</Link>

						<HashLink smooth to='/#services' className='header__nav-link'>
							{t('header.services')}
						</HashLink>

						<HashLink smooth to='/#contact' className='header__nav-link'>
							{t('header.contact')}
						</HashLink>

						<HashLink smooth to='/#portfolio' className='header__nav-link'>
							{t('header.portfolio')}
						</HashLink>
					</nav>

					<div className='header__mode'>
						<LanguageSwitcher />
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
