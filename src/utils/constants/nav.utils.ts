export const visitorRoutes = [
	{
		id: 'visitor-explore',
		name: 'explore',
		href: '/',
		pattern: null,
		src: '/static/icons/explore.png',
		text: 'Explorer',
	},
	{
		id: 'visitor-bookmarks',
		name: 'bookmarks',
		href: '/bookmarks',
		pattern: null,
		src: '/static/icons/bookmark.png',
		text: 'Favoris',
	},
	{
		id: 'visitor-inventory',
		name: 'inventory',
		href: '/inventory',
		pattern: null,
		src: '/static/icons/shopping-list.png',
		text: 'Inventaire',
	},
	{
		id: 'visitor-login',
		name: 'login',
		href: '/auth/login',
		pattern: /auth/g,
		src: '/static/icons/user.png',
		text: 'Connexion',
	},
];

export const userRoutes = [
	{
		id: 'user-explore',
		name: 'explore',
		href: '/',
		pattern: null,
		src: '/static/icons/explore.png',
		text: 'Explorer',
	},
	{
		id: 'user-bookmarks',
		name: 'bookmarks',
		href: '/bookmarks',
		pattern: null,
		src: '/static/icons/bookmark.png',
		text: 'Favoris',
	},
	{
		id: 'user-inventory',
		name: 'inventory',
		href: '/inventory',
		pattern: null,
		src: '/static/icons/shopping-list.png',
		text: 'Inventaire',
	},
	{
		id: 'user-profile',
		name: 'profile',
		href: '/user/profile',
		pattern: null,
		src: '/static/icons/user.png',
		text: 'Profil',
	},
];
