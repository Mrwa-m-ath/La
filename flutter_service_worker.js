'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "7f38d11dc7ffe84fa0bf5b21ac66f192",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0bcc196011873216fa62bbee28502011",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/07/bb160f20a83fd275b8cf0a188bf4425967a99d": "0b564c673a98e7fb190f34b1e35af453",
".git/objects/08/c8035772f4a2029bde89d8f7fa04fababe625b": "deff79c3b6497d7d81bcebd647a26d41",
".git/objects/09/3dd8acb49b0951d8f7d918226ab852d6043920": "523798283790142f048abbff49342046",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2d/7108c9c05bc739ff066b1f9a6095d4426e54b4": "5a67dec2eb8247acb3ce164bba7f55f8",
".git/objects/2d/947465ca35541ee5d3f60666adc344b6fac15d": "425330b8a4052183673344523ba32a0d",
".git/objects/32/6a69c6d2d520f0197d70a6524d6e477ee94771": "cd7d5fef17644f7e0b298e3bd8dbe298",
".git/objects/33/429f037595dde0b4af8819065884fb4b332820": "e5146aa7412d143d7d4263df87affe01",
".git/objects/37/7ef34c9bd0eac6614b30dccc2e8f029a6320b7": "1467c349ab1cd1c8d8cf9b7cb69a1d10",
".git/objects/44/1a8299e871ffaea208edd5711d19ff2f6c94d4": "0de2915de61e1ba2ef425b4182323b90",
".git/objects/45/2293f8694a5678805bd6d41528c49ee8c1767c": "b30fc3ce30d09ada9b3405ea7f2cc556",
".git/objects/46/b840a73ef1fa41617426c299d683f22b21270f": "946c4ef3d9341eda0d29c1aeb3cededc",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/5dd3efa04f61c1efaa8291da828aa2fa4fdb6b": "d4881aaaee1b71c8d11fd2afaf47892b",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/1c3de250d5f909c5393cef8be4cafeedbefe32": "54eca10213384b98c93523572edcfcac",
".git/objects/7b/0a871f10c4e4502c8e1170fd3893b295032905": "8c1114266f5b014c8acd5a442f02a7bc",
".git/objects/80/3e4be2982db477e02160d364980d625727cb7c": "2d080df5a937fb6706bc837c2ee8cd7a",
".git/objects/81/fe5339d1044ee0199dffaa2dfeca27644c3197": "ee1bd4f8e7f2b87f8aaf5065f346df10",
".git/objects/83/047e300d3b7e55fcbf1976d70cacb0a4c561cc": "0a9f45105e6880c182436675ee3bb97e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/831f73cc0f6602921d3c2463f6a00820217f45": "eef0286577ec3e5f0823958357772302",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c07a78ea9941f4720ca5f84be3ce7b62019424": "7ff55593a1fcdf786fe182d9c4e7d340",
".git/objects/90/ecc07d2c380547d8feb6e7523094b308c62146": "77c4b3847ab381d8e778b8aff117158b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/5f8e8575004faa152be6eeddc6b33af40469fe": "a91d68b8f008ae337a71cd0944236a6d",
".git/objects/a0/d02f18227c522e3fedb95cb39c25e635b81d21": "be20c78da9349970635140da3af6b250",
".git/objects/a6/22e299878620a5a14060e873fdb7844272a3b5": "81a2809b38f5b4702993f22c798ed2cb",
".git/objects/a7/aac78b177565545354e7ce5ec39ec7066a5820": "c8b60c959461dd36cc6d36d9de24923d",
".git/objects/aa/97e4f3f18569551f007fc6dfc37ba02d92d834": "da4592cad2761c742b4ada16e4fba8f4",
".git/objects/ab/6b52bcc6a63313aff8b69fc1918775e3e306c4": "122e1c8e4aaaf409333b8371e0b528af",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/235f2f3195c7b85ad01f392d748a6a6436416e": "0f1f95ddea2b90f686a4b178c5e63e63",
".git/objects/c1/a1fef3a251380cc3cdec69a68442ada33e1e3e": "fcdbed2be05fe3469ed9c034fe74d632",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/856a975fb3f32ebd893430d95f8e1b5fab5e70": "69f9a2d455e4c4cad77d048d4fb5d24d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/9c3381ef0d0c38f0b1507e2dc182da1ef1a4c2": "b170af69f84f6fb4fb935b0d7aacbbfe",
".git/objects/db/9155c76090c70546fa42dd2d470df0e5a08d6f": "4d38d91370b4bac6c930502fd4bb215c",
".git/objects/e0/cafb72fa005da92aaed228dfab53376ea5549f": "0ff507ea501b0e5a3ccb87c892c5bd68",
".git/objects/e4/efd2fc9c2b35f1a0b3eb744aad060b34f593f2": "a1bd195856ff227a2d55a93d7a540fca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/5aef4d7bc67b91cfbea4edb5b7ab83c1027c36": "e36e1b4106609777a35ea01c9d4dc0b1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
"assets/AssetManifest.bin": "aaeff3b774e9951e90602cddd617828d",
"assets/AssetManifest.bin.json": "9a0883d1b8f770d7cd2de78cfc1a4559",
"assets/AssetManifest.json": "2331aead68a56e280f97a9f46f897a65",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "d1e00b33be6460474ad585ab8a5155c5",
"assets/images/ImageCompanyMove/img.png": "08b23adc6da76515351dab7185022f46",
"assets/images/ImageCompanyMove/img_1.png": "a8fd0cb645833edceb1419b1e00ae3f9",
"assets/images/ImageCompanyMove/img_10.png": "f28501ee58ea42472d332948ed050914",
"assets/images/ImageCompanyMove/img_11.png": "6cd5de84bd8ea8a89756aa8cd17d47eb",
"assets/images/ImageCompanyMove/img_12.png": "e8a8393829a4226a8c1afddf7cdcba99",
"assets/images/ImageCompanyMove/img_13.png": "dfb335857dfed8c0db87f9cb0819117a",
"assets/images/ImageCompanyMove/img_2.png": "abafd5d8d8091c10c3658291dbef1834",
"assets/images/ImageCompanyMove/img_3.png": "3bc1e22c0cf59bc6f7cb76f91d6aa1a8",
"assets/images/ImageCompanyMove/img_4.png": "a37c44654639412c67f272b627596e13",
"assets/images/ImageCompanyMove/img_5.png": "a8fd0cb645833edceb1419b1e00ae3f9",
"assets/images/ImageCompanyMove/img_6.png": "663fabdc486e59549af04613129e79c9",
"assets/images/ImageCompanyMove/img_7.png": "6903831f8b8ccb1bf39ab0a1e0eb4f20",
"assets/images/ImageCompanyMove/img_8.png": "ddef1dc6db91c5b23c142f2be4d6c1ed",
"assets/images/ImageCompanyMove/img_9.png": "6e107b0c4565ab83768426e645e2a36d",
"assets/NOTICES": "4e7c15c9a9ae4f0249fde6390bef3198",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "64592956abc54aa2362391ec9d3fd332",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "91843cc88ce3d06c4ce099e60e534169",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "df286c14b9ab7da5d324ce87e88e74b1",
"/": "df286c14b9ab7da5d324ce87e88e74b1",
"main.dart.js": "c596de6cc87eb3e78a193cec45172c86",
"manifest.json": "5527ac845cf36b939b12c43e58e8d2d0",
"version.json": "31082b9bf7cc80e9aa26c22a6c16cd1a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
