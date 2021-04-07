import Mainlayout from "./layout/mainLayout";
import Layout2 from "./layout/layout2";
import Home from './page/home';
import Contact from './page/Contact';
import Course from './page/khoahoc';
import Course_detail from "./page/course_detail";
import Paypage from './page/paypage';
import Team from './page/team';
import Profile from './page/profile';
import Register from "./page/register";
import Email from "./page/email";
import Project from "./page/project";
import Info from './page/profile/components/info';
import MyCourse from './page/profile/components//myCourse'
import MyProject from './page/profile/components/myProject'
import HistoryPayment from './page/profile/components/historyPayment'
import Coins from './page/profile/components/coins';

import Page404 from './page/page404'
// import Demo from "./page/demo";
const routers = [
    {
        path: '/abc',
        component: Layout2,
        routers: [
            {
                path: '/abc/team',
                component: Team,
            }
        ]
    },
    {
        path: '/email',
        component: Email,
    },

    {
        path: '/',
        component: Mainlayout,
        routers: [

            {
                path: '/contact',
                component: Contact
            },
            {
                path: '/courses',
                component: Course,
            },
            {
                path: '/course/:slug',
                component: Course_detail,
            },
            {
                path: '/paypage',
                component: Paypage,
            },
            {
                path: '/team',
                component: Team,
            },
            {
                path: '/thong-tin-ca-nhan',
                component: Profile,
                auth:true,
                routers: [
                    {
                        path: '/course',
                        component: MyCourse,
                    },
                    {
                        path: '/project',
                        component: MyProject
                    },
                    {
                        path: '/payment',
                        component: HistoryPayment
                    },
                    {
                        path: '/Coins',
                        component: Coins
                    },
                    {
                        path: '/',
                        component: Info,
                        exact: true
                    }
                ]
            },
            {
                path: '/register/:slug',
                component: Register,
            },
            {
                path: '/project',
                component: Project,
            },

            {
                path: '/',
                component: Home,
                exact: true
            },
            {
            
                component: Page404
            }


        ]
    }

]
export default routers;