

import Login from './views/user/Login.vue'
import Join from './views/user/Join.vue'
import FindPassword from './views/user/FindPassword.vue'
import Components from './views/Components.vue'

export default [


    {
        path : '/',
        name : 'Login',
        component : Login
    },
    {
        path : '/user/join',
        name : 'Join',
        component : Join
    },
    {
        path : '/user/FindPassword',
        name : 'FindPassword',
        component : FindPassword
    },
    {
        path : '/components',
        name : 'Components',
        component : Components
    }
]
