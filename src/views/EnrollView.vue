<template>
    <div class="enroll-view">
        <div class="enroll">
            <h2>Enroll</h2>
            <p>We will take you through a questionnaire so as to access your level of experience with online business, if you are not experienced its okay. We will recruit you.Please give us truthy information.</p>
        </div>
        <div class="questions">
            <div class="question" v-show="store.q1">
                <h3>Have you ever tried networking before?</h3>
                <div class="buttons">
                    <button @click="store.fn1">Yes</button>
                    <button @click="store.fn6">No</button>
                </div>
            </div>
            <div class="question" v-show="store.q2">
                <h3>Wow! Thats great to hear. How was your experience?</h3>
                <div class="buttons">
                    <button @click="store.fn2">Good</button>
                    <button @click="store.fn4">Bad</button>
                </div>
            </div>
            <div class="question" v-show="store.q3">
                <h3>How much would you like to earn?</h3>
                <div class="input-cont">
                    <form @submit.prevent="store.fn3" action="">
                        <input ref="store.addFocus" type="text" placeholder="Enter Amount" required>
                        <button class="formbtn">Submit</button>
                    </form>
                </div>
            </div>
            <div class="question" v-show="store.q4">
                <h3>I would really love to get in touch with you, kindly tap the link below. Lets connect more on whatsapp</h3>
                <p class="btn"><i class="fa-brands fa-whatsapp"></i><a href="https://wa.link/89a234">WhatsApp</a></p>
            </div>
            <div class="question" v-show="store.q5">
                <h3>I understand and my heart goes to you. So did you earn and withdraw?</h3>
                <div class="buttons">
                    <button @click="store.fn5">Yes</button>
                    <button @click="store.fn5">No</button>
                </div>
            </div>
            <div class="question" v-show="store.q6">
                <h3>I would like to get to know more about your experience and help where possible. Kindly tap the link below and lets connects</h3>
                <p class="btn"><i class="fa-brands fa-whatsapp"></i><a href="https://wa.link/89a234">WhatsApp</a></p>
            </div>
            <div class="question" v-show="store.q7">
                <h3>If incase you start today how much would you expect to earn within a month?</h3>
                <div class="input-cont">
                    <form @submit.prevent="store.fn7" action="">
                        <input type="text" 
                        ref="store.addFocus"
                        placeholder="Enter Amount" required>
                        <button class="formbtn">Submit</button>
                    </form>
                </div>
            </div>
            <div class="question" v-show="store.q8">
                <h3>How much time would you like to spare per day inorder to achieve your desired amount?</h3>
                <div class="input-cont">
                    <form @submit.prevent="store.fn8" action="">
                        <input type="text"
                        ref="store.addFocus"
                         placeholder="Enter time in hours" required>
                        <button class="formbtn">Submit</button>
                    </form>
                </div>
            </div>
            <div class="question" v-show="store.q9">
                <h3>If you were shown how to make your desired amount working at your desired time would you consider taking the next step?</h3>
                <div class="buttons">
                    <button @click="store.fn12">Yes</button>
                    <button @click="store.fn9">No</button>
                </div>
            </div>
            <div class="question" v-show="store.q10">
                <h3>We completely understand the fears and questions you might be having. Would you care to talk to a preffessional mentor to help</h3>
                <div class="buttons">
                    <button @click="store.fn10">Yes</button>
                    <button @click="store.fn11">No</button>
                </div>
            </div>
            <div class="question" v-show="store.q11">
                <h3>Kindly tap the link below to connect with a mentor</h3>
                <p class="btn"><i class="fa-brands fa-whatsapp"></i><a href="https://wa.link/89a234">WhatsApp</a></p>
            </div>
            <div class="question" v-show="store.q12">
                <h3>Kindly tap the link below to to stay connected we understand you have valid reasons i hope you won't mind tapping the link below for sharing whatsapp contacts and getting updates and follow up</h3>
                <p class="btn"><i class="fa-brands fa-whatsapp"></i><a href="https://wa.link/89a234">WhatsApp</a></p>
            </div>
            <div class="question" v-show="store.q13">
                <h3 style="color:var(--red)">Kindly beware of these before activating your account.</h3>
                <ol>
                    <li><i class="fa-solid fa-circle-check"></i> You have to let your ego go and grind like a drop out.</li>
                    <li><i class="fa-solid fa-circle-check"></i> For you to make money you have to put in the efforts.</li>
                    <li><i class="fa-solid fa-circle-check"></i> You have to be self-drive no one will push you to work.</li>
                    <li><i class="fa-solid fa-circle-check"></i> You should have a clear understanding and reason why you want to do this.</li>
                    <li><i class="fa-solid fa-circle-check"></i> Be patient for you to make big money you dream of, it wont come to you as fast as you think. Money comes to the patient.</li>
                </ol>
                <p>With this information are you ready to give networking a short in the right way?</p>
                <div class="buttons">
                    <button @click="store.fn13">Yes</button>
                    <button @click="store.fn14">No</button>
                </div>
            </div>
            <div class="question" v-show="store.q14">
                <h3>Thanks for coming upto this point. Now you can click, register, activate and send a screenshot to your mentor via whatsapp link above</h3>
                <p class="btn2" style="margin:0 auto
                ">
                <a href="https://goldhela.com/register.php?ref=Blake254">Start Earning</a>
            </p>
            </div>
            <div class="question" v-show="store.q15">
                <h3>I would love to hear your fears and connect to you. Tap the whatsapp link below and lets connect.</h3>
                <p class="btn"><i class="fa-brands fa-whatsapp"></i><a href="https://wa.link/89a234">WhatsApp</a></p>
            </div>
        </div>
        <div class="pic">
            <img src="@/assets/images/money.jpg" alt="">
        </div>
    </div>
</template>

<script setup>
    import {useEnrollStore} from "@/store/enrollStore"

    const store = useEnrollStore()

    
</script>

<style scoped>
    .enroll-view{
        width:100%;
        height:auto;
        padding: 75px 5px 20px 5px;
    }
    .enroll{
        width:100%;
        margin-bottom: 20px;
    }
    .enroll h2{
        font-size:27px;
        color:var(--red);
        text-align: center;
    }
    .enroll p{
        font-size:18px;
        letter-spacing: 2px;
    }
    .pic{
        width:100%;
        height:400px;
        margin: 20px auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pic img{
        width:80%;
        height:100%;
        object-fit: cover;
        border-radius: 20px;
        cursor:pointer;
        transition: all 150ms ease-in-out;
    }
    .pic img:hover{
        border:2px solid var(--white)
    }
    .questions h3{
        margin-bottom: 10px;
        font-size: 22px;
        text-align: center;
    }
    .question ol li{
        font-size: 18px;
        margin-bottom: 10px;
    }
    .fa-circle-check{
        color:green;
        font-size: 18px;
    }
    .buttons{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:30px;
    }
    .buttons button{
        width:45%;
        height:30px;
        border-radius: 5px;
        margin-top: 10px;
        background-color: green;
        color:var(--white);
        font-size: 18px;
        cursor: pointer;
        transition:all 150ms ease-in-out;
    }
    .buttons button:hover{
        background-color: var(--red);
    }
    .input-cont{
        width:100%;
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 10px;
    }
    .input-cont form{
        width:100%;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        gap:20px;
        /* border:2px solid white; */
    }
    .input-cont input{
        width:80%;
        margin: 0 auto;
        height: 30px;
        border-radius: 5px;
        padding: 5px 10px;
    }
    .formbtn{
        width:80%;
        margin: 0 auto;
        height:30px;
        background-color: green;
        border-radius: 5px;
        font-size: 18px;
        color: var(--white);
        cursor: pointer;
        transition:all 150ms ease-in-out;
    }
    .formbtn:hover{
        background-color: var(--red);
    }
</style>