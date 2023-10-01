'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "030c6af722e5187679e13239d8e7e7ae",
".git/config": "daec40098c6842b52e0b50e150cf1070",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b9fcb7ece200bd194c662aa7f54a575f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "35b73575d685e2a6a7a39645bd6de0c3",
".git/logs/refs/heads/main": "baa5dc19b7270a648939cc8e6c86b4c0",
".git/logs/refs/remotes/origin/main": "ce66e19af766359f9d6db501c9f236c4",
".git/objects/01/23321b264c92d6e771855a0919077fd16466db": "e8adf3e8a498070dcffb3e86490dbb70",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/f382c7201ab186be5a8170933717037b54fd5f": "f2068fc2e0fadf0d1260a6ab3eb57905",
".git/objects/07/5ba24d4a6b40e8ec253331d0b793f216daafbf": "dfe38d070e93c93a0a0a95d2b0ac22f3",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0f/159759436d8db7f4c8ae0ae4ff7e3c49153fae": "a99154ee81718d197bb8c30bd5333a2b",
".git/objects/12/517426124fd90394ce7a3baee68989bede2282": "05b4e5576a217e61537da5e709e6f2c6",
".git/objects/1a/5d4ae551706f07ec8f71f268302426179be5ff": "19843072d888900f4b9ee2678b613504",
".git/objects/1d/9d9e661870a9f66f527a95f03d64b4958c4570": "52c392dc6883c9080655f44148e915ed",
".git/objects/2f/50fbdabe767a39acce0c6c41a68558e6426f1e": "d5dcdb309a2d6746f55d25e28ee2fe3c",
".git/objects/30/0cd92767667eb0387f629b6457e379dfc4e7f2": "962c76e848728fc9ba2a5e64aae42b82",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/654bd88e8b907e200efc0a32ff294f281bdd63": "488bc0d8ff31f18843ae984d15ac72b1",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/40/536ecea905ca274a1fe17bd3e8c67bdcdb854f": "f6131967c0af1a5285c069de96a36835",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/3545f4d44bd1ec84426fa0eda75be97bdce475": "d62e6359b140fbda8bbb89326b8901c1",
".git/objects/51/5666a143b8908db5e4ec6d585ca9eb54cc5f38": "16e67b5428b2cacc9588fdbc050bf218",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/4b09f2a787e93456bc4909a5ff160b80c0a83e": "0fffdbf3b9d92f1cef7061ea0cb98032",
".git/objects/5b/cef6cd8907a698b3e2a0aa84b33e2e00f72592": "e67c2fb87a71b3c06ccb4b7fd66c9cef",
".git/objects/5c/87f51bf7f62509d3ec4a49714bbc22f35129f1": "f2148f823b536a29ac67e94f314dd897",
".git/objects/5c/dabddfbfe039aec24ad9598777c917c2cc528e": "978d335746c57b371034a6b6cf999527",
".git/objects/61/59e7606182a171cd78c70e5508dccb60875bec": "adec0278f0a9b17082db710d246a6f58",
".git/objects/63/45befa43249b7f2b40157f2050babeeb1067a3": "4d8629b8373eef9c214811578d3a441b",
".git/objects/68/790d8c92d3462c9b75b96b9afb0feb288ebe64": "508b1eff619e8849710cc7c3923499b9",
".git/objects/6a/c73d0de1f5513532cd8fa6f8ebe2153a2c882b": "254c2953cc9b67ec08409538e866d50a",
".git/objects/74/157c0bcf19f3c924194560df848cb88840bd56": "6a424a055351e31e60bf783f749fada3",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/79/571c037bc9c2114c2d90a603e5674a1a9f0487": "3026a157e4276c360693b4d6260ad440",
".git/objects/7e/5159ff031089529ff630cd8b7a09b82dd4245e": "12c8b69dc596ec4db3e7016f6534b556",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/72cc4d3005991e692fddc9ddf8586d527b8841": "c3fc0e5e2cf97d87c1dc217b648e2868",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8e/90f6c0377130a25cadeeea56cca24c31d00c69": "2bd87806b3bc8da88faf5b1a8c9c2fa8",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/c78db9e8f8ed4c952d94c1949d69d23bc3fdd2": "54019eb1c35a4e38d9788c45237751ec",
".git/objects/93/1980ab7e56862162370ce17d6bdfcd15836988": "de563219a832a687edd314fe963eccfe",
".git/objects/96/312dd989ecdf5adbd6d6a5c7da30d202d88e4d": "4789b41e731d04328ecf3c1abea4d97d",
".git/objects/a2/3e8c14b32e839cf3ddd60d0cab67e7a98f0093": "3e2abd78e4cb6e3f86e756b3aeb5df0e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/96a369f3a8b82143e34530ec51d1c2947bdd3a": "781575453fb7dfbc68e0639cb573d52b",
".git/objects/b0/74040f1a69e245fd9d80f02d6da7f01dd43161": "22b8cbb1a99432737bbb83d0cfa8856f",
".git/objects/ba/4bf076df3da140826ef13c7ff45b70f4638e3e": "0e21f721cb9baf956570f7c5c600d755",
".git/objects/ba/7a9ea5addb5ac43e5ebe926faefb2871f36bd5": "643c8aba48f949b05a3107de0e45f3a8",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c3/71e9d28e3ab06cac3ed684e163353c8c0ecba1": "91a2f6d9dc6003a89020d7117df2539a",
".git/objects/c8/152ecb95179f6d2e2e39b626f2db6ef12a5677": "3176cc3e88fbedcc12a2409a52542ff0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/f9a864e09abce02b86fb8922ff5968557f4f3a": "83697460f0250c1b05c2f5fcca4c7d6e",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/31cb378b497588dbbf6a66564fae735563d135": "4b43513ddd763e1bcde4c9323cee2d1b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ed/04293e4df308dbfb4e02a9f88966b597ac25a7": "f7ce302c0bb5d33a38f4a3f1bb81c324",
".git/objects/f3/aea2a6bbf5c8190d727449377951dfb56a1ce0": "4d2620a8d98a168121ca4a86d69ecf25",
".git/objects/f6/f5897e4caf4b80a7a5fc19443b0d0682a42a17": "2e916f2383c900d33a3a210b37f11abf",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fa/a271ab0679b0ac8f117abf30a88405803b7fdd": "74fd87291f99b70704ddfb1c2dc4a8fc",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "fdd6d17d4ea41283390f10b31b45d2f4",
".git/refs/remotes/origin/main": "fdd6d17d4ea41283390f10b31b45d2f4",
"assets/AssetManifest.bin": "42e21d23e0b280c42b591e12410670ed",
"assets/AssetManifest.json": "427cfdab246299301979631e69341e4c",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/fonts/MaterialIcons-Regular.otf": "003f1f8c8591bbe2b86506c3056c5859",
"assets/NOTICES": "6d500b5fe6800a42951f04304b0cf236",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "429f4878395a78daa21abc07b2954fd9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "bf6cb18286d47a86dd985c3ec1b6b85e",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Logo.png": "bf6cb18286d47a86dd985c3ec1b6b85e",
"index.html": "555c1db0e35543b37e70b9d7f8620c08",
"/": "555c1db0e35543b37e70b9d7f8620c08",
"main.dart.js": "914d0adc6ee489f963f2f2b9c684f0e8",
"manifest.json": "40c194dc70623bab3603520d2999770d",
"version.json": "9a9b2485878c121eb97b913f30efd5d4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
