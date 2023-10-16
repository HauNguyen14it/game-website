import IRoute from '../interfaces/IRoute'
import Categories from '../pages/categories'
import HomePage from '../pages/home'

const routes : IRoute[] = [
    {
        path : '/',
        name: 'Home',
        component: <HomePage />,
        exact: true
    },
    {
        path : '/categories/:id',
        name: 'categories',
        component: <Categories />,
        exact: true
    },
]

export default routes
