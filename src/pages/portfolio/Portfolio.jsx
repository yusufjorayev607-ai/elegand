import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './portfolio.css'

function Portfolio() {
	const { t } = useTranslation()

	const categories = [
		{
			id: 1,
			category: 'sezon-yozgi',
			title: 'summer',
			image: '/image/portfolio/summer/portfolio-summer-1.png',
		},
		{
			id: 2,
			category: 'sezon-qishki',
			title: 'winter',
			image: '/image/portfolio/winter/Winter-9.jpg',
		},
		{
			id: 3,
			category: 'oyoq-kiyimlar',
			title: 'shoes',
			image: '/image/portfolio/summer/portfolio-summer-5.png',
		},
		{
			id: 4,
			category: 'himoya-vositalari',
			title: 'protection',
			image: '/image/portfolio/himoyavositalari/Protective-equipment-5.jpg',
		},
		{
			id: 5,
			category: 'ommaviy-kiyimlar',
			title: 'mass',
			image: '/image/portfolio/ommaviyKiymlar/Mass-produced-1.PNG',
		},
	]

	return (
		<section className='portfolio container' id='portfolio'>
			<h2 className='title'>{t('portfolio.title')}</h2>

			<div className='portfolio__image'>
				{categories.map(item => (
					<Link
						key={item.id}
						to={`/portfolio?category=${item.category}&title=${item.title}`}
						className='portfolio__image-item'
					>
						<img
							src={item.image}
							alt={item.title}
							className='portfolio__image-img'
						/>
						<h3 className='portfolio__image-title'>
							{t(`portfolioPage.categories.${item.title}`)}
						</h3>
					</Link>
				))}
			</div>
		</section>
	)
}

export default Portfolio
