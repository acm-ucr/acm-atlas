import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Frame from "./Frame";

const Vision = () => {
	return (
		<Row className='font-lexend flex text-acm-black justify-between items-center w-11/12 mx-auto !mt-[12vh] pt-4'>
			<Col sm={6} className='text-center p-3'>
				<p className='text-heading flex justify-center mx-auto'>
					Our Vision
				</p>
				<p className='text-text flex justify-center mx-auto w-11/12 pt-3'>
					Our Vision is simple: We want to improve our members
					professionally, technically, and personally. We want to help
					our members grow throughout their college career, whether
					they enter as a first-year university student or as a
					transfer student.
				</p>
			</Col>
			<Col sm={6} className='flex justify-center items-center p-3'>
				<Frame
					image='presentation1.webp'
					topRight={"#80cbc4"}
					bottomLeft={"#c792ea"}
					corners={"#000000"}
				/>
			</Col>
		</Row>
	);
};

export default Vision;
