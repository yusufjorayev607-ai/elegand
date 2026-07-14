import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRight, FaMinus, FaPaperPlane, FaPlus } from 'react-icons/fa'
import { FormModal } from '../../../form/Form'
import './faq.css'
function FAQ() {
	const [active, setActive] = useState(0)
	const [showModal, setShowModal] = useState(false)
	const { t } = useTranslation()
	const questions = [1, 2, 3, 4, 5]

	const handleToggle = index => {
		setActive(active === index ? null : index)
	}

	return (
		<section className='faq-cta section'>
			<div className='container faq-cta__grid'>
				<div className='faq'>
					<span className='eyebrow'>{t('faq.eyebrow')}</span>
					<h2 className='section-title'>{t('faq.title')}</h2>

					<div className='faq__list'>
						{questions.map(id => (
							<div
								className={`faq__item ${active === id ? 'active' : ''}`}
								key={id}
							>
								<button
									className='faq__question'
									onClick={() => handleToggle(id)}
								>
									<span>{t(`faq.items.${id}.question`)}</span>
									{active === id ? <FaMinus /> : <FaPlus />}
								</button>
								{active === id && (
									<div className='faq__answer'>
										<p>{t(`faq.items.${id}.answer`)}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
				<div className='cta'>
					<h2 className='cta__title'>{t('faq.cta.title')}</h2>
					<p className='cta__description'>{t('faq.cta.description')}</p>
					<div className='cta__buttons'>
						<button
							onClick={() => setShowModal(true)}
							className='btn btn--primary'
						>
							{t('faq.cta.order')}
							<FaArrowRight />
						</button>
						<a
							href='https://t.me/classic_821'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn--secondary'
						>
							{t('faq.cta.telegram')}
							<FaPaperPlane />
						</a>
					</div>
				</div>
			</div>
			{showModal && <FormModal onClose={() => setShowModal(false)} />}
		</section>
	)
}

export default FAQ
