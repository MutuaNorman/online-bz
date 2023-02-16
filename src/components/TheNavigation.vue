<template>
    <div class="nav-cont">
        <span><i @click="store.hideNav" class="fa-solid fa-x"></i></span>
        <span><i class="fa-solid fa-house"></i><router-link class="nav-link" :to="{name:'home'}">Home</router-link></span>
        <span><i class="fa-solid fa-lightbulb"></i><router-link class="nav-link" :to="{name:'enroll'}">Enroll</router-link></span>
        <span><i class="fa-solid fa-magnifying-glass"></i><router-link class="nav-link" :to="{name:'testimonials'}">Testimonials</router-link></span>
        <span><i class="fa-solid fa-book"></i><router-link class="nav-link" :to="{name:'mentorship'}">Mentorship</router-link></span>
    </div>
</template>

<script setup>
    import  {useMainStore}  from "@/store/mainStore"

    const store = useMainStore()
</script>

<style scoped>
  .nav-cont{
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    gap:20px;
    background-color: var(--white);
    /* opacity:0.6; */
    width:100%;
    height:400px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    
  }
  .nav-link{
    text-decoration: none;
    color:var(--dark);
    font-size:22px;
    transition:all 150ms ease-in-out;
  }
  .nav-link:hover{
    letter-spacing: 2px;
    border-bottom: 1px solid black;
  }
  .nav-cont .active-link{
    color: var(--red);
  }
  span{
    display:flex;
    align-items: center;
    justify-content: cemter;
    gap:10px;
  }
  .fa-solid{
    color:var(--red);
    cursor: pointer;
    font-size:20px;
  }
</style>