import { useTranslation } from 'react-i18next'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './about.css'
function About() {
	const { t } = useTranslation()
	return (
		<section className='about container' id='about'>
			<div className='about__info'>
				<span className='about__label'>{t('about.label')}</span>
				<h2 className='about__info-title'>{t('about.title')}</h2>
				<p className='about__info-description'>{t('about.description')}</p>
				<ul className='about__info-features'>
					<li className='about__info-item'>
						<FaCheck className='about__info-icon' aria-hidden='true' />
						{t('about.features.quality')}
					</li>
					<li className='about__info-item'>
						<FaCheck className='about__info-icon' aria-hidden='true' />
						{t('about.features.specialists')}
					</li>
					<li className='about__info-item'>
						<FaCheck className='about__info-icon' aria-hidden='true' />
						{t('about.features.delivery')}
					</li>
					<li className='about__info-item'>
						<FaCheck className='about__info-icon' aria-hidden='true' />
						{t('about.features.approach')}
					</li>
				</ul>
				<Link to='/about' className='about__info-btn'>
					{t('about.button')}
				</Link>
			</div>
			<div className='about__image'>
				<img
					src='/image/partfolio.png'
					alt={t('about.title')}
					className='about__image-img'
				/>
			</div>
		</section>
	)
}

export default About
