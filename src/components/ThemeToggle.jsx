import { useEffect, useState } from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { LuMoonStar } from 'react-icons/lu'
import './theme.css'

function ThemeToggle() {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem('theme') || 'dark'
	})

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div className='theme'>
			<LuMoonStar
				className={`theme__icon ${
					theme === 'dark' ? 'theme__icon--active' : ''
				}`}
			/>

			<button className='theme__toggle' onClick={toggleTheme}>
				<span
					className={`theme__circle ${
						theme === 'light' ? 'theme__circle--light' : ''
					}`}
				></span>
			</button>

			<IoSunnyOutline
				className={`theme__icon ${
					theme === 'light' ? 'theme__icon--active' : ''
				}`}
			/>
		</div>
	)
}

export default ThemeToggle
