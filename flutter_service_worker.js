'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "103b8deede868b67ae7c7336562505c6",
".git/config": "dcbaab638aa93e116972a808af831e3f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "164059508cd3a9056b659cd19fe76fa0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02e467c660a4cfa1fd41f26681aee484",
".git/logs/refs/heads/master": "02e467c660a4cfa1fd41f26681aee484",
".git/logs/refs/remotes/origin/master": "0401eb76b4895ef2961b60445e429143",
".git/objects/02/20533beccfb93832bca3c5c8ead108e92ecf7d": "eff640f1e50ca83b9e11084c54d5b770",
".git/objects/03/6207a6b9b396cb9ea09f164deab930ea208361": "ad107a4c9fa0aa73f34d068b081164a3",
".git/objects/0c/41189797aa570b97234f06e4d2a04912cfb293": "ec7e20045d8229af7c12e0abfdbb39cf",
".git/objects/1d/faeff554d28df934050d553254c078f13678da": "bb30a5b8bed8016a850f16d4737adf38",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/ea4d0d4bfc58848d932d92c40c1fea170662ff": "aec439ab309ec805dfd4ff633082ed69",
".git/objects/28/f546611d14fd4e2cb023ba5fa81c3f9b626ef0": "f19f8b679318fb6bd3e718ef2a2765c2",
".git/objects/3a/d2dce6c4e6f994cd3f0bbdfbe601ca369ab17a": "8a7e13635af43de3dda130d1a8071554",
".git/objects/3e/5bbf2a828bbff996d4eaa067869d454e77d7db": "d6c42c5fe112ad0928b31738089f8a6a",
".git/objects/50/29566a3f8d3cae544ffc86fd530044048edaef": "8e070a90e183184df9fa0f320d3485b0",
".git/objects/57/ae25734da1e567fd0a526c773a6d86edfc8940": "037afe057b894b0a33c614c664ad6ed1",
".git/objects/5b/187044a42354951176534c66bf046fe11a6fa8": "fc7e2cb8d30ad86bb245cd86922ff846",
".git/objects/5f/75ce776d2fbe38283aca90d63304da76d3a32e": "71e33f09f3090faa4bd3f448512be00d",
".git/objects/6e/85ffc2390f5fa25e2f1d4022a7ed42bc9e72ea": "0390496bcfb00935d4754455602af710",
".git/objects/71/1aca8e1a2e5b7d63c2a9ae5c05512775281083": "4aeec784ff7f63adad4bbd5e4a7350e1",
".git/objects/74/a93f11ad615df7df2f20fea2a8a1ac745c24c5": "8943fee71acda306ad62a4399fedc183",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/488a904ff4dc441b0093cef8fd884f085e4c90": "6c312424e59224c3d617d1ace4052634",
".git/objects/87/3e6cc5fed5ddc266d2f79fa8a75c828ec29e45": "eda8381f5c8d8989b8f575591192f616",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/99/689e8b6f53793b81646ba0387ff1d676170e32": "ce9c33bd65d8458e22820cedbdec53b1",
".git/objects/9a/362c1a4a062fc7da4239c4d921e474ca64bef5": "72948d1c66825c3180937e766e4e9315",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ac/dc1757b9dea5d86c4fc998dac17bafc36f7adc": "8e7bd3cd6bad5d38387d7fec71400305",
".git/objects/ad/2df913b247db2e8fb98f8c8c059fc39ae25bbf": "a8e0d8bc6b46eca6bc5bf08b567809b1",
".git/objects/ad/dd8bee9c83113c399a7e05d688bcb671b0331f": "36a005c14103588fd63237fa722c2a7f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/c7017bd6faae914b86a8d21735f082b52da3c4": "37852477547baf4b35fd406da6b0153d",
".git/objects/c0/3a3a840aedf29bdc9680704bc47d899225b624": "b0630b71e1580a8bffbe2dfb4649fc1f",
".git/objects/c6/586e3247b6b18c8bd92308f95ef10bab22b529": "0c70fbeedf710641fe6a0d237d289cbe",
".git/objects/ce/ef1746a7360226558889d57bca482ce6bc8a0f": "c2df99b6f6546f892d963da08a0e73b8",
".git/objects/d2/111965ed641099b02976d2a828f86b9060c1d8": "60d0607d7a86c3c5af96ce58611e2ff9",
".git/objects/da/a190f603f1400424f0ffa1c6c442b3ba62cb0b": "654e0ee874db44e30eb57121d31c41dc",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f0/2182d81f96bdbce133a2b85be542595c38cf99": "b7363b13b71fa59ce48d598b729aa37c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fd/41479f43f6741b56d052d6ef47bb1075fb9c99": "960148b7543ae489c98097bfbeecbc70",
".git/objects/fe/40f76638733d718bb6b264ed32804a2f1b4007": "8d082abef6eda5386c489c9e45232334",
".git/refs/heads/master": "5cbafb5a47b04299849d1680627d865c",
".git/refs/remotes/origin/master": "5cbafb5a47b04299849d1680627d865c",
"assets/AssetManifest.json": "4c6e3d9b1ad41256ddc24b7670575342",
"assets/assets/images/icon_iOS.png": "131511e42aa660a42ad69c9cd9d0ac89",
"assets/assets/images/kitchen_background_table.jpg": "c28d6e28d788336d5cd0cfe050570ee8",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/icon_iOS.png": "131511e42aa660a42ad69c9cd9d0ac89",
"assets/images/kitchen_background_table.jpg": "c28d6e28d788336d5cd0cfe050570ee8",
"assets/NOTICES": "6fb03418d05fe5805da4142716568928",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "62fa0ce72ddf9a22ac36d88cf9b28bfb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "584f431dcf8056af6eb1a54fa9540135",
"/": "584f431dcf8056af6eb1a54fa9540135",
"main.dart.js": "599e67c24e54a066086093def46430ef",
"manifest.json": "d921bc2458ef5a03373443a02242f44d",
"version.json": "c3096c1084313908fd95e23b745ded66"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
