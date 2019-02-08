<template>
<div id="start-button">
    <input type="button" value="START" v-on:click="$emit('slot-start', true)">
</div>
</template>

<script>
export default {
    name: 'start',
}
</script>