
import BerandaPage from '../pages/beranda.f7.html';
import KesalahanPage from '../pages/umum/kesalahan.f7.html';

var routes = [
{
	path: '/',
	component: BerandaPage,
},
{
	path: '(.*)',
	component: KesalahanPage,
},
];

export default routes;