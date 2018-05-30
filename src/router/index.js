import Vue from 'vue'
import Router from 'vue-router'
import CompOne from '@/components/CompOne'
import login from '@/components/login'


Vue.use(Router)


export default new Router(
    
    {
        routes: [
            {
                path: '/',
                name: 'login',
                component: login
            },
            {
                path: '/comp-one',
                name: 'comp-one',
                component: CompOne,
                beforeEnter: (to, from, next) => {                    
                    console.log("Redirecting");
                    next();
                }
            }
        ]
    }
)