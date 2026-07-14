import { useTranslation } from 'react-i18next'
import { FaMedal } from 'react-icons/fa'
import './baner.css'
function Baner() {
	const { t } = useTranslation()
	return (
		<section className='promise'>
			<div className='container'>
				<div className='promise__box'>
					<div className='promise__icon'>
						<FaMedal />
					</div>
					<div>
						<h2 className='promise__title'>
							{t('promise.title.line1')}
							<br />
							<span>{t('promise.title.line2')}</span>
						</h2>
						<p className='promise__description'>{t('promise.description')}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Baner
