import React from 'react'

const NavBar = () => {
	return (
		<nav class='relative w-full  bg-gray-900 bg-opacity-80  text-sky-500   '>
			<div class=' flex flex-row  '>
				<div>
					<img
						class='rounded-lg max-h-16 hover:scale-125  p-2'
						src='https://neda-weather-app.fly.dev/img/portret.jpg'
						alt=''
						onClick={() =>
							window.open(
								'https://neda-weather-app.fly.dev/img/portret.jpg',
								'_blank',
							)
						}></img>
				</div>
				<div class='flex auto-rows-auto gap-2 text-xs py-6 '>
					<a
						class=' hover:text-white'
						href='https://neda-weather-app.fly.dev/'>
						Weather
					</a>
					<a
						class=' hover:text-white'
						href='https://cristianneda.github.io/subscriber-gitlab/'>
						Subscriber
					</a>
					<a
						class=' hover:text-white'
						href='https://cristianneda.github.io/Simple-Background-Generator/'>
						Bg-Generator
					</a>
					<a
						class=' hover:text-white'
						href='https://cristianneda.github.io/redux/'>
						Todo
					</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
