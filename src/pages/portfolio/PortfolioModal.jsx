import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GiRolledCloth } from 'react-icons/gi'
import { IoClose, IoColorPaletteOutline } from 'react-icons/io5'
import { WiDaySunny } from 'react-icons/wi'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import './portfolioModal.css'

function PortfolioModal({ items, selectedIndex, onClose, onPrevious, onNext }) {
	const { t } = useTranslation()

	const item = items[selectedIndex]
	useEffect(() => {
		const originalOverflow = document.body.style.overflow

		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = originalOverflow
		}
	}, [])
	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				onClose()
			}

			if (event.key === 'ArrowLeft') {
				onPrevious()
			}

			if (event.key === 'ArrowRight') {
				onNext()
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClose, onPrevious, onNext])
	const handleOverlayClick = event => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	if (!item) return null

	return (
		<div className='modal' onClick={handleOverlayClick}>
			<button
				type='button'
				className='modal__arrow modal__arrow--left'
				onClick={onPrevious}
				aria-label='Oldingi rasm'
			>
				<FaChevronLeft />
			</button>
			<div className='modal__content'>
				<div className='modal__image'>
					<TransformWrapper
						initialScale={1}
						doubleClick={{ mode: 'zoomIn' }}
						wheel={{ step: 0.01 }}
						pinch={{ step: 5 }}
						centerOnInit
					>
						<TransformComponent
							wrapperStyle={{
								width: '100%',
								height: '100%',
							}}
							contentStyle={{
								width: '100%',
								height: '100%',
							}}
						>
							<img src={item.image} alt={item.title} className='modal-image' />
						</TransformComponent>
					</TransformWrapper>
				</div>

				<div className='modal__info'>
					<h2 className='modal__info-title'>
						{t(`portfolio.${item.slug}.title`)}
					</h2>

					<p className='modal__info-description'>
						{t(`portfolio.${item.slug}.description`)}
					</p>

					<div className='modal__info-row'>
						<GiRolledCloth className='icon' />

						<h3 className='modal__info-material'>
							{t('portfolio.labels.material')}

							<small>{t(`portfolio.${item.slug}.material`)}</small>
						</h3>
					</div>

					<div className='modal__info-row'>
						<WiDaySunny className='icon' />

						<h3 className='modal__info-mavsum'>
							{t('portfolio.labels.season')}

							<small>{t(`portfolio.${item.slug}.season`)}</small>
						</h3>
					</div>

					<div className='modal__info-row'>
						<IoColorPaletteOutline className='icon' />

						<h3 className='modal__info-color'>
							{t('portfolio.labels.color')}

							<small>{t(`portfolio.${item.slug}.color`)}</small>
						</h3>
					</div>
				</div>
			</div>

			<button
				type='button'
				className='modal__arrow modal__arrow--right'
				onClick={onNext}
				aria-label='Keyingi rasm'
			>
				<FaChevronRight />
			</button>

			<button
				type='button'
				className='modal__btn'
				onClick={onClose}
				aria-label='Modalni yopish'
			>
				<IoClose />
			</button>
		</div>
	)
}

export default PortfolioModal
