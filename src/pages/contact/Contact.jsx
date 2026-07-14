import { useTranslation } from 'react-i18next'
import { FaTelegramPlane } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import './contact.css'
function Contact() {
	const { t } = useTranslation()
	return (
		<section className='contact container' id='contact'>
			<h2 className='contact__title title'>{t('contact.title')}</h2>
			<div className='contact__cards'>
				<a href='tel:+998938212137' className='contact__card-link'>
					<div className='contact__icons'>
						<FiPhone aria-hidden='true' />
					</div>
					<h3 className='contact__card-title'>{t('contact.phone.title')}</h3>
					<p className='contact__card-value'>+99893 821 21 37</p>
					<p className='contact__card-info' style={{ whiteSpace: 'pre-line' }}>
						{t('contact.phone.info')}
					</p>
				</a>
				<a
					href='https://t.me/classic_821'
					target='_blank'
					rel='noopener noreferrer'
					className='contact__card-link'
				>
					<div className='contact__icons'>
						<FaTelegramPlane aria-hidden='true' />
					</div>
					<h3 className='contact__card-title'>{t('contact.telegram.title')}</h3>
					<p className='contact__card-value'>classic_821</p>
					<p className='contact__card-info'>{t('contact.telegram.info')}</p>
				</a>
				<a
					href='mailto:yusufjorayev607@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
					className='contact__card-link'
				>
					<div className='contact__icons'>
						<FiMail aria-hidden='true' />
					</div>
					<h3 className='contact__card-title'>{t('contact.email.title')}</h3>
					<p className='contact__card-value'>yusufjorayev607@gmail.com</p>
					<p className='contact__card-info'>{t('contact.email.info')}</p>
				</a>
				<a
					href='https://yandex.uz/maps/-/CTqUUH6B'
					target='_blank'
					rel='noopener noreferrer'
					className='contact__card-link'
				>
					<div className='contact__icons'>
						<HiOutlineLocationMarker aria-hidden='true' />
					</div>
					<h3 className='contact__card-title'>{t('contact.address.title')}</h3>
					<p className='contact__card-value'>{t('contact.address.city')}</p>
					<p className='contact__card-info'>{t('contact.address.district')}</p>
				</a>
			</div>
		</section>
	)
}

export default Contact
