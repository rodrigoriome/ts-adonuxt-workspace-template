<template>
  <h1>It works!</h1>
</template>

<script>
  import User from '@adonuxt/server/app/Models/User'

  export default {
    mounted() {
      const user = new User()

      user.sayHello()
    }
  }
</script>
