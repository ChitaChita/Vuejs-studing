<template>
    <div>
        <!-- ここに処理を書いていく -->
        <h2>タスク一覧</h2>
        <ul>
            <li v-for="task in tasks" v-bind:key="task.id">
                <input type="checkbox" v-bind:checked="task.done">
                {{task.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // ここに実装を書いていく
    computed: {
        tasks() {
            // ストアを読む
            return this.$store.state.tasks
        }
    }
}
</script>