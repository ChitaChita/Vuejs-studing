<template>
<div id="score">
    <ul>
        <li v-for="sc in scoreList" :key="sc.id">
            {{sc.id}} {{ sc.slotValues }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'score',

    props: {
        'scoreList': {
            Type: Object,
            required: true
        }
    }
}
</script>