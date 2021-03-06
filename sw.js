const workboxVersion = "4.3.1";
importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.min.js"), workbox.setConfig({
	modulePathPrefix: "https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/"
});
const cacheSuffixVersion = "1583492299385",
	precacheCacheName = workbox.core.cacheNames.precache,
	runtimeCacheName = workbox.core.cacheNames.runtime,
	maxEntries = 100;
workbox.core.setCacheNameDetails({
		prefix: "一只未成年的猫",
		suffix: "1583492299385"
	}), workbox.core.skipWaiting(), workbox.core.clientsClaim(), workbox.precaching.precacheAndRoute([
		"https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js",
		"https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js",
		"https://cdn.jsdelivr.net/npm/node-waves@0.7.6/src/js/waves.min.js",
		"https://cdn.jsdelivr.net/npm/headroom.js@0.11.0/dist/headroom.min.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/font/comic.min.css", "https://cdn.jsdelivr.net/gh/Tomotoes/js/log.min.js",
		"https://cdn.jsdelivr.net/npm/instant.page@3.0.0/instantpage.min.js",
		"https://cdn.jsdelivr.net/npm/firacode@1.205.0/distr/fira_code.min.css",
		"https://cdn.jsdelivr.net/npm/@jaames/iro/dist/iro.min.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/js/translate-ff7607fcb8.js",
		"https://cdn.jsdelivr.net/npm/firacode@2.0.0/distr/fira_code.min.css",
		"https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js",
		"https://cdn.jsdelivr.net/github-cards/latest/widget.js",
		"https://cdn.jsdelivr.net/npm/typeface-roboto@0.0.75/index.min.css"
	]), workbox.routing.registerRoute(/.*cdn\.jsdelivr\.net/, new workbox.strategies.CacheFirst({
		cacheName: "static-immutable-1583492299385",
		plugins: [new workbox.expiration.Plugin({
			maxAgeSeconds: 2592e3,
			purgeOnQuotaError: !0
		}), new workbox.cacheableResponse.Plugin({
			statuses: [0, 200]
		})]
	})), workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/font\/.*/, new workbox.strategies.CacheFirst({
		cacheName: "font-cache",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 100,
			maxAgeSeconds: 2592e3,
			purgeOnQuotaError: !0
		}), new workbox.cacheableResponse.Plugin({
			statuses: [0, 200]
		})]
	})), workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/css\/.*/, new workbox.strategies.CacheFirst({
		cacheName: "css-cache",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 100,
			maxAgeSeconds: 2592e3,
			purgeOnQuotaError: !0
		}), new workbox.cacheableResponse.Plugin({
			statuses: [0, 200]
		})]
	})), workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/js\/.*/, new workbox.strategies.CacheFirst({
		cacheName: "js-cache",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 100,
			maxAgeSeconds: 2592e3,
			purgeOnQuotaError: !0
		}), new workbox.cacheableResponse.Plugin({
			statuses: [0, 200]
		})]
	})), workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/cdn\/.*/, new workbox.strategies.CacheFirst({
		cacheName: "cdn-cache",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 100,
			maxAgeSeconds: 2592e3,
			purgeOnQuotaError: !0
		}), new workbox.cacheableResponse.Plugin({
			statuses: [0, 200]
		})]
	})), workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|cur|ico|icon)/, new workbox.strategies.StaleWhileRevalidate({
		cacheName: "image-cache-1583492299385",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 10,
			purgeOnQuotaError: !0
		})]
	})), workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/images\/.*/, new workbox.strategies.CacheFirst({
		cacheName: "image-cache",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 100,
			maxAgeSeconds: 2592e3,
			purgeOnQuotaError: !0
		}), new workbox.cacheableResponse.Plugin({
			statuses: [0, 200]
		})]
	})), workbox.routing.registerRoute(/^https:\/\/at.alicdn.com\/t\//, new workbox.strategies.CacheFirst({
		cacheName: "icon-cache",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 100,
			maxAgeSeconds: 2592e3,
			purgeOnQuotaError: !0
		}), new workbox.cacheableResponse.Plugin({
			statuses: [0, 200]
		})]
	})), workbox.routing.registerRoute(/.*\.(?:woff|woff2|eot|ttf|otf)/, new workbox.strategies.CacheFirst({
		cacheName: "font-cache-1583492299385",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 100,
			maxAgeSeconds: 2592e3,
			purgeOnQuotaError: !0
		}), new workbox.cacheableResponse.Plugin({
			statuses: [0, 200]
		})]
	})), workbox.routing.registerRoute(/.*\.(css|js)/, new workbox.strategies.StaleWhileRevalidate({
		cacheName: "source-cache-1583492299385",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 100,
			maxAgeSeconds: 604800,
			purgeOnQuotaError: !0
		})]
	})), workbox.routing.registerRoute(/^https:\/\/www.googletagmanager.com\/gtag/, new workbox.strategies.NetworkOnly),
	workbox.routing.registerRoute(new RegExp("^https://api.github.com/(.*)"), new workbox.strategies.NetworkOnly({
		plugins: [new workbox.backgroundSync.Plugin("githubAPI", {
			maxRetentionTime: 1440
		})]
	}), "POST"), workbox.routing.registerRoute(new RegExp("^https://api.github.com/graphql(.*)"), new workbox.strategies.NetworkOnly({
		plugins: [new workbox.backgroundSync.Plugin("graphqlAPI", {
			maxRetentionTime: 1440
		})]
	}), "POST"), workbox.routing.registerRoute(new RegExp(
		"^https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token(.*)"), new workbox.strategies.NetworkOnly({
		plugins: [new workbox.backgroundSync.Plugin("githubAuth", {
			maxRetentionTime: 1440
		})]
	}), "POST"), workbox.routing.registerRoute(new RegExp("^https://4tyocrqb.api.lncldglobal.com/(.*)"), new workbox.strategies
		.NetworkOnly({
			plugins: [new workbox.backgroundSync.Plugin("leanCloudAPI", {
				maxRetentionTime: 1440
			})]
		}), "PUT"), workbox.routing.registerRoute(new RegExp("/disqus/(.*).json(.*)"), new workbox.strategies.NetworkFirst({
		options: [{
			networkTimeoutSeconds: 3
		}]
	})), workbox.routing.registerRoute(new RegExp("^https://(.*)disqus.com"), new workbox.strategies.NetworkOnly), workbox
	.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com(.*)(png|jpg|jpeg|svg|gif)"), new workbox.strategies.StaleWhileRevalidate({
		cacheName: "disqus-img-cache1583492299385",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 100,
			maxAgeSeconds: 604800,
			purgeOnQuotaError: !0
		})]
	})), workbox.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com"), new workbox.strategies.StaleWhileRevalidate({
		cacheName: "disqus-cdn-cache1583492299385",
		plugins: [new workbox.expiration.Plugin({
			maxEntries: 10,
			purgeOnQuotaError: !0
		})]
	})), workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst({
		options: [{
			networkTimeoutSeconds: 3
		}]
	}));
const blogRevision = "1583114125281",
	aboutRevision = "1582713853162",
	home = ["https://cdn.jsdelivr.net/gh/Tomotoes/Tomotoes.github.io@853631aa3d5d2/css/style.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/Tomotoes.github.io@853631aa3d5d2/js/main.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/Tomotoes.github.io@853631aa3d5d2/js/background.js"
	],
	about = ["https://cdn.jsdelivr.net/gh/Tomotoes/about@f99a836b74345/css/app.69304c12.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/about@f99a836b74345/js/app.e1875d7b.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/about@f99a836b74345/js/chunk-vendors.3ed0ef04.js"
	],
	blog = ["https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/archive-594f5e7e1c.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/footer-7201371438.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/highlight-831fde53b2.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/home-55143640e4.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/module/comment-bfd02bb730.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/module/relatedPosts-c228cc3ea0.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/module/reward-fc1e0c7470.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/module/toc-15e89e9d69.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/page/guestbook-85da157449.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/page/weibo/post-797aca9df2.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/post-21bf5b33e5.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/style-d6b5253086.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/css/tag-64d5e4f65d.css",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/js/live2d/index-0d3bb65134.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/js/main-40105bee02.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/js/module/comment-bbb0691887.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/js/module/other-fbb5c90857.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/js/module/post-f5726ac792.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/js/page/guestbook-9218db5170.js",
		"https://cdn.jsdelivr.net/gh/Tomotoes/blog@51207e6976592/js/script-31b7733182.js"
	];
workbox.precaching.precacheAndRoute(home), workbox.precaching.precacheAndRoute(blog), workbox.precaching.precacheAndRoute(
	about), workbox.precaching.precacheAndRoute([{
	url: "index.html",
	revision: "d4bb6e2ea5fe36517131d18b45987d78"
}]);
