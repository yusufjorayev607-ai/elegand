import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import { FormModal } from '../form/Form'
import './home.css'

function Home() {
	const [showForm, setShowForm] = useState(false)
	const { t } = useTranslation()
	return (
		<section className='hero container'>
			<div className='hero__info'>
				<h1 className='hero__info-title'>{t('hero.title')}</h1>
				<p className='hero__info-description'>{t('hero.description')}</p>
				<div className='btn'>
					<button onClick={() => setShowForm(true)} className='hero__info-btn'>
						{t('hero.orderBtn')}
					</button>
					<HashLink to='#portfolio' className='hero__info-btn'>
						{t('hero.portfolioBtn')}
					</HashLink>
				</div>
				{showForm && <FormModal onClose={() => setShowForm(false)} />}
			</div>
		</section>
	)
}

export default Home
