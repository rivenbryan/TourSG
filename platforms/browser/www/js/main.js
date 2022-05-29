






$(document).on('pagecreate', '#tour1', function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "esri/widgets/ScaleBar",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        ScaleBar
    ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });
            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });
            var view = new MapView({
                container: "tourmap1",
                map: map,
                center: [103.848579, 1.296674],
                zoom: 18
            });
            var scalebar = new ScaleBar({
                view: view
            });
            view.ui.add(scalebar, "bottom-left");
        });
});

$(document).on("pagecreate", "#tour1part2", function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "dojo/dom",
        "dojo/on",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        dom,
        on
    ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });

            var transportlayer = new KMLLayer({
                url: "https://www.arcgis.com/sharing/rest/content/items/eacb56b4cfed48499427f35801a7d3f5/data"
            })

            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });

            map.add(transportlayer);

            var view = new MapView({
                container: "tourmap2",
                map: map,
                center: [103.848579, 1.296674],
                zoom: 15
            });
            var streetsLyrToggle = dom.byId("streetsLyr");

            on(streetsLyrToggle, "change", function () {
                transportlayer.visible = streetsLyrToggle.checked;
            });
        });

});

$(document).on('pagecreate', '#tour2', function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "esri/widgets/ScaleBar",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        ScaleBar
    ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });
            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });
            var view = new MapView({
                container: "tourmap3",
                map: map,
                center: [103.850751, 1.287768],
                zoom: 18
            });
            var scalebar = new ScaleBar({
                view: view
            });
            view.ui.add(scalebar, "bottom-left");
        });
});

$(document).on("pagecreate", "#tour2part2", function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });

            var transportlayer = new KMLLayer({
                url: "https://www.arcgis.com/sharing/rest/content/items/eacb56b4cfed48499427f35801a7d3f5/data"
            })

            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });

            map.add(transportlayer);

            var view = new MapView({
                container: "tourmap4",
                map: map,
                center: [103.850751, 1.287768],
                zoom: 18
            });
        });

});

$(document).on('pagecreate', '#tour3', function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "esri/widgets/ScaleBar",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        ScaleBar
    ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });
            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });
            var view = new MapView({
                container: "tourmap5",
                map: map,
                center: [103.854498, 1.286812],
                zoom: 18
            });
            var scalebar = new ScaleBar({
                view: view
            });
            view.ui.add(scalebar, "bottom-left");
        });
});

$(document).on("pagecreate", "#tour3part2", function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });

            var transportlayer = new KMLLayer({
                url: "https://www.arcgis.com/sharing/rest/content/items/eacb56b4cfed48499427f35801a7d3f5/data"
            })

            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });

            map.add(transportlayer);

            var view = new MapView({
                container: "tourmap6",
                map: map,
                center: [103.854498, 1.286812],
                zoom: 18
            });
        });

});

$(document).on('pagecreate', '#tour4', function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "esri/widgets/ScaleBar",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        ScaleBar
    ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });
            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });
            var view = new MapView({
                container: "tourmap7",
                map: map,
                center: [103.834776, 1.303564],
                zoom: 18
            });
            var scalebar = new ScaleBar({
                view: view
            });
            view.ui.add(scalebar, "bottom-left");
        });
});

$(document).on("pagecreate", "#tour4part2", function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });

            var transportlayer = new KMLLayer({
                url: "https://www.arcgis.com/sharing/rest/content/items/eacb56b4cfed48499427f35801a7d3f5/data"
            })

            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });

            map.add(transportlayer);

            var view = new MapView({
                container: "tourmap8",
                map: map,
                center: [103.834776, 1.303564],
                zoom: 18
            });
        });

});

$(document).on('pagecreate', '#tour5', function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "esri/widgets/ScaleBar",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        ScaleBar
    ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });
            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });
            var view = new MapView({
                container: "tourmap9",
                map: map,
                center: [103.863763, 1.281547],
                zoom: 16
            });
            var scalebar = new ScaleBar({
                view: view
            });
            view.ui.add(scalebar, "bottom-left");
        });
});

$(document).on("pagecreate", "#tour5part2", function () {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/KMLLayer",
        "dojo/domReady!"
    ], function (
        Map,
        MapView,
        KMLLayer,
        ) {
            var layer = new KMLLayer({
                url: "http://www.arcgis.com/sharing/rest/content/items/7d9d9ae6c1d2407a8e2d2bc80ab35e6c/data" // lane closures from California Dept of Transportation
            });

            var transportlayer = new KMLLayer({
                url: "https://www.arcgis.com/sharing/rest/content/items/eacb56b4cfed48499427f35801a7d3f5/data"
            })

            var map = new Map({
                basemap: "topo",
                layers: [layer]
            });

            map.add(transportlayer);

            var view = new MapView({
                container: "tourmap10",
                map: map,
                center: [103.863763, 1.281547],
                zoom: 18
            });
        });

});
$(document).ready(function () {
    $("#pageone").on("swiperight", function (event, ui) {
        $("#mypanel").panel("open");
    });
});
/*
$(document).on('swipeleft', '#tour1, #tour2, #tour3, #tour4, #tour5', function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;         
});

$(document).on('swiperight',  '#tour2, #tour3, #tour4, #tour5', function(event){     
    if(event.handled !== true) // This will prevent event triggering more then once
    {      
        var prevpage = $(this).prev('[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;            
}); */