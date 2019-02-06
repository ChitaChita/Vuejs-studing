<template>
    <transition>
        <div>
            <ul>
                <li>{{ this.result[0] }}</li>
                <li>{{ this.result[1] }}</li>
                <li>{{ this.result[2] }}</li>
            </ul>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'modal',

    props: {
        'result': {
            type: Array,
            required: true
        }
    }
}
</script>