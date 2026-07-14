import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiChevronDown } from 'react-icons/fi'
import { IoLanguageOutline } from 'react-icons/io5'
import './languageSwitcher.css'

const languages = [
	{ code: 'uz', name: "O'zbek" },
	{ code: 'ru', name: 'Русский' },
	{ code: 'en', name: 'English' },
	{ code: 'tr', name: 'Türkçe' },
	{ code: 'zh', name: '中文' },
]

function LanguageSwitcher() {
	const { i18n } = useTranslation()
	const [open, setOpen] = useState(false)

	const current =
		languages.find(lang => lang.code === i18n.language) || languages[0]

	const menuRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = e => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className='language' ref={menuRef}>
			<button className='language__btn' onClick={() => setOpen(!open)}>
				<IoLanguageOutline />
				<span>{current.code.toUpperCase()}</span>
				<FiChevronDown className={open ? 'rotate' : ''} />
			</button>

			{open && (
				<div className='language__menu'>
					{languages.map(lang => (
						<button
							key={lang.code}
							className={`language__item ${
								i18n.language === lang.code ? 'active' : ''
							}`}
							onClick={() => {
								i18n.changeLanguage(lang.code)
								setOpen(false)
							}}
						>
							<span>{lang.name}</span>

							{i18n.language === lang.code && <span>✓</span>}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default LanguageSwitcher
