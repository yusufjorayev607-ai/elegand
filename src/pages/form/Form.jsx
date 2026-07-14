import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsBriefcase } from 'react-icons/bs'
import {
	FiArrowRight,
	FiChevronDown,
	FiPhone,
	FiUser,
	FiX,
} from 'react-icons/fi'
import { GiSewingString, GiTie } from 'react-icons/gi'
import { MdOutlineCheckroom } from 'react-icons/md'
import { TbShirt } from 'react-icons/tb'
import './form.css'

const TG_TOKEN = '8736648245:AAHBXLr4_LnzJof8lMOeTku-RBvqbjKVqqE'
const TG_CHAT_ID = '5425502072'

const EMPTY = { name: '', company: '', product: '', phone: '' }

const validPhone = p =>
	/^\+998\d{9}$/.test(p.replace(/\s/g, '')) ||
	/^998\d{9}$/.test(p.replace(/\s/g, '')) ||
	/^\d{9}$/.test(p.replace(/\s/g, ''))

/* ── Modal wrapper (export qilinadi, button uchun) ── */
export function FormModal({ onClose }) {
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = ''
		}
	}, [])

	return (
		<div className='kk-overlay' onClick={onClose}>
			<div className='kk-modal' onClick={e => e.stopPropagation()}>
				<button className='kk-close' onClick={onClose} aria-label='Yopish'>
					<FiX size={16} />
				</button>
				<FormInner onDone={onClose} />
			</div>
		</div>
	)
}

/* ── Inline versiya (footer uchun) ── */
export default function Form() {
	return (
		<section className='kk'>
			<FormInner />
		</section>
	)
}

/* ── Asosiy forma logikasi ── */
function FormInner({ onDone }) {
	const { t } = useTranslation()
	const PRODUCTS = [
		{
			icon: <MdOutlineCheckroom />,
			label: t('form.products.workwear'),
			emoji: '🦺',
		},
		{
			icon: <GiTie />,
			label: t('form.products.corporate'),
			emoji: '👔',
		},
		{
			icon: <GiSewingString />,
			label: t('form.products.custom'),
			emoji: '🧵',
		},
		{
			icon: <TbShirt />,
			label: t('form.products.mass'),
			emoji: '👕',
		},
	]

	const [d, setD] = useState(EMPTY)
	const [open, setOpen] = useState(false)
	const [errs, setErrs] = useState({})
	const [status, setStatus] = useState('idle')

	const set = (k, v) => {
		setD(p => ({ ...p, [k]: v }))
		setErrs(p => ({ ...p, [k]: null }))
	}

	const validate = () => {
		const e = {}

		if (!d.name.trim()) e.name = t('form.errors.name')

		if (!d.company.trim()) e.company = t('form.errors.company')

		if (!d.product) e.product = t('form.errors.product')

		if (!d.phone.trim()) e.phone = t('form.errors.phone')
		else if (!validPhone(d.phone)) e.phone = t('form.errors.phoneFormat')

		return e
	}

	const handleSubmit = async () => {
		const e = validate()
		if (Object.keys(e).length) {
			setErrs(e)
			return
		}
		setStatus('loading')
		try {
			const prod = PRODUCTS.find(p => p.label === d.product)
			const text =
				`📋 *${t('telegram.title')}*\n\n` +
				`👤 *${t('telegram.name')}:* ${d.name}\n` +
				`🏢 *${t('telegram.company')}:* ${d.company}\n` +
				`${prod ? prod.emoji : '📦'} *${t('telegram.product')}:* ${d.product}\n` +
				`📞 *${t('telegram.phone')}:* ${d.phone}`
			const res = await fetch(
				'https://api.telegram.org/bot' +
					TG_TOKEN +
					'/sendMessage?' +
					new URLSearchParams({
						chat_id: TG_CHAT_ID,
						text,
						parse_mode: 'Markdown',
					}),
			)
			const json = await res.json()
			if (!json.ok) throw new Error()
			setStatus('ok')
			setD(EMPTY)
		} catch {
			setStatus('fail')
		}
	}

	if (status === 'ok')
		return (
			<div className='kk-ok'>
				<div className='kk-ok-circle'>✓</div>
				<h3>{t('form.successTitle')}</h3>
				<p>{t('form.successText')}</p>
				<button
					className='kk-btn'
					onClick={() => {
						setStatus('idle')
						onDone?.()
					}}
				>
					{t('form.newRequest')} <FiArrowRight />
				</button>
			</div>
		)

	return (
		<div className='kk-body'>
			<F icon={<FiUser />} err={errs.name}>
				<input
					className={'kk-inp' + (errs.name ? ' e' : '')}
					placeholder={t('form.name')}
					value={d.name}
					onChange={ev => set('name', ev.target.value)}
				/>
			</F>

			<F icon={<BsBriefcase />} err={errs.company}>
				<input
					className={'kk-inp' + (errs.company ? ' e' : '')}
					placeholder={t('form.company')}
					value={d.company}
					onChange={ev => set('company', ev.target.value)}
				/>
			</F>

			<F icon={<MdOutlineCheckroom />} err={errs.product}>
				<div
					className={'kk-drop' + (errs.product ? ' e' : '')}
					onClick={() => setOpen(v => !v)}
				>
					<span className={d.product ? '' : 'ph'}>
						{d.product || t('form.selectProduct')}
					</span>
					<FiChevronDown className={'arr' + (open ? ' up' : '')} />
				</div>
				{open && (
					<ul className='kk-list'>
						{PRODUCTS.map(p => (
							<li
								key={p.label}
								className={d.product === p.label ? 's' : ''}
								onClick={() => {
									set('product', p.label)
									setOpen(false)
								}}
							>
								<span className='li-ic'>{p.icon}</span>
								{p.label}
							</li>
						))}
					</ul>
				)}
			</F>

			<F icon={<FiPhone />} err={errs.phone}>
				<input
					className={'kk-inp' + (errs.phone ? ' e' : '')}
					type='tel'
					placeholder={t('form.phone')}
					value={d.phone}
					onChange={ev => set('phone', ev.target.value)}
				/>
			</F>

			{status === 'fail' && <p className='kk-fail'>{t('form.error')}</p>}

			<button
				className='kk-btn'
				onClick={handleSubmit}
				disabled={status === 'loading'}
			>
				{status === 'loading' ? (
					t('form.sending')
				) : (
					<>
						<span>{t('form.send')}</span>
						<FiArrowRight />
					</>
				)}
			</button>
		</div>
	)
}

function F({ icon, err, children }) {
	return (
		<div className='kk-f'>
			<span className='kk-ic'>{icon}</span>
			{children}
			{err && <span className='kk-err'>{err}</span>}
		</div>
	)
}
