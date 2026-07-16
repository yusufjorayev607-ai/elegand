import { useTranslation } from 'react-i18next'
import { Link, useRouteError } from 'react-router-dom'
import './errorPage.css'
function ErrorPage() {
	const error = useRouteError()
	const { t } = useTranslation()
	console.log(t('error.title'))

	if (error.status == 404) {
		return (
			<div className='error-page'>
				<h2 className='error__page-title'>404</h2>
				<h3 className='error__page-status-text'>{t('error.statusText')}</h3>
				<p className='error__page-discription'>{t('error.description')}</p>
				<Link to='/'>home</Link>
			</div>
		)
	}
	return (
		<div className='error-page'>
			<h2 className='error__page-title'>404</h2>
			<h3 className='error__page-status-text'>Oops, page not found!</h3>
			<p className='error__page-discription'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, veniam.
			</p>
			<Link to='/'>home</Link>
		</div>
	)
}

export default ErrorPage
