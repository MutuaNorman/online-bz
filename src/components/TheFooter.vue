<template>
    <div class="footer">
        <h2>The Money Makers Empire</h2>
        <p>The legitimate online business for all ages</p>
        <div class="quicklinks">
            <router-link class="link" :to="{name:'home'}">Home</router-link>
            <router-link class="link" :to="{name:'enroll'}">Enroll</router-link>
            <router-link class="link" :to="{name:'testimonials'}">Testimonials</router-link>
            <a class="link" href="https://wa.link/89a234">Get a mentor</a>
            <a class="link" href="https://goldhela.com/register.php?ref=Blake254">Register</a>
        </div>
        <p class="foot">Made with <i class="fa-solid fa-heart"></i> by cyprohTechs &copy;copyright2023 | All rights Reserved </p>
    </div>
</template>

<script>
    import {RouterLink} from "vue-router"
</script>

<style scoped>
    .footer{
        width:100%;
        height:auto;
        padding:10px 5px 0 5px;
        background-color: var(--light-dark);
    }
    .footer h2{
        text-align: center;
        color: var(--red);
        font-size: 25px;
        text-decoration:underline
    }
    .footer p{
        text-align: center;
        margin-bottom: 10px;
        font-size: 19px;
        color: var(--dark);
        font-weight: 800;
    }
    .quicklinks{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap:10px;
    }
    .link{
        text-decoration: none;
        color: var(--white);
        font-size: 20px;
    }
    .link:hover{
        color:var(--blue);
        text-decoration: underline;
        /* border-bottom:1px solid var(--dark) ; */
    }
    .foot{
        margin-top: 10px;
    }
    .fa-heart{
        color:var(--red)
    }
</style>