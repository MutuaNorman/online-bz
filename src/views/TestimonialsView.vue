<template>
    <div class="testimonials-view">
        <div class="info">
            <h2>Testimonials</h2>
            <p>Our Team members are earning handsomely out of our Online Business. See testimonials from some of our colleagues.</p>
        </div>
        <div>
            <transition-group name="fade" tag="div">
                <div class="imgcont" v-for="i in [store.currentIndex]" :key="i">
                    <img class="currImg" :src="store.currentImg" />
                </div>
            </transition-group>
            <a class="prev" @click="store.prev" href="#">&#10094; Previous</a>
            <a class="next" @click="store.next" href="#">&#10095; Next</a>
        </div>
        <div class="video">
            <video class="vid" controls poster="@/assets/images/magnet.jpg">
                <source src="@/assets/images/vid.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="connect">
            <p style="text-align:center">Connect with an Experienced Mentor to start earning Today</p>
            <p class="btn"><i class="fa-brands fa-whatsapp"></i><a href="https://wa.link/89a234">WhatsApp</a></p>
        </div>
        <div class="link">
            <p>Thanks for coming upto this point. Now you can click, register, activate and send a screenshot to your mentor via whatsapp link above</p>
            <p class="btn2">
                <a href="https://goldhela.com/register.php?ref=Blake254">Start Earning</a>
            </p>
        </div>
    </div>
</template>

<script setup>
    import {useImageStore} from "@/store/imageStore"

    const store = useImageStore()
</script>

<style scoped>
    .testimonials-view{
        width:100%;
        padding: 75px 5px 20px 5px;
        height:auto;
    }
    .info{
        width:100%;
        margin-bottom: 20px;
        padding: 0 10px;
    }
    .info h2{
        color: var(--red);
        font-size: 30px;
        text-align: center;
    }
    .info p{
        font-size:20px;
        /* text-align: center; */
        letter-spacing: 2px;
    }
    .video{
        width:100%;
        height: 400px;
        padding:15px;
        margin-top: 20px;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .vid{
        width:80%;
        height:100%;
        display:inline-block
    }
    .imgcont{
        width:100%;
        display:flex;
        justify-content: center;
    }
    .currImg{
        width: 80%;
        height: 400px;
        object-fit: cover;
    }
    .fade-enter-active,
    .fade-leave-active {
    transition: all 0.9s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width:100%;
    opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
    visibility: hidden;
    width:100%;
    opacity: 0;
    }

    img {
    height:600px;
    width:100%
    }

    .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
    }

    .next {
    right: 0;
    }

    .prev {
    left: 0;
    }

    .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.9);
    }
</style>