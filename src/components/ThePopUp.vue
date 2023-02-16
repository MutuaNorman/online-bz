<template>
    <div class="popup">
        <div class="clientname">
            <div class="div1">
                <img src="@/assets/images/Hale.jpg" alt="">
                <h2>{{ name }}</h2>
            </div>
            <div class="close" @click="store.closePopup">
                <i class="fa-solid fa-x"></i>
            </div>
        </div>
        <div class="testimony">
            <h3>{{ message }}</h3>
        </div>
    </div>
</template>

<script setup>
    import {useMainStore} from "@/store/mainStore"
    const store = useMainStore()
    const props = defineProps(["image", "name", "message"])
</script>

<style scoped>
    .popup{
        width:100%;
        height:100px;
        background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url("@/assets/images/magnet.jpg");
        background-size:cover;
        background-position: center;
        border-radius: 20px;
        color:var(--dark);
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding:10px;
    }
    .clientname{
        width:100%;
        display:flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
    }
    .div1{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:10px;
        /* border:2px solid black; */
    }
    .div1 img{
        width:50px;
        height:50px;
        border-radius: 50%;
        object-fit: cover;
    }
    .div1 h2{
        color:var(--blue);
    }
    .close{
        display:flex;
        align-items:center;
        justify-content: center;
    }
    .close i{
        color: var(--red);
        margin-right: 5px;
        cursor:pointer;
    }
    .testimony{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .testimony h3{
        font-size:18px;
        color:var(--light-dark);
        font-weight: 800;
    }
</style>