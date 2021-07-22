<template>
    <div>
        New Header
        <p>{{myName}}</p>
    </div>
</template>

<script>
export default {
    props: ['myName']
}
</script>

<style scoped>
    div{
        color: blue;
    }
</style>