

import Login from './views/user/Login.vue'
import Join from './views/user/Join.vue'
import FindPassword from './views/user/FindPassword.vue'
import ChangePassword from './views/user/ChangePassword.vue'
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
        path : '/user/ChangePassword',
        name : 'ChangePassword',
        component : ChangePassword
    },
    {
        path : '/components',
        name : 'Components',
        component : Components
    }
]
