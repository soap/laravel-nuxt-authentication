<template>
        <div class="flex flex-col min-h-screen bg-grey-lighter">
            <div class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div class="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="first_name"
                        placeholder="First Name" />
                    
                    <input 
                        type="text"
                        class="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="last_name"
                        placeholder="Lirst Name" />
                    
                    <input 
                        type="text"
                        class="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="mobile_number"
                        placeholder="Mobile Number" />
                        
                    <input 
                        type="text"
                        class="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="password"
                        placeholder="Password" />
                        
                    <input 
                        type="password"
                        class="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-black focus:outline-none focus:shadow-outline"
                    >Create Account</button>

                    <div class="mt-4 text-sm text-center text-grey-dark">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="mt-6 text-grey-dark">
                    Already have an account? 
                    <nuxt-link to="/auth/login" class="no-underline border-b border-blue text-blue">
                        Log in
                    </nuxt-link>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    layout: 'auth'
}
</script>