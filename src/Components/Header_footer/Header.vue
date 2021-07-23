<template>
    <div>
        New Header
       <p>First Name: {{firstName}}</p>
       <p>Last Name: {{lastName}}</p>
       <p>Age: {{age}}</p>

       <button @click="updateName"> Click me</button>
    </div>
</template>

<script>
export default {
    props: {
        firstName:String,
        lastName:String,
        age: Number
    },
    methods: {
        updateName(){
            this.firstName = "Raju"
        }
    }
}
</script>

<style scoped>
    div{
        color: blue;
    }
</style>