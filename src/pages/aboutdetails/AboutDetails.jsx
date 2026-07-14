import './aboutDetails.css'
import AboutDetailsHero from './aboutdetailspages/aboutdetailhero/AboutDetailsHero'
import Baner from './aboutdetailspages/baner/Baner'
import FAQ from './aboutdetailspages/faq/FAQ'
import Testimonials from './aboutdetailspages/testimonials/Testimonials'
import Values from './aboutdetailspages/values/Values'
import WhyUs from './aboutdetailspages/whyus/WhyUs'

function AboutDetails() {
	return (
		<>
			<AboutDetailsHero />
			<Baner />
			<Values />
			<WhyUs />
			{/* <Production /> */}
			<Testimonials />
			<FAQ />
		</>
	)
}

export default AboutDetails
