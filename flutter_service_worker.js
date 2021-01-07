'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "45722b21b56e17d90f6516c789796f7e",
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
".git/index": "f5af5b92818e4241cd6fe9d89df9c88d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e3741f68c5506e7854629af3fa0fd476",
".git/logs/refs/heads/master": "d805259ff8c54a9363a5bf602628a241",
".git/logs/refs/remotes/origin/master": "1ff52b7bb24d729f364e55c4b3507f98",
".git/objects/02/20533beccfb93832bca3c5c8ead108e92ecf7d": "eff640f1e50ca83b9e11084c54d5b770",
".git/objects/03/6207a6b9b396cb9ea09f164deab930ea208361": "ad107a4c9fa0aa73f34d068b081164a3",
".git/objects/05/16b88cdc6e997b1702a131787733d336b269c9": "56a97bcfc32bf7bb8bb4ea33edb53fe0",
".git/objects/09/bef2e56614d1ad091c329955c378f5d87b7f6d": "938f46e7e5824885e7021e5f4eb3edf9",
".git/objects/0a/ef2b62eca2310a4e1726beaf99e4edec14bfc2": "c0feceb72dd72bff72d8c1b95cd8e5d4",
".git/objects/0c/41189797aa570b97234f06e4d2a04912cfb293": "ec7e20045d8229af7c12e0abfdbb39cf",
".git/objects/0d/905ae0ed7c5b4719dbbd6011c3837765b8e35e": "6e32873d83de6bf2772953790dacc93a",
".git/objects/11/6a4ed43f149c46df72a7eceaf3b7cb027baefb": "7c98d6d2fdeaab35cdf0e95153f591fd",
".git/objects/13/ce7018f2872cc02008faedccb1355e76a050a9": "7c94f9c9a4df5ec7137066e508554d15",
".git/objects/16/41aa2d29033e6de435861b7e388e60d5f318e9": "a492c92149f0f2035860cb0db68f5268",
".git/objects/1c/560131e14e0851c7e456b5c24d18d7b5cfcbfa": "bbc9e46b0351d03c8962ba52bc87823d",
".git/objects/1d/faeff554d28df934050d553254c078f13678da": "bb30a5b8bed8016a850f16d4737adf38",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/1916e89132822a5da98858c840ce009b43d5ca": "cf6948c3e293a274f56972d066398896",
".git/objects/23/9cb045cf7121f108f7a290d5a81da52dff52df": "2eadde66444fccbe7065c1d8b28798e7",
".git/objects/23/ea4d0d4bfc58848d932d92c40c1fea170662ff": "aec439ab309ec805dfd4ff633082ed69",
".git/objects/28/f546611d14fd4e2cb023ba5fa81c3f9b626ef0": "f19f8b679318fb6bd3e718ef2a2765c2",
".git/objects/2a/2986dc237bccd6f5062f5953131178dc912f67": "96740d322928182446e35626e395a524",
".git/objects/3a/ae50c7279cc18acfe37b979b59dd6eb6107340": "be8507cea8a963781bfc2830b09ffd0f",
".git/objects/3a/d2dce6c4e6f994cd3f0bbdfbe601ca369ab17a": "8a7e13635af43de3dda130d1a8071554",
".git/objects/3e/5bbf2a828bbff996d4eaa067869d454e77d7db": "d6c42c5fe112ad0928b31738089f8a6a",
".git/objects/3e/8df4bcdc7a917172f2d782777f71f814206370": "711c78c04aae7292ab029e42d9ee4681",
".git/objects/40/a21e074129b6e0f85b9eb78236d082342b3e77": "54841591ddcd308448990c5b0f3f4662",
".git/objects/44/23410521afd8121eb33df677635939b6af1200": "76af776e17e6a73118035547e11ddd23",
".git/objects/4b/390b92d788287feb20cd2b54aeabf1749192cd": "a512287f1b418b0803d4eace00f42aa1",
".git/objects/4e/46ac94700c234f96f4e602ce9001b30bfe15ce": "61891e2cc0be43ff39607c6358e51dfa",
".git/objects/50/29566a3f8d3cae544ffc86fd530044048edaef": "8e070a90e183184df9fa0f320d3485b0",
".git/objects/52/1c72ed35caf3d770bb3502802333e7289cd5db": "7a884a803bd5c182d552733ad428bb2d",
".git/objects/56/6cfe45670a858cd2afbc93b3e7a69badc28678": "3cbc802ea052b4816cac98a93d30ead8",
".git/objects/57/ae25734da1e567fd0a526c773a6d86edfc8940": "037afe057b894b0a33c614c664ad6ed1",
".git/objects/5b/187044a42354951176534c66bf046fe11a6fa8": "fc7e2cb8d30ad86bb245cd86922ff846",
".git/objects/5b/e626d4449cbeb36dfc2e30debb5de96e89a91e": "0572c3bcf84158cd17d9a19ef3cc2dd1",
".git/objects/5f/75ce776d2fbe38283aca90d63304da76d3a32e": "71e33f09f3090faa4bd3f448512be00d",
".git/objects/61/005d210eb09809a49edd9e0328304d1d2fb57f": "83f7cabbabe151e2674e8c451b8d325c",
".git/objects/65/bcb5631242a84d0b22f075cf649075028dd945": "4c4a110800f82dcbe21a2b1ddbaa7f01",
".git/objects/6c/7503787cf3030a750c250a8e016c20808de3ed": "9be9f3fade73431b5839cce950cf28b1",
".git/objects/6c/e9088b5f5d9ca926cf14a8f51804ab7b1d69a1": "53eba54b9bf2d8c3685ff13ded51afd5",
".git/objects/6e/85ffc2390f5fa25e2f1d4022a7ed42bc9e72ea": "0390496bcfb00935d4754455602af710",
".git/objects/71/1aca8e1a2e5b7d63c2a9ae5c05512775281083": "4aeec784ff7f63adad4bbd5e4a7350e1",
".git/objects/72/d1928ee8b3dc2b97a4f2f87820eccc7d4afff9": "181a320ebd4fe997f40c87d576f82c1b",
".git/objects/74/a93f11ad615df7df2f20fea2a8a1ac745c24c5": "8943fee71acda306ad62a4399fedc183",
".git/objects/78/97ef58446e854e98aec461c8a8185a972f8770": "1b06991629509d023bbf756da6ec02fb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/488a904ff4dc441b0093cef8fd884f085e4c90": "6c312424e59224c3d617d1ace4052634",
".git/objects/87/3e6cc5fed5ddc266d2f79fa8a75c828ec29e45": "eda8381f5c8d8989b8f575591192f616",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/d34e73edc2ebfd5431275a4bf2651eed070fb7": "5f38aa76c3b40b405689b4d9506688cb",
".git/objects/93/5ce4379f777edb2f2b562d13c5de621b7ee592": "4555f36898694cbfe58679373e5b8980",
".git/objects/97/a289e1ae8fc99fd13abbe5386bfd5bc51c9136": "81ce177f047e2b31be2a67224ef2a944",
".git/objects/99/689e8b6f53793b81646ba0387ff1d676170e32": "ce9c33bd65d8458e22820cedbdec53b1",
".git/objects/9a/362c1a4a062fc7da4239c4d921e474ca64bef5": "72948d1c66825c3180937e766e4e9315",
".git/objects/9e/5167e39c810424b5d25449af63b8f0c6d34eff": "1ad04f4a0458e5da20abe98d0705c96f",
".git/objects/9e/695750785354d9f9b88cccfa0d1a47181abc61": "27080de09b9ebfab0c47a79a0a45a3ca",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/87a1baed0eb39b134fd3d31fa111a09bdd0b49": "2bcc606005c334ef19d092d2a04a5f8a",
".git/objects/a6/0870136c470c6f7b814753036526730623b39d": "391ecd8e9c803c753c0144b106565cad",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ac/a3e0ec297a82b7801f4cfa39023752e3fd25ca": "00928c7115734798c131288fb03ccc6e",
".git/objects/ac/dc1757b9dea5d86c4fc998dac17bafc36f7adc": "8e7bd3cd6bad5d38387d7fec71400305",
".git/objects/ac/e1eec23db6133052feaf13e2106cdb3b262e91": "8f3d2ea53c88ffb2e2ed473afc6a8d2d",
".git/objects/ad/2df913b247db2e8fb98f8c8c059fc39ae25bbf": "a8e0d8bc6b46eca6bc5bf08b567809b1",
".git/objects/ad/dd8bee9c83113c399a7e05d688bcb671b0331f": "36a005c14103588fd63237fa722c2a7f",
".git/objects/b4/30679e6b9e12fc951a640cae18bb8e3ed4a6ec": "a889e38d4cb8b0abe2a46fb5d06c8d7a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/60ba98560ae432c3d542d8034e4c0ddc4e7ea8": "87ed1baea7a4d4dc8e2d3106d21e352e",
".git/objects/bb/c7017bd6faae914b86a8d21735f082b52da3c4": "37852477547baf4b35fd406da6b0153d",
".git/objects/c0/3a3a840aedf29bdc9680704bc47d899225b624": "b0630b71e1580a8bffbe2dfb4649fc1f",
".git/objects/c3/21c1b75b7c2c2f0e8d4e8ac754785336e17bd2": "2e8a1e4a1065e8d60900f0e41133ec66",
".git/objects/c3/9a75fc43d9bbe13222dff27095d4ea5af9b42d": "b4851b5a3fa9ed5684725f8a3d26d014",
".git/objects/c6/586e3247b6b18c8bd92308f95ef10bab22b529": "0c70fbeedf710641fe6a0d237d289cbe",
".git/objects/c6/a6099041bf2194a17d9493e17b28524afd6345": "8ebcf6a70814566f292ed9b8f5fb4f93",
".git/objects/c7/698ef2150c31d0909232c71586d2834a7d3874": "9106a087808e57be46eb85bdbda0a276",
".git/objects/c8/2c11af4309263ddfc5afdf05c8c569964424f8": "e1f20b2809921a0840e830312529d9b9",
".git/objects/c8/97eb1bcfa32d85642c5c89e425b15044e09a53": "8712e81409d7ecedf2f0de931d629584",
".git/objects/ce/ef1746a7360226558889d57bca482ce6bc8a0f": "c2df99b6f6546f892d963da08a0e73b8",
".git/objects/d1/4677ce881c61f958e9eda8a383c1f4a06f3045": "a0d45203f057192040917a785e8f4e8d",
".git/objects/d2/111965ed641099b02976d2a828f86b9060c1d8": "60d0607d7a86c3c5af96ce58611e2ff9",
".git/objects/d4/4055c3f336eb1b06e4f643e37c0635fbc2b975": "6242ea7607313a9d2481cf28c79f0063",
".git/objects/da/a190f603f1400424f0ffa1c6c442b3ba62cb0b": "654e0ee874db44e30eb57121d31c41dc",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/0ef3d75a68a27dc27bdc633dfaf5d0c95f3bb6": "d099acb6bef55d1b147347ecb0f20391",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/36c2d8f3f3457768a884e178170835de40da07": "91e797f5a94356cea8ed68ea3ba4d74c",
".git/objects/ea/3989f9a5d3431213349c6aac9be48b09a8572c": "1e511eac25332d4946b536b3844f1e67",
".git/objects/ec/35c662de418f382fa512573209ffc2353ff9d4": "e79d2c64fd1763dcbf6785cec1678782",
".git/objects/ed/347a5c1d6e72bcc27bdd2016a077e6cbf94b55": "baa36d5012dd84430087c3e559d8122b",
".git/objects/ed/683eb182be86bad05326bcedfa183a22b1c13d": "aa32103d3e3ebd1b0920e9df101e2213",
".git/objects/f0/2182d81f96bdbce133a2b85be542595c38cf99": "b7363b13b71fa59ce48d598b729aa37c",
".git/objects/f0/56406508090656d6bd2931df8674e061a992a7": "996651159a1df1fefd57a10d2138792d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/3f806e09fb7efd956a4e9426666a046b5d88c8": "6ee23883f55e56ba6b2c143832cd66b9",
".git/objects/f3/728c5d2cb086cd5a16802c010b2c0ae585a25c": "9c5904f216d160435480afe623dcca9d",
".git/objects/f4/9704ed49e3c3e0cbcb556d615e37388ebf4763": "a1b0ceb64c17a2b3e294d4fafb126add",
".git/objects/fd/41479f43f6741b56d052d6ef47bb1075fb9c99": "960148b7543ae489c98097bfbeecbc70",
".git/objects/fe/40f76638733d718bb6b264ed32804a2f1b4007": "8d082abef6eda5386c489c9e45232334",
".git/objects/fe/4f7016f22515a230023abfed9885066b2eeeed": "bfee217617570eada3c44cb71b8cf01d",
".git/ORIG_HEAD": "75aaec5a502b4bfb7d282377ef449174",
".git/refs/heads/master": "8c39706e01be29088623b99c0916fe99",
".git/refs/remotes/origin/master": "8c39706e01be29088623b99c0916fe99",
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
"favicon-16x16.png": "37b56b73f573683db233466a387c5960",
"favicon-32x32.png": "ab5853bd12115ac67b0d69de09692f12",
"favicon-96x96.png": "6a69d09247995be3e01d6625b3b1a073",
"index.html": "5919cc64cf3c52f6645c88f409a3fca8",
"/": "5919cc64cf3c52f6645c88f409a3fca8",
"main.dart.js": "1c17e91ca9a851da126878673c512746",
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
