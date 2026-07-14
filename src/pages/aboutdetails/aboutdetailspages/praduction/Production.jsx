import './praduction.css'
function Production() {
	const productionImages = [
		{
			id: 1,
			src: '/image/workwear.jpg.png',
			label: "Tsex ko'rinishi",
		},
		{
			id: 2,
			src: '/image/workwear.jpg.png',
			label: 'Tikuv jarayoni',
		},
		{
			id: 3,
			src: '/image/workwear.jpg.png',
			label: 'Qirqim jarayoni',
		},
		{
			id: 4,
			src: '/image/workwear.jpg.png',
			label: 'Dazmol va tekshirish',
		},
		{
			id: 5,
			src: '/image/workwear.jpg.png',
			label: 'Qadoqlash',
		},
		{
			id: 6,
			src: '/image/workwear.jpg.png',
			label: 'Tayyor mahsulot',
		},
	]

	return (
		<section className='production section'>
			<div className='container'>
				<div className='production__head'>
					<div className='section-header section-header--left'>
						<span className='eyebrow'>Ishlab chiqarish</span>
						<h2 className='section-title'>
							Har bir detalda sifat va puxtalik.
						</h2>
					</div>
				</div>

				<div className='production__track' id='production-track'>
					{productionImages.map(item => (
						<div className='production-card' key={item.id}>
							<img src={item.src} alt={item.label} />
							<span>{item.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Production
