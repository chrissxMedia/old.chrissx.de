caches.open('chrissx.ga').then(function(cache) {
	cache.delete('/');
	cache.delete('/index.html');
	cache.delete('/style/dark.css');
	cache.delete('/manifest.json');
	cache.delete('/favicon.ico');
	cache.delete('/logo/4000.png');
	cache.delete('/logo/4096.png');
	cache.delete('/logo/256.ico');
	cache.delete('/logo/256t.ico');
	cache.delete('/sw_init.js');
	cache.delete('/index.js');
	navigator.serviceWorker.getRegistrations().then(
		function(registrations) {
			for(let registration of registrations) {
				registration.unregister();
			}
		}
	);
	console.log("ERASED THAT CACHE!");
});
