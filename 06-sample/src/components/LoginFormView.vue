<template>
    <div>
        <form>
            <input
                type="text"
                v-model="item"
            >
        </form>
    </div>
</template>

<script>

export default {
  name: 'LoginFormView',

  data () {
    return {
      item: ''
    }
  },

  props: {
    onlogin: {
      type: Function
    }
  }
}
</script>
