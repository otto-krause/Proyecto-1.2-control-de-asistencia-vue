import home from '../components/Home.vue'
import tomarLista from '../components/TomarLista.vue'
import verAsistencia from '../components/VerAsistencia.vue'


const routes = [
    {
        path:'/',
        component:home
    },
    {
        path:'/TomarLista',
        component:tomarLista
    },
    {
        path: '/VerAsistencia',
        component:verAsistencia
    }
];

export default routes;