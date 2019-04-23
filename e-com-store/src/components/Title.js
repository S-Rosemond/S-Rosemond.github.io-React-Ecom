import React from 'react';

export default function Title(props) {
	return (
		<div className="row mb-5">
			<div className="col-10 mx-auto my-2 text-center text-title ">
				<h1 className="text-capitalize font-weight-bold text-shadow">{props.name}</h1>
				<h6>
					<strong className=" text-dark ">{props.title}</strong>
				</h6>
			</div>
		</div>
	);
}
