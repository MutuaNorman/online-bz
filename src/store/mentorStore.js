import {defineStore} from "pinia"
import {ref} from "vue"



export const useMentorStore = defineStore("mentorStore", ()=>{
     
    const showSkill1 = ref(false)

    const showSkill2 = ref(false)

    const showSkill3 = ref(false)

    function toggleSkill1(){
        showSkill1.value = !showSkill1.value
    }

    function toggleSkill2(){
        showSkill2.value = !showSkill2.value
    }

    function toggleSkill3(){
        showSkill3.value = !showSkill3.value
    }

    return{ showSkill1, showSkill2, showSkill3, toggleSkill1, toggleSkill2, toggleSkill3 }
})