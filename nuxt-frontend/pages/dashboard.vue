<template>
    <div>
        Your login status is {{ loggedIn }}
        <p>{{ user.first_name }} {{ user.last_name }}</p>
    </div>    
</template>
<script>
export default {
    layout: 'authenticated',
    middleware: ['auth'],
    data() {
        return {
            user: this.$auth.user,
            loggedIn: this.$auth.loggedIn
        }
    },   
}
</script>