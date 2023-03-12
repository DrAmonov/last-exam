import React from 'react';
import { Accordion } from "react-bootstrap";

function Ques() {
	return (
		<div className="container">
			<div className="mt-28">
				<div className="flex items-start">
					<div className="w-full">
						<h2 className="h3 wf-semibold">Ko’p so'raladigan savollar</h2>
						<p className="text-slate-400 my-3">
							Qo'shimcha ma'lumot uchun <br />
							biz bilan bog'laning
						</p>
						<button className="bg-slate-300 py-1 px-6 rounded-2xl mt-9 text-[14px]">
							{`Batafsil  ->`}
						</button>
					</div>
					<div>

					<div style={{width:"563px"}}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header> <span className='text-xl font-bold text-[#53B175]'>01</span> <span className='ml-2 font-semibold'>Lorem ipsum dolor sit amet.</span> </Accordion.Header>
          <Accordion.Body>
            Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header> <span className='text-xl font-bold text-[#53B175]'>02</span> <span className='ml-2 font-semibold'>Lorem ipsum dolor sit amet.</span> </Accordion.Header>
          <Accordion.Body>
            Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi
          </Accordion.Body>
        </Accordion.Item>
				<Accordion.Item eventKey="2">
          <Accordion.Header> <span className='text-xl font-bold text-[#53B175]'>03</span> <span className='ml-2 font-semibold'>Lorem ipsum dolor sit amet.</span> </Accordion.Header>
          <Accordion.Body>
            Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi
          </Accordion.Body>
        </Accordion.Item>
				<Accordion.Item eventKey="3">
          <Accordion.Header> <span className='text-xl font-bold text-[#53B175]'>04</span> <span className='ml-2 font-semibold'>Lorem ipsum dolor sit amet.</span> </Accordion.Header>
          <Accordion.Body>
            Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi
          </Accordion.Body>
        </Accordion.Item>
				<Accordion.Item eventKey="4">
          <Accordion.Header> <span className='text-xl font-bold text-[#53B175]'>05</span> <span className='ml-2 font-semibold'>Lorem ipsum dolor sit amet.</span> </Accordion.Header>
          <Accordion.Body>
            Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

					</div>
				</div>
			</div>
		</div>
	);
}

export default Ques;
