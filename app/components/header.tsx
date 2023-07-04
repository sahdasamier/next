import React from 'react'
import Image from "next/image";

const Header = () => {
  return (
   <header>
    <div>
<nav>
 <button>about</button>
 <button>about</button>
 <button>about</button>

</nav>
<h1>
    Sahda Samier Ahmed
</h1>
    </div>
    <Image
				priority
				height={400}
				width={2000}
				className='w-full h-48 object-cover object-top absolute mb-6'
				src='/images/jeshoots-com-pUAM5hPaCRI-unsplash.jpg'
				alt=""
				aria-label=""
			/>
   </header>
  )
}

export default Header
