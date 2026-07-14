import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { useFetch } from '../../hooks/useFetch'
import './partners.css'

function Partners() {
	const { data, isPending, error } = useFetch('/data/partners.json')
	const { t } = useTranslation()
	const sliderRef = useRef(null)

	const scrollLeft = () => {
		sliderRef.current?.scrollBy({
			left: -250,
			behavior: 'smooth',
		})
	}

	const scrollRight = () => {
		sliderRef.current?.scrollBy({
			left: 250,
			behavior: 'smooth',
		})
	}

	if (isPending) return <div className='loader'>Yuklanmoqda...</div>
	if (error) return <div className='error'>{error}</div>
	if (!data) return null

	return (
		<section className='partners__section'>
			<div className='container'>
				<h2 className='title'>{t('partners.title')}</h2>

				<div className='partners__wrapper'>
					<button
						className='partners__arrow partners__arrow-left'
						onClick={scrollLeft}
					>
						<IoChevronBack />
					</button>

					<div className='partners' ref={sliderRef}>
						{data.partners.map(partner => (
							<div className='partners__item' key={partner.name}>
								<img
									src={partner.logo}
									className='partners__img'
									width={100}
									alt={partner.name}
								/>

								<img
									src={partner.logoDark}
									className='partners__img-dark'
									width={100}
									alt={partner.name}
								/>
							</div>
						))}
					</div>

					<button
						className='partners__arrow partners__arrow-right'
						onClick={scrollRight}
					>
						<IoChevronForward />
					</button>
				</div>
			</div>
		</section>
	)
}

export default Partners
