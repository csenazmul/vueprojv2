<template>
    <div>
        <hr>
        Footer
        <!-- <p>{{myName}}</p> -->
        <p>{{myStudent}}</p>
        <ul>
            <li v-for="stu in myStudent"  :key="stu">
                {{stu}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        // myName:{
        //     type: String,
        //     required : true
        // },
        myStudent:{
            type: Array
        }
    }
}
</script>

<style scoped>
    div{
        color: orange;
    }
</style>