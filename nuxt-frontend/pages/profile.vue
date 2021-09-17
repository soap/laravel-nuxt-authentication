<template>
    <div>
        {{ user.first_name }} {{ user.last_name }}
    </div>
</template>
<script>
export default {
    layout: 'authenticated',

    middleware: ['auth'],

    data()  {
        return {
            user: this.$auth.user
        }
    }
}
</script>