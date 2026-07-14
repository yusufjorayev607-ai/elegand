import SEO from '../components/SEO'
import About from './about/About'
import Contact from './contact/Contact'
import Form from './form/Form'
import Home from './home/Home'
import Partners from './partners/Partners'
import Portfolio from './portfolio/Portfolio'
import Services from './services/Services'

function Pages() {
	return (
		<>
			<SEO page='home' />

			<>
				<Home />
				<hr className='divider' />
				<Partners />
				<hr className='divider' />
				<Services />
				<hr className='divider' />
				<Portfolio />
				<hr className='divider' />
				<About />
				<hr className='divider' />
				<Contact />
				<hr className='divider' />
				<div className='form__cat'>
					<Form />
				</div>
			</>
		</>
	)
}

export default Pages
