import Listcontract from './components/listcontract/Listcontract.vue';
import Home from './components/home/Home.vue';

export const routes = [
	{ path: '', component: Home, titulo: 'Home'},
	{ path: '/contratos-assinados', component: Listcontract, titulo: 'Contratos assinados'}
];