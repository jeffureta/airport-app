'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b13545b75fe99fe7e601d84ffb4ee1aa",
"index.html": "42438abac57b0d8d29dbeb9d8fba62af",
"/": "42438abac57b0d8d29dbeb9d8fba62af",
"main.dart.js": "33d33bd6869c945d847c173c25393f2d",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a34276fb5352d340db672600282e3490",
".git/ORIG_HEAD": "9d1f4ebbb8062174e8047fd34ef6cba8",
".git/config": "307a09e997f4f2fce1b04af5cf3cab53",
".git/objects/3e/6b7366ae6cdd020e9b09700cc6a720fdb270c2": "81e2a9e13a83d1963476e6b8952e2ad1",
".git/objects/03/16a168ab290a092ecf673d1628aa004a25733a": "c88aad454caaa6a26d137033ec49d64e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/a5a006502cf8c454905ec11e6b194b6366ebac": "8f5099d39729c7bd0718704ce49e6814",
".git/objects/9e/5d0724bec26838b0bd9eecaf02577b49804797": "c8298ac757fd932b8d35631448bbd394",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/1c84d4f5ee77308e06bef35f112e484d8d7241": "ec21537e101160a526b35b4f869470fd",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/f9e75ab767750c196b95690538f659c6a47c71": "b2ed20149a914a8de0076e4ae87ce9c0",
".git/objects/67/35c0f8f43b2fb4c07c31105ba11cbd1a0ee8ed": "87f6434bdc9b874ddb6bf1e956333b14",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/05/9be88b136030ec043e31199a8b358ce6b6d7dc": "03612974cdba634edaa46e04bdf21c2f",
".git/objects/05/9ea2972227cb5bae62781434cfc448d6f83cd1": "4efb78e491b35cfcb81a233bfa980560",
".git/objects/05/b96f284dbb5b3800b00c1748dadba6886843d7": "6b25aa993bbcd46c4017a2c5fecaea90",
".git/objects/ad/86af13a40b8d6ee7a94987772b336488e21b38": "831f3ec2b0a20037c0bae09123357bcc",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/32e0cadbc532272e3de24ee15a9bfa47bf6c6a": "2243232fcba90b809d62414200e61d99",
".git/objects/df/776e28b446001422956f2511f01d4ca9884866": "2c84d4a70c1fc7b623ac3f34f8e84985",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/bd/4fd00c65e20c04b041d933e5cb7550b60f983a": "47719a13603d3562c603225c5f32420c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/735e526a7e82c82e5c00c619f7d304cde9e1b2": "b57932e0aebc296b84cce00a220ac62f",
".git/objects/e3/cba7b85ae2598bbb48ed7dc55df17eba1644cf": "86e939f6c189cd2923b194ff1e660c51",
".git/objects/e4/3e6d3b36d6f3d20ea50173a3eacc89fbfc69a2": "37ecb2c2c4f145f16615c45887361dc3",
".git/objects/c1/2a2c0cf08b727cd0c8634296fea878d5723127": "621a6c764c0fde195550db915fe03474",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/7c/665b9ae9f5500790296d107e697b704119b2ee": "8589d793f5eeb3dc8c7c34a39efd27b1",
".git/objects/7b/ff0aaf08a0d0dae077c569846b6dec8582463e": "b9715b256e618927bf7e5667a95eeac3",
".git/objects/7b/e275e39321fd884a18bd7858ab009a0f71b2d0": "e97185a448c5cc2c312b0d4232a2c718",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/7e/688c1b9a2785ad0b9eab440758838852fd6e52": "073fd494b6f67e9fe0e3ead11307b210",
".git/objects/26/cd1dfce0cd1b110cc183e33f67a8e1b124bf89": "db00d9b39a0d2a15dfa369529712f1c2",
".git/objects/21/1b89bf5882de0560b20f802ef2579e3dd8336f": "98c7280ce811ad0e64a855567dad8a76",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/bc3105e87c42d058017c36752b7ac78cc96ce1": "5b5a16ac7143312f9777bfd789ec4156",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/65/466de48292324eb668f32b5d0e106e88481a7b": "d0748d7cfd0eb27ad67fd766eec623e1",
".git/objects/96/862c3555c8b2043960d406b4833d9e972b3a69": "f9e3f98b8696b0eaa288064f184d5064",
".git/objects/98/68df5e0d1571396690d283c0da7ff1952d2d19": "94d06bbd62c5332bd2967485fa192c03",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/ca496788119ec7de83e9f76b9acf7a276ce66c": "4e5157a26db5e75b314e2143106eb9d9",
".git/objects/08/7dcf88f9c5761f89a76ffb34881b8846ea5afd": "916417197993056562758fe2a58db353",
".git/objects/99/0c2bb89c328d8fb1004ec5f0ddbbfa5cef90f2": "28339311540a9010b648cf2d43391ed9",
".git/objects/d4/d764cfb70881348377311456b9f89b9b52e931": "b374f0b534e1ec9a2d2511f379c52dc4",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dd/c26f92f9bcecaa510b3f3f40f9e0df821f3afb": "f78ca1bc90c77b750da0727794bb46ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/10e8f600e6d9bdfd3895dedf4e40f9d2de417a": "bd4a1018bcc4cddd090c9ef72ba51568",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/165b73fc42a9122ab0c91b7ff395a5f23c71b5": "8e444ea11190e2847d16f90d71189ddb",
".git/objects/ea/7cff202384390715b9d489cc967ed97c9fcae4": "f3a4b5a80d75f6c6dd292cdf98e6843b",
".git/objects/ea/644298b14798dcd61f6382c82e37df240d49c6": "deae0cc79bc78c090817ff6b071c7128",
".git/objects/cd/0d1c7ce5df532c7edefc54b0e4595ccb2c0df9": "623242717d7e29b8b99417a765d31c16",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/2f52cf459329d3812b662e5f91dbda6110e6e6": "755f4cea985d11705480cefcdb4cbeed",
".git/objects/e8/d751abd640e7183729b628268365ed02e43b6d": "ed0c3e83f9c31a9f0fb62ef0a347d0e1",
".git/objects/fa/f2a3b4b2e9a1c8589ad25ddbe9d007dec520b8": "4016fe2c621069eb5410af2bb5f9ef7a",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ff/644bf843681e2590b0f184534e022b23f76017": "347b022a47bfda798cc1b6254848f70c",
".git/objects/c5/570943edef857248f890a32c6c3ac7e3951903": "75052f5f3f33c4dc61621a4452558a3d",
".git/objects/e9/fd9c632dd238d500f2306720de325671095bc1": "cfc24ced7242a80c7c64fd4fc102f501",
".git/objects/e9/f168d851a37345b8446c67462f7ccde87d875e": "93b6f24d10ea53c68a9d524521e598ab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/23/8a0a3c9f75ae5d6f20d2f19187b703fa49b4c3": "938844f89889b0dc66bc55cd6e72c4d3",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/12/0028557fb43053a9f73afacde51c5588bc6da7": "029dacf1815d79e56c57648e29e74c11",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/7a/ed336ac125f12472d8268a0abfe5c7c6b0cf90": "87c78428b8ff82f50ac4425818f96efd",
".git/objects/22/60425d31ee7e5304282c2e73f2ac67f7e06c79": "f57f8b5712a49c713c0d764b6edf9136",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc22ff7e54d11702ed8869a56f4d28f1",
".git/logs/refs/heads/main": "616ace95cf18831b1074ae305c2aa6e7",
".git/logs/refs/remotes/origin/main": "3c3280d29e818204fec3da5f06442b2d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b6d6dcbc20d44e20dc24f1bfe6c75260",
".git/refs/remotes/origin/main": "b6d6dcbc20d44e20dc24f1bfe6c75260",
".git/index": "977388716232a117721efff31aaa7ffd",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "6dac807875aa61921ff7e5d450eb0690",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "b07d46f625bf54dff419dd3d74391f1c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
