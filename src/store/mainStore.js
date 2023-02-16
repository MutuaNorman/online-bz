import {defineStore} from "pinia"
import {ref} from "vue"
import Hale from "@/assets/images/Hale.jpg"
import Oswin from "@/assets/images/Oswin.jpg"
import Araminta from "@/assets/images/Araminta.jpg"

export const useMainStore = defineStore("main", () => {
    const navState = ref(false)

    const showPopup = ref(false)

    const img1 = ref(Araminta)

    const img2 = ref(Hale)

    const img3 = ref(Oswin)

    const displayPopup = setTimeout(() => {
        showPopup.value = !showPopup.value
    }, 3000);

    function closePopup(){
        showPopup.value = !showPopup.value
        
    }

    function showNav(){
        navState.value = !navState.value
    }

    function hideNav(){
        navState.value = !navState.value
    }
    return{navState, showNav, hideNav, showPopup, displayPopup, closePopup, img1, img2, img3}
})