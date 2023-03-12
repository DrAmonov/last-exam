import React from 'react';
import firs from '../../assets/images/1.png'
import sec from '../../assets/images/2.png'
import thr from '../../assets/images/3.png'
import four from '../../assets/images/4.png'
import fif from '../../assets/images/5.png'
import se from '../../assets/images/6.png'

function Colabrators() {
	return (
		<div>
			<div className="container">
				<div className="border-y pt-5 pb-3  flex gap-4">
          <div><img src={firs} alt="" /></div>
          <div><img src={sec} alt="" /></div>
          <div><img src={thr} alt="" /></div>
          <div><img src={four} alt="" /></div>
          <div><img src={fif} alt="" /></div>
          <div><img src={se} alt="" /></div>
        </div>
			</div>
		</div>
	);
}

export default Colabrators;
