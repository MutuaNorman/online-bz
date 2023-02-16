import { createWebHistory, createRouter } from "vue-router"
import HomeView from "@/views/HomeView.vue"
const routes = [
    {
        path:"/",
        name:"home",
        component: HomeView
    },
    {
        path: "/enroll",
        name:"enroll",
        component:()=>import("@/views/EnrollView.vue")
    },
    {
        path: "/testimonials",
        name:"testimonials",
        component:()=>import("@/views/TestimonialsView.vue")
    },
    {
        path:"/mentorship",
        name: "mentorship",
        component: ()=>import("@/views/MentorshipView.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active-link"
})

export default router