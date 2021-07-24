<template>
    <div>
        New Header
       <p>First Name: {{firstName}}</p>
       <p>Last Name: {{lastName}}</p>
       <p>Age: {{age}}</p>

       <button @click="updateName" class="btn btn-primary"> Click me</button>

        <b-button-group>
        <b-button variant="outline-primary">
            <b-icon icon="tools"></b-icon> Settings
        </b-button>
        <b-button variant="outline-primary">
            <b-icon icon="person-fill"></b-icon> Account
        </b-button>
        <b-button variant="outline-primary">
            <b-icon icon="inbox-fill"></b-icon> Messages
        </b-button>
        </b-button-group>

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