'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e4e2033149c042f3e88d43237cabe449",
"version.json": "1f5e4ae53285baec69eab74c18df81ac",
"index.html": "cd7def5d416edb0dad899a30be7a5a16",
"/": "cd7def5d416edb0dad899a30be7a5a16",
"main.dart.js": "459f41232216cd7f43a62714926ef579",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e95f2c3fd84d60319b31fd940fc9aec",
"assets/AssetManifest.json": "16f0d9251d0c0e48e1015809d1e3f32e",
"assets/NOTICES": "435c08511e9268be29832c84dcb4b95c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b36848f9a47e96cf19fa0414fa91533b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "97dccef2b593e7f831a864bd2bf7366d",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b0814ce34c90a4f307ceb8c91e04972d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "8ce5e91578382c8c00ade78250ed214a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4b669003ce88dcd0421c3ee14f2d8d82",
"assets/fonts/MaterialIcons-Regular.otf": "44e298026b2081cb6a710bb5aeca99f6",
"assets/assets/svg/search.svg": "ec9c68c253dd9c5679caa964af2e9106",
"assets/assets/svg/cv_edit/ic_voice_edit.svg": "d96bef50c3c18ef1708270e1b44bbf7f",
"assets/assets/svg/cv_edit/ic_voice.svg": "afa031537174a89fc3a1c78ad7a8e85e",
"assets/assets/svg/cv_edit/ic_switch_template.svg": "66ad91fd0d61e520b910a6ac836c7daf",
"assets/assets/svg/cv_edit/ic_text_edit.svg": "ff3a6ae3399b347d6d39709a754a82da",
"assets/assets/svg/cv_edit/ic_record_delete.svg": "e9f8db667b3f7e11b86dfc4a5ea724c8",
"assets/assets/svg/cv_edit/ic_record_send.svg": "f0f57da67d65aacfa8621a67c552c11b",
"assets/assets/svg/cv_edit/ic_record_pause.svg": "4fb899a6928044d0641336c4e53146f3",
"assets/assets/svg/ic_filter.svg": "ccd2d8c86ba2ada2de0e550550e0bbe5",
"assets/assets/svg/ic_share.svg": "257c52412332998251e5048cf275a41d",
"assets/assets/svg/ic_cover.svg": "7469f599315123c67b033e5be43d86b1",
"assets/assets/svg/ic_success_promo.svg": "a2d5ecbaa56a48a0b6a8673da7121748",
"assets/assets/svg/person.svg": "a50e59fc747730e10c8d3e18b120c82b",
"assets/assets/svg/ic_info.svg": "9b8a7e548aadd72b7c0905ed71503bba",
"assets/assets/svg/Vector.svg": "8396418750636d0f1e5bc6617cc2440f",
"assets/assets/svg/ic_location.svg": "6be466e2d03823f9f16a42022ecd4048",
"assets/assets/svg/build.svg": "2ed7c87821f83f3b32372a2dc6a79725",
"assets/assets/svg/ic_close.svg": "cba753bea7937aaf9a0a3c402775afe3",
"assets/assets/svg/sound-edit.svg": "d284145eb67ba7cea8899a1dcf7c5117",
"assets/assets/svg/settings.svg": "295ce3f138ad320f4d42e49310b15915",
"assets/assets/svg/ic_ai.svg": "b6ea80e0156a498677becf4c82e97777",
"assets/assets/svg/dark_mode.svg": "80ac16a5766cf145e7330e02cd3342c8",
"assets/assets/svg/stepper/step_inactive.svg": "b9111be27628b6809fe6746095270426",
"assets/assets/svg/stepper/step_active.svg": "630ec79df16a7b42ec6e9f4687e57e15",
"assets/assets/svg/stepper/step_done.svg": "5847030e59e4b1cb5fca202830eddf04",
"assets/assets/svg/ic_bookmark.svg": "97426b670ad7c4c7672e35f02dad5041",
"assets/assets/svg/business_center.svg": "42bbe5c41e725d75b9fc944c2f5bc4c2",
"assets/assets/svg/info.svg": "1e6e17b383351dc4003186e392b8d451",
"assets/assets/svg/check_circle.svg": "2c9669b42b306a0f005063024fb51afc",
"assets/assets/svg/launch.svg": "17d19ad957ec5889eb4a5cd9bc93c1b0",
"assets/assets/svg/ic_info_white_bg.svg": "e11836fba713e15b0556d315a995fb5a",
"assets/assets/svg/ic_sort.svg": "fe8df6a01ac87c0acd3f5d8ba788f284",
"assets/assets/svg/feedback.svg": "724a84a7f055d56b069fc63a12179237",
"assets/assets/svg/findMyJob.svg": "a7ab61ad00d029eaf5e420505259472e",
"assets/assets/svg/ic_translate.svg": "849eb6bee948f4972b9594caccd241d1",
"assets/assets/svg/stars_rounded.svg": "287709705aaf1c6b320c41bd60bb4871",
"assets/assets/svg/google.svg": "2e95738f841c93bcb9e69cb467c5206e",
"assets/assets/svg/ic_video_add.svg": "b876914c6292e94128b9d8f3e374da38",
"assets/assets/svg/ic_warning.svg": "7c8e96bc3502569eb9b0860685e28fbc",
"assets/assets/svg/edit.svg": "3ca86864bbea6e2d951ac418595f20ca",
"assets/assets/svg/ic_no_premium_check.svg": "726ce81c049b8e7b39d75f11e162de14",
"assets/assets/svg/ic_discount.svg": "300087cbcaa856190c2b3b8e25fc9bc1",
"assets/assets/svg/ic_chat.svg": "4b30e4ae6c8d18c3cd7b76a6096e4c98",
"assets/assets/svg/item.svg": "aab0538f2ebb31e1c14362a00ce68978",
"assets/assets/svg/reorder.svg": "851196f29f8ee4fd01b5ed356225d9f2",
"assets/assets/svg/ic_apply_history.svg": "bea832a7ea2dd8b1d672aff3fdc6304e",
"assets/assets/svg/share.svg": "5d190db74b892d7edc497cbffde8ddf5",
"assets/assets/svg/linkedin.svg": "1f2f2c51847dc040fe3b2d9bd6aafd5b",
"assets/assets/svg/ic_free_premium_check.svg": "c32d1015304270537774f125be4dd70e",
"assets/assets/svg/business.svg": "6a5630e42bfcd39a955b3fafe9bb4b61",
"assets/assets/svg/step_done.svg": "5847030e59e4b1cb5fca202830eddf04",
"assets/assets/svg/ic_radio_check.svg": "d23ad5617d27e91da982312927bbee3b",
"assets/assets/svg/ic_alerts.svg": "8ab78455f9fff2ec46af8c9100494330",
"assets/assets/svg/ic_arrow.svg": "7002179c6e8bd4a9e9e2124071a6e97f",
"assets/assets/svg/ic_resume.svg": "067c0d05449fd04ab15a2fe2f2831fd7",
"assets/assets/svg/logo-1.svg": "e8d5ea671285b6e22dd8a6c715692fa2",
"assets/assets/svg/ic_stricness_info.svg": "e9cbc679401be7e45bd7f59062787d2d",
"assets/assets/svg/ic_work_bag.svg": "3231ced27c6a26fd1171f0a8746ff201",
"assets/assets/svg/apple.svg": "61daa89d00cd6febec701874990d9da7",
"assets/assets/svg/avatar.svg": "55f88c99e763ae2dc81246fc149c263d",
"assets/assets/svg/ic_cv_review.svg": "e5a4ee45c4be74f6ac4cf22d54284daf",
"assets/assets/images/business_center.png": "1475eda1ea0136654538215e9ebf68c7",
"assets/assets/images/settings.png": "121efff65b30dd903ca2908f93f83f7f",
"assets/assets/images/standard.jpg": "2d1ce56b1b3e8cb2815f523ff4704a20",
"assets/assets/images/key.png": "7d35b75ba84ab317a721f84ca2ff1331",
"assets/assets/images/Vector.png": "f3622788599b021f7d01170bd618c344",
"assets/assets/images/classic.jpg": "c191cb8c3398fcb39301c1fddd9be9a2",
"assets/assets/images/sara_standard.jpg": "ac1235ae6a9bd3e833fec17ec9d95e45",
"assets/assets/images/create.png": "da4271a02bfb09c061c508b5fd6a37c2",
"assets/assets/images/earth.png": "134eca2dcf17d4cbd55594742f3ce862",
"assets/assets/images/sara_classic.jpg": "a86a039fd7681bf4994ed5dd1e2c2640",
"assets/assets/images/apple.png": "b6c515dfbf275996168a71ea2061a47f",
"assets/assets/images/error.png": "4dab4980cde3c6186a5f1eb5503e3e64",
"assets/assets/images/app-icon.png": "4e6e89430893488124cb2a2fc9ddf4e2",
"assets/assets/images/delete.png": "01bee1c0ef69c640cfd4b6f800659fef",
"assets/assets/images/star.png": "f7494467c8efdab4780315c648334707",
"assets/assets/images/google.png": "340b51314c5cdc749e6246074aa5240b",
"assets/assets/images/logo_2.png": "fbf2b10c04a7e1a5f3dba9f6fcbb91e2",
"assets/assets/images/ic_gift.png": "83f0133f13b5317dc62c2bc16b5e6a60",
"assets/assets/images/arrow_drop_down.png": "dd5767ef8b4412b15d5538c983af0f9e",
"assets/assets/images/launch.png": "b2cdcbfc1dc9d39d54d047b7873b1efa",
"assets/assets/sounds/msn_sound.mp3": "b82960c5bdc65e09cc2aa482a32a2a60",
"assets/assets/lottie/onboarding_en/onboarding_five.json": "ec2d4b97569ac8a1747c5be378d06e69",
"assets/assets/lottie/onboarding_en/onboarding_one.json": "43a0b8fe4472bf5811ac50e205a64418",
"assets/assets/lottie/onboarding_en/onboarding_two.json": "836a0ae9d9c994928bd67276a0460cf2",
"assets/assets/lottie/onboarding_en/onboarding_four.json": "4f802c5327d1be8043a43163c6da02a6",
"assets/assets/lottie/onboarding_en/onboarding_three.json": "6ccbcd0e7a6145926169f728ebd30daf",
"assets/assets/lottie/success.zip": "9cee5c18bf55b3484b3591d673ca3839",
"assets/assets/lottie/onboarding_ar/onboarding_five.json": "625c3c62550f36352c524942c085310d",
"assets/assets/lottie/onboarding_ar/onboarding_one.json": "a362bf4c6f3c36d5670351da22dd8399",
"assets/assets/lottie/onboarding_ar/onboarding_two.json": "27e768e9b0752275cb6ec521464055f6",
"assets/assets/lottie/onboarding_ar/onboarding_four.json": "db06bcf68caa742c776f83870163dd8a",
"assets/assets/lottie/onboarding_ar/onboarding_three.json": "21c4cd0dfd0b0b73c17c00fa2c94daf7",
"assets/assets/lottie/recording.json": "cb0d755828ecdc3a059a6040e528bd68",
"assets/assets/lottie/ai_loading.json": "20671d9a98c50f814ff15c71a17b6d75",
"assets/assets/lottie/ai_assist/cover_letter_en.json": "5c0d16c46d8f1c452c9a549e3155a407",
"assets/assets/lottie/ai_assist/cv_en.json": "bf402101821ec39d8e749951b228a8e0",
"assets/assets/lottie/ai_assist/cover_letter_ar.json": "d3e631af1702abff39a5067d42896922",
"assets/assets/lottie/ai_assist/cv_ar.json": "0d5bd2f8d1bd3325908d25b193b6107b",
"assets/assets/lottie/no_alerts.json": "958fed9c4b64d3b28f516839eb0a61ce",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
