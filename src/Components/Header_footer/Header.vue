<template>
    <div>
        New Header
       <p>First Name: {{firstName}}</p>
       <p>Last Name: {{lastName}}</p>
       <p>Age: {{age}}</p>

       <button @click="updateName" class="btn btn-primary"> Click me</button>

        <svg class="bi" width="32" height="32" fill="currentColor">
        <use xlink:href="bootstrap-icons.svg#heart-fill"/>
        </svg>
        <svg class="bi" width="32" height="32" fill="currentColor">
        <use xlink:href="bootstrap-icons.svg#toggles"/>
        </svg>
        <svg class="bi" width="32" height="32" fill="currentColor">
        <use xlink:href="bootstrap-icons.svg#shop"/>
        </svg>

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
            // this.firstName = "Raju"
            this.$emit('updateValue','Rima')
        }
    }
}
</script>

<style scoped>
    div{
        color: blue;
    }
</style>