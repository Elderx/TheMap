/*
L.Util.template = function (str, data) {
      return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
        var value = data[key];
        if (!data.hasOwnProperty(key)) {
          throw new Error('No value provided for variable ' + str);
        } else if (typeof value === 'function') {
          value = value(data);
        }

        return value;
      });
    }
*/


/*---------- BASEMAPS ----------*/

var openStreetMap = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	maxZoom: 18
});

var tourist = new L.TileLayer('http://{s}.tile.cloudmade.com/70b5f93d0bb44ff9bc7a5a33336685c1/7/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
	maxZoom: 18
});

var night = new L.TileLayer('http://{s}.tile.cloudmade.com/70b5f93d0bb44ff9bc7a5a33336685c1/999/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
	maxZoom: 18
});

var taustakartta = new L.TileLayer('http://{s}.kartat.kapsi.fi/taustakartta/{z}/{x}/{y}.png', {
	attribution: 'Kartta: Maanmittauslaitos',
	maxZoom: 18,
	subdomains: ['tile1', 'tile2']
});

var peruskartta = new L.TileLayer('http://{s}.kartat.kapsi.fi/peruskartta/{z}/{x}/{y}.png', {
	attribution: 'Kartta: Maanmittauslaitos',
	maxZoom: 18,
	subdomains: ['tile1', 'tile2']
});

var ortokuva = new L.TileLayer('http://{s}.kartat.kapsi.fi/ortokuva/{z}/{x}/{y}.png', {
	attribution: 'Kartta: Maanmittauslaitos',
	maxZoom: 18,
	subdomains: ['tile1', 'tile2']
});

var thunderOutdoors = new L.TileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
    attribution: 'Thunderforest Outdoors',
    maxZoom: 18,
    subdomains: ['a', 'b', 'c']
});

var thunderLandscape = new L.TileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
    attribution: 'Thunderforest Landscape',
    maxZoom: 18,
    subdomains: ['a', 'b', 'c']
});

var blueMarble = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jul/{z}/{x}/{y}.png', {
	attribution: 'MapBox BlueMarble',
	maxZoom: 8,
	subdomains: ['a', 'b']
});

var worldBLue = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/mapbox.world-blue/{z}/{x}/{y}.png', {
	attribution: 'MapBox World Blue',
	maxZoom: 8,
	subdomains: ['a', 'b']
});

var earthAtNight = new L.TileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.jpg', {
    time: '',
    attribution:
                    'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System ' +
                    '(<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
    minZoom: 1,
    maxZoom: 8,
    tilematrixset: 'GoogleMapsCompatible_Level'

});

var ggl = new L.Google();
var ggl2 = new L.Google('TERRAIN');






/*---------- OVERLAYS ----------*/

var higkingOverlay = new L.TileLayer('http://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', {
	attribution: '',
	maxZoom: 18
});

var bordersOverlayDark = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/mapbox.world-bank-borders-en/{z}/{x}/{y}.png', {
	attribution: 'MapBox BlueMarble',
	maxZoom: 18,
	subdomains: ['a', 'b']
});

var bordersOverlayLight = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/mapbox.world-borders-light/{z}/{x}/{y}.png', {
	attribution: 'MapBox BlueMarble',
	maxZoom: 18,
	subdomains: ['a', 'b']
});

var geoCachesOverlay = new L.TileLayer('http://{s}.geocaching.com/map.png?x={x}&y={y}&z={z}&k=TT4f&st=&ep=1', {
	attribution: 'Geocaching.com',
	maxZoom: 18,
	subdomains: ['tiles01', 'tiles02', 'tiles03', 'tiles04']
});

var blitzortungOverlay = new L.TileLayer('http://www.blitzortung.org/Scripts_php/php_get_tile.php?x={x}&y={y}&z={z}&t=1023&min=7924298', {
    attribution: 'Blitzortung.org',
    maxZoom: 18
});


var elisaLTEOverlay = new L.TileLayer('http://coveragemap-api.elisa.fi/tiles/service/gmaps?layers=elisa:LTE&zoom={z}&x={x}&y={y}&format=image/png', {
    attribution: 'Elisa Oyj',
    maxZoom: 18,
    opacity: 0.3
});

var soneraLTEOverlay = new L.TileLayer.WMS('http://coverageportal.netcom.no/gcp/tile?services=LTE_DATA&qualities=1&COUNTRYID=FI_TELIASONERA-CP&serviceGroup=mobile_broadband', {
    attribution: 'Teliasonera Finland Oyj',
    format: 'img/png',
    transparent: true,
    opacity: 0.3,
    layers: 16
});

var elisa3GOverlay = new L.TileLayer('http://coveragemap-api.elisa.fi/tiles/service/gmaps?layers=elisa:WCDMA&zoom={z}&x={x}&y={y}&format=image/png', {
    attribution: 'Elisa Oyj',
    maxZoom: 18,
    opacity: 0.3
});

var sonera3GOverlay = new L.TileLayer.WMS('http://coverageportal.netcom.no/gcp/tile?services=HSDPA&qualities=1&COUNTRYID=FI_TELIASONERA-CP&serviceGroup=mobile_broadband', {
    attribution: 'Teliasonera Finland Oyj',
    format: 'img/png',
    transparent: true,
    opacity: 0.3,
    layers: 16
});



/*
var wikiMapiaOverlay = new L.TileLayer('http://i{s}.wikimapia.org/?x={x}&y={y}&zoom={z}', {
	attribution: 'Geocaching.com',
	maxZoom: 18,
	subdomains: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ]
});
*/


var map = L.map('map', {
    center: new L.LatLng(61.483, 21.799),
    zoom: 5,
    layers: [openStreetMap]
});

var baseLayers = {
    "OpenStreetMap": openStreetMap,
    "Tourist": tourist,
    "Night": night,
    "Taustakartta": taustakartta,
    "Peruskartta": peruskartta,
    "Ortokuva": ortokuva,
    "BlueMarble": blueMarble,
    "Countries": worldBLue,
    "Google":ggl,
    "Google terrain":ggl2,
    "Thunderforest Outdoors": thunderOutdoors,
    "Thunderforest Landscape": thunderLandscape,
    "Earth at night": earthAtNight
};

var overlayMaps = {
    "Hiking": higkingOverlay,
    "Borders Dark": bordersOverlayDark,
    "Borders Light": bordersOverlayLight,
    "GeoCaches": geoCachesOverlay,
    "Blitzortung": blitzortungOverlay,
    "Elisa LTE Coverage": elisaLTEOverlay,
    "Sonera LTE Coverage": soneraLTEOverlay,
    "Elisa 3G Coverage": elisa3GOverlay,
    "Sonera 3G Coverage": sonera3GOverlay
};

L.control.layers(baseLayers, overlayMaps).addTo(map);



/* Show coordinates */
L.control.coordinates({
    position:"bottomleft", //optional default "bootomright"
    decimals:4, //optional default 4
    decimalSeperator:".", //optional default "."
    labelTemplateLat:"Latitude: {y}", //optional default "Lat: {y}"
    labelTemplateLng:"Longitude: {x}", //optional default "Lng: {x}"
    enableUserInput:true, //optional default true
    useDMS:false, //optional default false
    useLatLngOrder: true //ordering of labels, default false-> lng-lat
}).addTo(map);

/* Distance measurement tool */
var d = new L.Control.Distance(); map.addControl(d);
map.addControl(new L.Control.Permalink({line: d.getLine(), useLocation: true}));

/* Search tool */
new L.Control.GeoSearch({
    provider: new L.GeoSearch.Provider.Google()
}).addTo(map);

/* Load and show .gpx file */
/*
var gpx = 'testi.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, {async: true}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds());
}).addTo(map);
*/

