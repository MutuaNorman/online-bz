<template>
    <div class="mentorship-view">
        <div class="title">
            <h2>Our Mentorship Programme</h2>
            <p>Our mentorship program provides an opportunity for a mentee to learn from and collaborate with an experienced mentor. The mentor will provide guidance, support and feedback in order to help the mentee to develop their skills and knowledge. The mentor will also share their experience and expertise in order to help the mentee to reach their goals. Good luck as you gain your skills of becoming a marketing guru.</p>
        </div>
        <div class="levels">
            <h3>Levels</h3>
            <p>our Mentorship programme has three levels that eventually make you a networking pro. Every level has audios to listen to, images and videos that will guide you perfectly.</p>
        </div>
        <div class="skills">
            <div class="beginbtn">
                <button
                @click="store.toggleSkill1" 
                 class="mentorbtn">Beginner Skills</button>
            </div>
            <div 
            class="beginnerskills" v-show="store.showSkill1">
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Introduction to Beginner Skills</i></p>
                    <audio controls>
                    <source src="@/assets/audios/introtobeginskills.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img1.jpg" controls>
                    <source src="@/assets/videos/vid1.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Truth About Network Marketing</i></p>
                    <audio controls>
                    <source src="@/assets/audios/truthnetwork.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img2.jpg"  controls>
                    <source src="@/assets/videos/vid2.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">What it takes to become a networking guru</i></p>
                    <audio controls>
                    <source src="@/assets/audios/becomingaguru.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img3.jpg"  controls>
                    <source src="@/assets/videos/vid3.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Growing your network part 1</i></p>
                    <audio controls>
                    <source src="@/assets/audios/growingnetpt1.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img4.jpg"  controls>
                    <source src="@/assets/videos/vid4.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Growing your network part 2</i></p>
                    <audio controls>
                    <source src="@/assets/audios/growingnetpt2.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img5.jpg"  controls>
                    <source src="@/assets/videos/vid5.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Growing your network part 3</i></p>
                    <audio controls>
                    <source src="@/assets/audios/growingnetpt3.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img1.jpg"  controls>
                    <source src="@/assets/videos/vid6.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Growing your network part 4</i></p>
                    <audio controls>
                    <source src="@/assets/audios/growingnetpt4.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img2.jpg"  controls>
                    <source src="@/assets/videos/vid7.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Step by step instructions on save for save</i></p>
                    <audio controls>
                    <source src="@/assets/audios/stepsonsaveforsave.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img3.jpg"  controls>
                    <source src="@/assets/videos/vid8.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">How to post</i></p>
                    <h3>10  POSTING  TECHNIQUES TO MAKE YOUR VIEWERS GLUED TO YOUR POSTS AND GET 60% RECRUITING RATE</h3>
                    <p style="color:green;text-align:center">
                        Firstly it's not about speed it's about patience  and consistency
                    </p>
                    <ol class="tips">
                        <li><i class="fa-solid fa-marker"></i>learn your audience needs  remember they are a cold market hawajui what networking is
                        Anza na posts talking about what networking is and it's benefits make sure you have 2 posts daily talking about it 1early morning first post ..2 early evening opening post (educative)</li>
                        <br/>
                        <li><i class="fa-solid fa-marker"></i>
                            Let your posts be inclusive (Kenyans ,Ugandans ,Tanzanians Malawianscomrades,Hustlers form four leavers) know  which type of people you have viewing you can't be posting sheng or pure English  to a Tanzania or Burundi market they understand pure swahili so ensure some of your posts directly target them
                        </li>                <br/>
                    <li><i class="fa-solid fa-marker"></i>
                        Awareness posts 
                        current affairs  high rise of cost of living, unemployment,campus graduates with no jobs....let your audience wake up to reality
                        *magazine photo  screenshots
                        *Awareness videos compilations 
                        over the current affairs 
                    </li> 
                <br/>
                <li><i class="fa-solid fa-marker"></i>
                    What do you do <br/>
                    📌Name of the platform<br/>
                    📌legitimacy<br/>
                    📌fees charged  per country
                </li>
                <br/>
                <li>
                    <h3><i class="fa-solid fa-marker"></i>Who benefited ( testimonials )</h3>
                    Get screenshots of people that started from zero and made a huge gain or bought something a phone ,laptop shoe or paid fees
                </li>
                <br/>
                <li>
                    <h3><i class="fa-solid fa-marker"></i>withdrawals</h3>
                    who is earning?
                    you need to post withdrawal screenshots of  others or even yours incase you make one this makes them build the trust in you

                </li>
                <br/>
                <li>
                    <h3><i class="fa-solid fa-marker"></i>Give aways</h3>
                    After making a huge withdrawal engage your viewers in simple quizes concerning what you post and give them airtike rewards and repost it  this will draw massive attention to you
                </li>
                <br/>
                <li>
                    
                    <h3><i class="fa-solid fa-marker"></i>Progress</h3>
                    post your progress (only if you have started earning preferably ksh2500 + balance)

                    This will create a sense of want from your audience and even those who tried and failed could be motivated by your progress and start working with you and join you

                </li>
                <br/>
                <li><i class="fa-solid fa-marker"></i>
                    post ' controversial" memes or funny videos or even music videos  in the middle of the  posts this is to keep  your audience well balanced bcoz  they will be getting latest content from you and that will keep them glued to your status updates no matter how many posts you do
                </li>
                <br/>
                <li><i class="fa-solid fa-marker"></i>
                    View atleast  10  differnt posts every  evening and reply to their statuses even if it's "🤣🤣🤣🖐️"
                    this will show them that you interact with them and they will also start viewing your content  and interacting with it   this will make them used and accustomed to you and thus recruiting them will never be tough💯💯💯
                </li>
                <br/>
                <p>
                    Finally put everything on repeat 🔁 it doesn't matter what your dashboard says 🚫🖐️just put these skills on repeat  together with consistent ✅saves strategy ...YOU CANT MISS 2 -5 RECRUITS PER DAY
                </p>
                </ol>
                    <audio controls>
                    <source src="@/assets/audios/howtopost.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img4.jpg"  controls>
                    <source src="@/assets/videos/vid9.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Your Mindset</i></p>
                    <audio controls>
                    <source src="@/assets/audios/mindset.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img5.jpg"  controls>
                    <source src="@/assets/videos/vid9.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="intermediatebtn">
                <button
                @click="store.toggleSkill2" 
                class="mentorbtn">Intermediate Skills</button>
            </div>
            <div class="intermediateskills" v-show="store.showSkill2">
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Introduction to Intermediate Skills</i></p>
                    <audio controls>
                    <source src="@/assets/audios/introtointermediateskills.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img1.jpg"  controls>
                    <source src="@/assets/videos/vid10.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">How to handle a client</i></p>
                    <audio controls>
                    <source src="@/assets/audios/handlingclient.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img2.jpg"  controls>
                    <source src="@/assets/videos/vid11.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">How to handle a ojections</i></p>
                    <audio controls>
                    <source src="@/assets/audios/handlingobjections.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img3.jpg"  controls>
                    <source src="@/assets/videos/vid12.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">How to handle Objections Part 2</i></p>
                    <audio controls>
                    <source src="@/assets/audios/handlingobjectionspt2.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img4.jpg"  controls>
                    <source src="@/assets/videos/vid13.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Trusting the process</i></p>
                    <audio controls>
                    <source src="@/assets/audios/trustingtheprocess.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img5.jpg"  controls>
                    <source src="@/assets/videos/vid14.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Consistency</i></p>
                    <audio controls>
                    <source src="@/assets/audios/consistency.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img1.jpg"  controls>
                    <source src="@/assets/videos/vid15.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Discipline</i></p>
                    <audio controls>
                    <source src="@/assets/audios/discipline.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img2.jpg"  controls>
                    <source src="@/assets/videos/vid1.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div class="intro">
                    <p style="letter-spacing: 2px;"><i class="fa-solid fa-circle-check">Intermediate Final</i></p>
                    <audio controls>
                    <source src="@/assets/audios/intermediatefinal.mp3" >
                    Your browser does not support the audio element.
                    </audio>
                    <video width="320" height="240" poster="@/assets/images/img3.jpg"  controls>
                    <source src="@/assets/videos/vid2.mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="advancedbtn">
                <button
                @click="store.toggleSkill3" 
                class="mentorbtn">Advanced Skills</button>
            </div>
            <div class="advancedkills" v-show="store.showSkill3">
                <h2 align="center">Loading....</h2>
            </div>
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
    import {useMentorStore} from "@/store/mentorStore"

    const store = useMentorStore()
</script>

<style scoped>
    .mentorship-view{
        width:100%;
        height: auto;
        padding:75px 5px 20px 5px;
    }
    .title{
        width:100%;
        margin-bottom: 20px;
        /* text-align: center; */
    }
    .title h2{
        color:var(--red);
        font-size: 30px;
        text-align: center;
    }
    .title p{
        font-size: 18px;
    }
    .levels{
        width:100%;
    }
    .levels h3{
        color:var(--red);
        text-align: center;
        font-size: 25px;
    }
    .levels p{
        font-size: 18px;
        /* text-align: center; */
    }
    .skills{
        width:100%;
    }
    .beginbtn, .intermediatebtn, .advancedbtn{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:20px;
    }
    .mentorbtn{
        width:80%;
        height:30px;
        border-radius: 20px;
        background-color: green;
        color:white;
        font-size: 18px;
        cursor: pointer;
        transition:all 150ms ease-in-out;
    }
    .mentorbtn:hover{
        background-color: var(--red);
    }
    .beginnerskills{
        width:100%;
        height: auto;
        margin-bottom: 20px;
    }
    .intro{
        margin-top: 20px;
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap:10px;
    }
    .intro p{
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        gap:10px;
        color:red;
        font-size: 18px;
    }
    .intro p i{
        color: green;
    }
    .intro audio{
        width:70%;
    }
    .intro video{
        width: 500px;
    }
    .tips{
        width:100%;
        padding: 0 20px;
    }
    .tips li{
        list-style: lower-roman;
    }
</style>