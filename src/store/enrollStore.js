import {defineStore} from "pinia"
import {ref, onMounted} from "vue"

export const useEnrollStore = defineStore("enrollStore", ()=>{
    const q1 = ref(true)
    const q2 = ref(false)
    const q3 = ref(false)
    const q4 = ref(false)
    const q5 = ref(false)
    const q6 = ref(false)
    const q7 = ref(false)
    const q8 = ref(false)
    const q9 = ref(false)
    const q10 = ref(false)
    const q11 = ref(false)
    const q12 = ref(false)
    const q13 = ref(false)
    const q14 = ref(false)
    const q15 = ref(false)

    const addFocus = ref("")

    onMounted(()=>{
        addFocus.value.focus
    }) 
    function fn1(){
        q1.value = !q1.value
        q2.value = !q2.value
    }

    function fn2(){
        q2.value = !q2.value
        q3.value = !q3.value
    }

    function fn3(){
        q3.value = !q3.value
        q4.value = !q4.value
    }

    function fn4(){
        q2.value = !q2.value
        q5.value = !q5.value
    }

    function fn5(){
        q5.value = !q5.value
        q6.value = !q6.value
    }

    function fn6(){
        q1.value = !q1.value
        q7.value = !q7.value
    }

    function fn7(){
        q7.value = !q7.value
        q8.value = !q8.value
    }

    function fn8(){
        q8.value = !q8.value
        q9.value = !q9.value
    }

    function fn9(){
        q9.value = !q9.value
        q10.value = !q10.value
    }

    function fn10(){
        q10.value = !q10.value
        q11.value = !q11.value
    }

    function fn11(){
        q10.value = !q10.value
        q12.value = !q12.value
    }

    function fn12(){
        q9.value = !q9.value
        q13.value = !q13.value
    }
    function fn13(){
        q13.value = !q13.value
        q14.value = !q14.value
    }

    function fn14(){
        q13.value = !q13.value
        q15.value = !q15.value
    }

    return{ q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, fn1, fn2, fn3, fn4, fn5, fn6, fn7, fn8, fn9, fn10, fn11, fn12, fn13, fn14, addFocus}
})


