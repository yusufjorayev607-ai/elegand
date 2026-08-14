import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate, useSearchParams } from 'react-router-dom'

import SEO from '../../components/SEO'
import { useFetch } from '../../hooks/useFetch'
import ErrorPage from '../error/ErrorPage'
import Loading from '../loading/Loading'
import PortfolioModal from './PortfolioModal'

import './portfoliopage.css'

function PortfolioPage() {
	const { data, isPending, error } = useFetch('/data/portfolio.json')

	const [selectedIndex, setSelectedIndex] = useState(null)

	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	const { t } = useTranslation()

	if (isPending) return <Loading />

	if (error) return <ErrorPage />

	if (!data) return null

	const category = searchParams.get('category')
	const title = searchParams.get('title')

	const filteredPortfolio = category
		? data.portfolio.filter(item => item.category === category)
		: data.portfolio

	const handleBack = () => {
		navigate(-1)
	}

	const openModal = index => {
		setSelectedIndex(index)
	}

	const closeModal = () => {
		setSelectedIndex(null)
	}

	const goToPrevious = () => {
		setSelectedIndex(prev => {
			if (prev === null) return null
			if (prev === 0) {
				return filteredPortfolio.length - 1
			}

			return prev - 1
		})
	}

	const goToNext = () => {
		setSelectedIndex(prev => {
			if (prev === null) return null
			if (prev === filteredPortfolio.length - 1) {
				return 0
			}

			return prev + 1
		})
	}

	return (
		<>
			<SEO page='portfolio' />

			<section className='portfolio__page-wrapper container'>
				<div className='portfolio__page-header'>
					<h2 className='title'>
						{title
							? t(`portfolioPage.categories.${title}`)
							: t('portfolioPage.categories.all')}
					</h2>

					<button
						type='button'
						onClick={handleBack}
						className='portfolio__page-headr-btn'
					>
						<FaArrowLeft />
					</button>
				</div>

				<div className='portfolio__page'>
					{filteredPortfolio.map((item, index) => (
						<button
							key={item.slug}
							type='button'
							onClick={() => openModal(index)}
							className='portfolio__page-img-btn'
						>
							<div className='portfolio__page-img-wrapper'>
								<img
									src={item.image}
									alt={t('portfolio.title')}
									width={300}
									className='portfolio__page-img'
								/>
							</div>
						</button>
					))}
				</div>

				<button
					type='button'
					onClick={handleBack}
					className='portfolio__page-btn'
				>
					{t('portfolioPage.backBtn')}
				</button>
			</section>

			{selectedIndex !== null && (
				<PortfolioModal
					items={filteredPortfolio}
					selectedIndex={selectedIndex}
					onClose={closeModal}
					onPrevious={goToPrevious}
					onNext={goToNext}
				/>
			)}
		</>
	)
}

export default PortfolioPage
