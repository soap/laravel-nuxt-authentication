<template>
    <div class="flex items-center justify-center mt-52">
    <div class="w-full max-w-xs">
      <form  method="post" class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" @submit.prevent="login">
        <div class="mb-4 identity-input">
          <label
            for="identity"
            class="block mb-2 text-sm font-bold text-gray-700"
          >
            Email</label
          >
          <input
            id="identity"
            v-model="email"
            class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 shadow appearance-none borderrounded focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            aria-describedby="emailHelp"
          />
          <span id="emailHelp" class="text-xs text-red-700"></span>
        </div>

        <div class="mb-6 password-input">
          <label
            for="identity"
            class="block mb-2 text-sm font-bold text-gray-700"
            >Password</label
          >

          <input
            id="password" 
            v-model="password"
            aria-describedby="passwordHelp"
            class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 shadow appearance-none borderrounded focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="*******"
          />

          <span id="passwordHelp" class="text-xs text-red-700"></span>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-black focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
    layout: 'auth',
      data() {
        return {
            email: '',
            password: '',
        }
    },
     methods: {
        async login() {
            await this.$auth.loginWith('laravelSanctum', {
                data: {
                    email: this.email,
                    password: this.password,
                },
            })

            this.$router.push('/dashboard')
    },
  },
}
</script>