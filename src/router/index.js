import Vue from 'vue'
import Router from 'vue-router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from '@/components/HelloWorld'
import Joylive from '@/components/Joylive'
import Cloudmanagement from '@/components/Cloudmanagement'
import Subrepair from '@/components/Subrepair'
import RepairContent from '@/components/RepairContent'
import RepairRecords from '@/components/RepairRecords'
import MaintenanceAid from '@/components/MaintenanceAid'
import Joylivebefore from '@/components/Joylivebefore'
import Message from '@/components/Message'
import Login from '@/components/PointsMall/Login'
import MainContent from '@/components/PointsMall/MainContent'
import Footers from '@/components/PointsMall/Footers'
import WorkDetails from '@/components/PointsMall/WorkDetails'
import WorkDetailss from '@/components/PointsMall/WorkDetailss'
import Evaluate from '@/components/PointsMall/Evaluate'
import My from '@/components/PointsMall/My'
import Myads from '@/components/PointsMall/Myads'
import Newads from '@/components/PointsMall/Newads'
import Editads from '@/components/PointsMall/Editads'
import Mycash from '@/components/PointsMall/Mycash'
import Mypoints from '@/components/PointsMall/Mypoints'
import Mall from '@/components/PointsMall/Mall'
import Goodsdetail from '@/components/PointsMall/Goodsdetail'





Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/joylive',
      name: 'Joylive',
      component: Joylive
    },
    {
      path: '/cloudmanagement',
      name: 'Cloudmanagement',
      component: Cloudmanagement
    },
    {
      path: '/subrepair',
      name: 'Subrepair',
      component: Subrepair
    },
    {
      path: '/repaircontent',
      name: 'RepairContent',
      component: RepairContent
    },
    {
      path: '/repairrecords',
      name: 'RepairRecords',
      component: RepairRecords
    },
    {
      path: '/maintenanceAid',
      name: 'MaintenanceAid',
      component: MaintenanceAid
    },
    {
      path: '/joylivebefore',
      name: 'Joylivebefore',
      component: Joylivebefore
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/footers',
      name: 'Footers',
      component:Footers
    },
    {
      path: '/maincontent',
      name: 'MainContent',
      component: MainContent,
    },
    {
      path: '/workdetails',
      name: 'WorkDetails',
      component: WorkDetails,
    },
    {
      path: '/workdetailss',
      name: 'WorkDetailss',
      component: WorkDetailss,
    },
    {
      path: '/evaluate',
      name: 'Evaluate',
      component: Evaluate,
    },
    {
      path: '/my',
      name: 'My',
      component: My,
    },
    {
      path: '/myads',
      name: 'Myads',
      component: Myads,
    },
    {
      path: '/newads',
      name: 'Newads',
      component: Newads,
    },
    {
      path: '/mycash',
      name: 'Mycash',
      component: Mycash,
    },
    {
      path: '/mypoints',
      name: 'Mypoints',
      component: Mypoints,
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall,
    },
    {
      path: '/goodsdetail',
      name: 'Goodsdetail',
      component:Goodsdetail,
    },
    {
      path: '/editads',
      name: 'Editads',
      component: Editads,
    },


  ]
})
