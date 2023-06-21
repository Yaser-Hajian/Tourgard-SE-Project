import Home from '../pages/Home'
import TransferDetail from '../pages/TransferDetail'
import Payment from '../pages/Payment'
import Page404 from '../pages/404'
import OrderDetails from '../pages/OrderDetails'
import Login from '../pages/Login'

export const route =[
    { path: "/", component: <Home /> },
    { path: "/transfer-detail", component: <TransferDetail /> },
    { path: "/payment", component: <Payment /> },
    { path: "/order-details", component: <OrderDetails /> },
    { path: "/login", component: <Login /> },
    { path: "*", component: <Page404 /> },

]