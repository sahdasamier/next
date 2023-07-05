import Image from "next/image";
import React from "react";
import { aboutMyData } from "./date/date";

const AboutMyPage = () => {
	return (
		<div className='flex flex-col items-center'>
			<section className='flex sm:flex-row sm:w-10/12 items-center flex-col w-full'>
				<div className='sm:w-1/3 w-full flex justify-center mt-12'>
					<Image
						priority
            height={200}
			     	width={200}
            style={{height:"5%",width:"60%" , borderRadius: "40%"
          }}
						aria-label={"image of jurica-koletic-7YVZYZeITc8-unsplash"}
						alt={"sahdasamierphoto"}
						src={"/images/sahda.jpeg"}
					/>
				</div>
				<div className='sm:ml-20 sm:mt-0  sm:w-2/3 w-full mt-6 ml-0 p-10'>
					<h2 className=''> {aboutMyData.title}</h2>
					<p className='text-base'> {aboutMyData.body}</p>
				</div>
			</section>
			<section className='w-full bg-blue-light p-10 h-full'>
				<p> {aboutMyData.highlightedBody}</p>
        <p> {aboutMyData.body2}</p>
			</section>
			
		</div>
	);
};

export default AboutMyPage;