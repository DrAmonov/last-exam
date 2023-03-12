import React from 'react';
import footer from '../../assets/images/footer.svg';
import fac from '../../assets/images/face.svg';
import ins from '../../assets/images/ins.svg';
import tg from '../../assets/images/tg.svg';
import you from '../../assets/images/you.svg';
import play from '../../assets/images/play.png';
import app from '../../assets/images/app.svg';
import Button from '../Button/Button';

function Footer() {
	return (
		<div className="bg-[#282828] mt-[204px] text-white">
			<div className="container">
				<div className="bg-f pt-9">
					<h3 className="text-2xl font-semibold>">LOGO</h3>
					<div className="flex justify-between mt-4">
						<div>
							<p>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</p>
							<p>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</p>
							<div className="flex gap-3">
								<button>
									<img src={fac} alt="" />
								</button>
								<button>
									<img src={ins} alt="" />
								</button>
								<button>
									<img src={tg} alt="" />
								</button>
								<button>
									<img src={you} alt="" />
								</button>
							</div>
							<div className="bg-[#53B175] rounded-t-xl mt-14 p-4 flex gap-7">
								<div>
									<p>E-mail</p>
									<a href="#" className="text-white no-underline">
										info@mehrigiyo.uz
									</a>
								</div>
								<div>
									<p>Bizga qo'ng'iroq qiling</p>
									<a href="#" className="text-white no-underline">
										+99898 125 31 03
									</a>
								</div>
							</div>
						</div>
						<div>
							<p>Huquqiy</p>
						</div>
						<div>
							<p>Ilovani yuklab olish</p>
							<button className="block mt-2">
								<img src={play} alt="" />
							</button>
							<button className="block mt-2">
								<img src={app} alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<Button />
		</div>
	);
}

export default Footer;
