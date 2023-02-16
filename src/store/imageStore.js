import {defineStore} from "pinia"
import {ref, onMounted, computed} from "vue"
import test1 from "@/assets/images/test1.jpeg"
import test2 from "@/assets/images/test2.jpeg"
import test3 from "@/assets/images/test3.jpeg"
import test4 from "@/assets/images/test4.jpeg"
import test5 from "@/assets/images/test5.jpeg"
import test6 from "@/assets/images/test6.jpeg"
// import test1 from "@/assets/images/test1.jpg"

export const useImageStore = defineStore("imageStore", ()=>{
    const images = ref([test1, test2, test3, test4, test5, test6])
    const timer = ref(null)
    const currentIndex = ref(0)

    const starting = onMounted(()=>{
        startSlide()
    })

    function startSlide(){
        timer.value = setInterval(next, 4000)
    }

    function next(){
        currentIndex.value += 1
    }

    function prev(){
        currentIndex.value -= 1
    }

    const currentImg = computed(()=>{
        return images.value[Math.abs(currentIndex.value) % images.value.length]
    })

    return{images, timer, currentIndex, starting, startSlide, next, prev, currentImg }
})