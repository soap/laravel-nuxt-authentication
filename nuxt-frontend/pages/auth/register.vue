<template>
    <div class="flex flex-col min-h-screen bg-grey-lighter">
        <form 
            class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto"
            @submit.prevent="register"
        >
            
            <div class="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <input
                    v-model="form.name"
                    type="text"
                    class="block w-full p-3 mb-4 border rounded border-grey-light"
                    placeholder="Name"
                />

                <input
                    v-model="form.email"
                    type="text"
                    class="block w-full p-3 mb-4 border rounded border-grey-light"
                    placeholder="Email"
                />

                <input
                    v-model="form.password"
                    type="password"
                    class="block w-full p-3 mb-4 border rounded border-grey-light"
                    placeholder="Password"
                />

                <input
                    v-model="form.confirm_password"
                    type="password"
                    class="block w-full p-3 mb-4 border rounded border-grey-light"
                    placeholder="Confirm Password"
                />

                <button
                    type="submit"
                    class="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-black focus:outline-none focus:shadow-outline"
                >
                    Create Account
                </button>

                <div class="mt-4 text-sm text-center text-grey-dark">
                    By signing up, you agree to the
                    <a
                        class="no-underline border-b border-grey-dark text-grey-dark"
                        href="#"
                    >
                        Terms of Service
                    </a>
                    and
                    <a
                        class="no-underline border-b border-grey-dark text-grey-dark"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
            <div class="mt-6 text-grey-dark">
                Already have an account?
                <nuxt-link
                    to="/auth/login"
                    class="no-underline border-b border-blue text-blue"
                >
                    Log in
                </nuxt-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'auth',
    data() {
        return {
            error: '',
            form: {
                name: '',
                email: '',
                password: '',
                confirm_password: '',
            }
        }    
    },
    methods: {
        async register() {
            try {
                await this.$axios.$get('sanctum/csrf-cookie')
                const { data } = await this.$axios.post('http://mydomain.test/api/v1/auth/register', this.form);
                this.$auth.setUser(data.user);
                this.$auth.setUserToken(data.token, false);
            
                this.$router.push({name: 'dashboard'});
            } catch(e) {
                this.error = e.message;
            }
        }    
    }
}
</script>
