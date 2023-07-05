import React from "react";
import {  Linkedin, Gmail, Twitter, Github } from "../icons";

type FooterProps = {
	contactMyLinks: string[];
};

export const Footer = ({ contactMyLinks }: FooterProps) => {
	return (
		<footer className='w-full  shadow-footer mt-12 py-4  bottom-0 '>
			<div className='flex items-center justify-center gap-1'>
				<a href={contactMyLinks[0]} aria-label='Github'>
					<Github className='icons_contactme' />
				</a>
				<a href={contactMyLinks[1]} aria-label='Twitter'>
					<Twitter className='icons_contactme' />
				</a>
				<a href={contactMyLinks[2]} aria-label='Linkedin'>
					<Linkedin className='icons_contactme' />
				</a>
				<a href={contactMyLinks[3]} aria-label='Gmail'>
					<Gmail className='icons_contactme' />
				</a>
			</div>
		</footer>
	);
};