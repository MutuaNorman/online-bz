<template>
    <div class="home-view">
        <div class="description">
            <h2>The Money Makers Empire</h2>
            <p>The legitimate online business of all ages!</p>
        </div>
        <div class="message-popup" v-show="store.showPopup">
            <ThePopUp name="McDaniel Gregory" image="store.img1" message="I think guys am a money magnet i made Ksh.3000 just this morning!!"/>
        </div>
        <div class="learn">
            <h2>Earn Learning!!</h2>
            <p>Making money online has one of the biggest adavantages that you don't have to get tired doing overwhelming tasks that leave you seriously exhausted.Money makers Empire have literally made making money easy. We teach newbies to make money online untill they become successfull pros. If a 16-year old is earnig $50,000 a week anyone could.</p>
        </div>
        <div class="message-popup" v-show="store.showPopup">
            <ThePopUp name="McDaniel Gregory" :image="store.img2"  message="I think guys am a money magnet i made Ksh.3000  just this morning!!" />
        </div>
        <div class="learn">
            <h2>Have a supportive Mentor</h2>
            <p>A mentor is a <span>selfless</span> person who is willing to help you achieve the best by guiding you through the beginning to seen you be successful like them. We are willing to guide you through your journey and give you the best tactics ever.</p>
        </div>
        <div class="message-popup" v-show="store.showPopup">
            <ThePopUp name="McDaniel Gregory" :image="store.img3" message="I think guys am a money magnet i made Ksh.3000  just this morning!!"/>
        </div>
        <div class="connect">
            <p>Connect with an Experienced Mentor to start earning Today</p>
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
    import ThePopUp from '@/components/ThePopUp.vue';
    import { useMainStore} from "@/store/mainStore"
    

    const store = useMainStore()

    store.displayPopup
</script>

<style scoped>
    .home-view{
        width:100%;
        height:auto;
        padding: 0 5px;
        padding-bottom: 20px;
        /* position: relative; */
    }
    .message-popup{
        margin-top: 20px;
    }
    .description{
        /* margin: 0px auto; */
        text-align: center;
        padding-top:75px;
    }
    .description h2{
        font-size: 27px;
        color:var(--red);
    }
    .description p{
        letter-spacing: 2px;
        font-size:20px;
    }
    .learn{
        margin-top: 20px;
    }
    .learn h2{
        color:var(--red);
    }
    .learn p{
        font-size:18px;
        letter-spacing: 2px;
    }
    
</style>