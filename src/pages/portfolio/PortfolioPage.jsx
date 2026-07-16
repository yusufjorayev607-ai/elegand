import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowLeft } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import SEO from '../../components/SEO'
import { useFetch } from '../../hooks/useFetch'
import Loading from '../loading/loading'
import PortfolioModal from './PortfolioModal'
import './portfoliopage.css'

function PortfolioPage() {
	const { data, isPending, error } = useFetch('/data/portfolio.json')
	const [selectedItem, setSelectedItem] = useState(null)
	const [searchParams] = useSearchParams()
	const { t } = useTranslation()

	if (isPending) return <Loading />
	if (error) return <div className='error'>{error}</div>
	if (!data) return null

	const category = searchParams.get('category')
	const title = searchParams.get('title')

	const filteredPortfolio = category
		? data.portfolio.filter(item => item.category === category)
		: data.portfolio

	if (selectedItem) {
		return (
			<PortfolioModal
				item={selectedItem}
				onClose={() => setSelectedItem(null)}
			/>
		)
	}

	return (
		<>
			<SEO page='portfolio' />

			<section className='portfolio__page-wrapper container'>
				<div className='portfolio__page-header'>
					<h2 className='title'>{t(`portfolioPage.categories.${title}`)}</h2>

					<HashLink
						to='/#portfolio'
						smooth={true}
						className='portfolio__page-headr-btn'
					>
						<FaArrowLeft />
					</HashLink>
				</div>

				<div className='portfolio__page'>
					{filteredPortfolio.map(item => (
						<button
							key={item.id}
							onClick={() => setSelectedItem(item)}
							className='portfolio__page-img-btn'
						>
							<div className='portfolio__page-img-wrapper'>
								<img
									src={item.image}
									alt={t('portfolio.title')}
									width={300}
									className='portfolio__page-img'
								/>

								<span className='portfolio__page-price'>{item.price}</span>
							</div>
						</button>
					))}
				</div>
				<HashLink
					to='/#portfolio'
					smooth={true}
					className='portfolio__page-btn'
				>
					{t('portfolioPage.backBtn')}
				</HashLink>
			</section>
		</>
	)
}

export default PortfolioPage
