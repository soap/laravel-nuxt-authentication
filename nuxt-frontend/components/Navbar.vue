<template>
      		<!-- Navbar goes here -->
		<nav class="bg-white shadow-lg">
			<div class="max-w-6xl px-4 mx-auto">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							<!-- Website Logo -->
							<a href="#" class="flex items-center px-2 py-4">
								<img src="~/assets/images/logo.png" alt="Logo" class="w-8 h-8 mr-2">
								<span class="text-lg font-semibold text-gray-500">Navigation</span>
							</a>
						</div>
						<!-- Primary Navbar items -->
						<div class="items-center hidden space-x-1 md:flex">
							<a href="" class="px-2 py-4 font-semibold text-green-500 border-b-4 border-green-500 ">Home</a>
							<a href="" class="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500">Services</a>
							<a href="" class="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500">About</a>
							<a href="" class="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500">Contact Us</a>
						</div>
					</div>
					<!-- Secondary Navbar items -->
					<div class="items-center hidden space-x-3 md:flex ">
						<nuxt-link to="/auth/login" class="px-2 py-2 font-medium text-gray-500 transition duration-300 rounded hover:bg-green-500 hover:text-white">Log In</nuxt-link>
						<nuxt-link to="/auth/register" class="px-2 py-2 font-medium text-white transition duration-300 bg-green-500 rounded hover:bg-green-400">Sign Up</nuxt-link>
					</div>
					<!-- Mobile menu button -->
					<div class="flex items-center md:hidden">
						<button class="outline-none mobile-menu-button">
						<svg class="w-6 h-6 text-gray-500 hover:text-green-500"
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<!-- mobile menu -->
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block px-2 py-4 text-sm font-semibold text-white bg-green-500">Home</a></li>
					<li><a href="#services" class="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500">Services</a></li>
					<li><a href="#about" class="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500">About</a></li>
					<li><a href="#contact" class="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500">Contact Us</a></li>
				</ul>
			</div>
		</nav>
    
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="postcss" scoped>
.toolbar {
  @apply relative w-full px-8 text-gray-700 bg-white;
}
.toolbar .toolbar--container {
  @apply container flex flex-col flex-wrap items-center justify-between py-5 mx-auto max-w-7xl;
  @screen md {
    @apply flex-row;
  }
}
.toolbar .text--logo {
  @apply relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none select-none;
}
nav .item--link {
  @apply relative font-medium leading-6 mx-2 text-gray-600 transition duration-150 ease-out;
}
nav .item--link:hover {
  @apply text-gray-900;
}
</style>