/**
 * Created by wangxin on 2017/3/7.
 */

import base from "../../entry/entry-base";

var routerMap = [
    {
        path:"/",
        component:require("./index.vue")
    },
    {
        path:"/index",
        component:require("./index.vue"),
        children:[
            { path: '/index/login', component: require("./detail.vue")},
            { path: '/index/reg', component: require("./detail.vue")}
        ]
    },
    {
        path:"/detail/:id",
        component:require("./detail.vue"),
    },
    {
        path:"/update/:id",
        component:require("./update.vue")
    }
];

base.start(routerMap);

