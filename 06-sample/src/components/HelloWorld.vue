<template>
  <dev>
    {{ msg }}
    <LoginFormView :onlogin="handleLogin" />
  </dev>
</template>

<script>
import LoginFormView from '@/components/LoginFormView'

export default {
  name: 'HelloWorld',

  components: {
    LoginFormView
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    handleLogin () {

    }
  }
}
</script>
