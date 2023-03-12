import React from 'react';
import bus from '../../assets/images/bus.svg';
import cash from '../../assets/images/cash.svg';
import pers from '../../assets/images/pers.svg';
import tel from '../../assets/images/tel.svg';

function Servise() {
	return (
		<div>
			<div className="container">
				<div className="border-y py-5 flex justify-between mt-40">
					<div className="flex gap-4 items-center">
						<img src={bus} alt="" />
						<div>
							<strong>Yetkazib berish bepul</strong>
							<p>100 000 so'mdan ortiq buyurtma berganingizda</p>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<img src={cash} alt="" />
						<div>
							<strong>Tez to'lov</strong>
							<p>100% xavfsiz to'lov</p>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<img src={pers} alt="" />
						<div>
							<strong>Doimiy chegirmalar</strong>
							<p>Ular allaqachon ishlamoqda</p>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<img src={tel} alt="" />
						<div>
							<strong>Onlayn yordam</strong>
							<p>Ish vaqti: 08:00 - 18:00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Servise;
