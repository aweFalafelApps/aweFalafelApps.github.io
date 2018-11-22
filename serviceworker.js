addEventListener("install", onInstall);
addEventListener("activate", onActivate);
addEventListener("fetch", onFetch);
function onInstall(e) {
    console.log("ServiceWorker - Install");
    e.waitUntil(caches.open("progressive_blazor").then(function (cache) {
        return cache.addAll(files);
    }));
}
function onActivate(e) {
    console.log("ServiceWorker - Activate");
    console.log("typeof e: " + typeof e);
}
function onFetch(e) {
    console.log("ServiceWorker - Fetch");
    console.log(e.request.url);
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
    }));
}
var files = [
    "/",
    "/index.html",
    "/serviceworker.js",
    "/css/bootstrap/bootstrap.min.css",
    "/css/site.css",
    "/_framework/blazor.js",
    "/_framework/wasm/mono.js",
    "/_framework/wasm/mono.wasm",
    "/_framework/_bin/ProgressiveBlazor.dll",
    "/_framework/_bin/Microsoft.AspNetCore.Blazor.Browser.dll",
    "/_framework/_bin/Microsoft.AspNetCore.Blazor.dll",
    "/_framework/_bin/Microsoft.Extensions.DependencyInjection.Abstractions.dll",
    "/_framework/_bin/Microsoft.Extensions.DependencyInjection.dll",
    "/_framework/_bin/mscorlib.dll",
    "/_framework/_bin/netstandard.dll",
    "/_framework/_bin/System.Core.dll",
    "/_framework/_bin/System.dll",
    "/_framework/_bin/System.Net.Http.dll",
    "/css/open-iconic/font/fonts/open-iconic.woff",
    "/css/open-iconic/font/css/open-iconic-bootstrap.min.css"
];
//# sourceMappingURL=serviceworker.js.map