<template>
    <div class="view">
     <div class="form">    
        <h1>Login Page</h1>
        <input 
        type="email"
        placeholder="email"
        name="email"
        required
        v-model="email"
        ><br>
        <input 
        type="email"
        placeholder="email"
        name="email"
        required
        v-models="email" 
        ><br>
        <button @click="submitData">Submit</button>
     </div>   
    </div>
</template>

<style>


.view{ 
    height: 100vh;
    padding: 1rem;

}


.form{
    border-radius: 3px;
    border: solid 1px black;

}
h1{
    text-decoration: underline 1px;
    padding: 1rem;
}

button {
    padding: 5px 5px;
}

</style>



<script>

export default{
    data(){
        return{
            email: 'abs@gmail.com',
            password: 'yolo123'
        }

},
methods:{
    submitData(){
        console.log(this.$data)
        this.$store.dispatch('login' ,this.$data)
    }
}
}

</script>