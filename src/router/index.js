import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/Layout';
import Home from '@/views/Home';
import Search from '@/views/Search';
import Play from '@/views/Play';
import Comment from "@/views/Comment";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        // 重定向到一级后马上重定向到二级
        path: '/layout',
        redirect: '/layout/home',
        component: Layout,
        children: [
            {
                path: 'home',
                component: Home,
                meta: {  //元信息-给当前路由对象绑定值
                    title: '首页'
                }
            },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: '搜索'
                }
            }
        ]

    },
    {
        path: '/play',
        component: Play
    },
    {
        path: '/comment',
        component: Comment
    }
]

const router = new VueRouter({ routes })

export default router