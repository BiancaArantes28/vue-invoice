import Listcontract from './components/listcontract/Listcontract.vue';
import Asn from './components/asn/Asn.vue'
import Home from './components/home/Home.vue';
import Contrato from './components/contrato/Contrato.vue';
import Teste from './components/teste/Teste.vue';

export const routes = [
	{ path: '', component: Home, titulo: 'Home'},
	{ path: '/choose-asn', component: Asn, titulo: 'Asn '},
	{ path: '/contratos-assinados', component: Listcontract, titulo: 'Contratos assinados' },
	{ path: '/contratos-assinados/:asn', component: Teste, titulo: 'Teste', name: 'teste' }
];