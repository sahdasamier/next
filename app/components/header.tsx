import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {
	name: string;
	pages: {
		id: number;
		label: string;
		link: string;
	}[];
};

export const Header = ({ name, pages }: HeaderProps) => {
	return (
		<header className='flex flex-col relative bg-linear-557AFF w-full h-48'>
			<div className='flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10'>
				<nav className='text-right flex flex-row sm:gap-6 self-end gap-1'>
					{pages.map((page) => {
						return (
							<Link
								aria-label={page.label}
								key={page.id}
								href={page.link}
								
								className='px-4 py-1 text-black min-w-100 hover:bg-purple-light hover:text-purple font-display uppercase tracking-wide sm:bg-none
								'
							>
								{page.label}
							</Link>
						);
					})}
				</nav>
				<h1 style={{
					color:"black",
					fontWeight:"100px",
					fontSize:"30px",
					paddingLeft:"0.5rem",
					marginBottom:0
				}} > 
				{name} 
				</h1>
			</div>
			
			<Image
				priority
				height={420}
				width={2000}
				src='/images/cover1.jpg'
				alt={`Image of ${name}`}
				aria-label={`Image of ${name}`}
                objectFit="cover"
                objectPosition="top"
                style={{
                 width: '100%',
                 height: '108%',
                 position: 'absolute',
                 marginBottom: '6px',
                }}

			/>
			

		</header>
	);
};