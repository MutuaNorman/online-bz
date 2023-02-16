
<template>
  <div class="container">
    <div class="navs">
      <div class="logo">
        <video width="100" height="60" loop autoplay muted>
          <source src="@/assets/images/logo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="bs-name">
        <h2 class="name"><marquee behavior="" direction="">The Money Makers Empire</marquee></h2>
      </div>
      <div class="bar-icon">
        <i @click="store.showNav" class="fa-solid fa-bars"></i>
      </div>
    </div>
    <div class="navigation" v-show="store.navState">
      <TheNavigation/>
    </div>
    <div>
      <router-view />
    </div>
    <div>
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
  import {RouterView, RouterLink} from "vue-router"
  import TheNavigation from "@/components/TheNavigation.vue"
  import TheFooter from "@/components/TheFooter.vue"
  import  {useMainStore}  from "@/store/mainStore"

  const store = useMainStore()
</script>


<style>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    border:none;
    outline:none;
    overflow-x: hidden;
    font-family: "Roboto Mono", sans-serif;
  }
  :root{
    --dark: #000000;
    --light-dark:#473C33;
    --blue: #362FD9;
    --white:#ffffff;
    --red:#FF0032;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  .container{
    width:100%;
    min-height:100vh;
    /* padding-bottom: 20px; */
    background-color: var(--dark);
    color:var(--white);
    position: relative;
  }
  .navs{
    width:100%;
    height:70px;
    background-color: var(--light-dark);
    display:flex;
    align-items: center;
    gap: 10px;
    position:fixed;
    top: 0;
  }
  
  .logo{
    display:flex;
    justify-content:center;
    align-items: center;
    width: 20%;
  }
  .bs-name{
    width:60%;
    display:flex;
    justify-content:center;
    align-items: center;
  }
  .bs-name h2{
    width:100%;
  }
  .bar-icon{
    width:20%;
    display:flex;
    justify-content:center;
    align-items: center;
  }
  .fa-bars{
    font-size: 25px;
    cursor:pointer;
    color:var(--red)
  }
 .navigation{
  width:100%;
  position:fixed;
  top:70px;
  transform: translate(10,-50%);
  right:0;
 }
    .connect{
        margin: 0 auto;
    }
    .connect p{
         margin-top: 20px;
    }
    .btn{
        width:80%;
        height:40px;
        margin: 0 auto;
        display:flex;
        align-items: center;
        justify-content: center;
        gap:15px;
        background-color: green;
        border-radius: 20px;
        transition:all 150ms ease-in-out;
        cursor: pointer;
        /* margin:0 auto; */
        /* margin-bottom: 20px; */
    }
    .btn i{
        font-size: 25px;
    }
    .btn a{
        font-size: 20px;
        text-decoration: none;
        color: var(--white);
    }
    .link{
        text-align: center;
        margin:0 auto;
        width:100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        /* border: 2px solid white; */
    }
    .link p{
        margin:20px 0;
    }
    .btn2{
        width:80%;
        height:40px;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: green;
        border-radius: 20px;
        cursor:pointer;
        transition:all 150ms ease-in-out;
    }
    .btn2 a{
        font-size: 20px;
        text-decoration: none;
        color: var(--white);
    }
    .btn:hover, .btn2:hover{
        background-color: var(--red);
    }
</style>
