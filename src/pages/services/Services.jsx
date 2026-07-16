import { useTranslation } from 'react-i18next'
import { useFetch } from '../../hooks/useFetch'
import Loading from '../loading/Loading'
import './services.css'

function Services() {
	const { t } = useTranslation()
	const { data, isPending, error } = useFetch('/data/services.json')

	if (isPending) return <Loading />
	if (error) return <div className='error'>{error}</div>
	if (!data) return null

	return (
		<section className='services container' id='services'>
			<h2 className='title'>{t('services.title')}</h2>
			<div className='services__section '>
				{data.services.map(service => (
					<div className='services__item-wrapper' key={service.id}>
						<div className='services__img'>
							<img
								src={service.image}
								alt={t(`services.${service.slug}.title`)}
								width={300}
							/>
						</div>
						<div className='services__item'>
							<h3 className='services__title'>
								{t(`services.${service.slug}.title`)}
							</h3>
							<p className='services__info'>
								{t(`services.${service.slug}.description`)}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Services
