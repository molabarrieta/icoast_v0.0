// example.js
var map = L.map('map', {
    zoom: 10,
    center: [29, -83],
    timeDimension: true,
    timeDimensionOptions: {
        timeInterval: "2014-01-01/2014-01-30",
        period: "PT1H"
    },
    timeDimensionControl: true,
});
 
var wmsUrl = "http://thredds.socib.es/thredds/wcs/hf_radar/hf_radar_ibiza-scb_codarssproc001/L1/2014/dep0001_hf-radar-ibiza_scb-codarssproc001_L1_2014-01.nc"
var wmsLayer = L.tileLayer.wms(wmsUrl, {
    layers: 'sea_water_velocity',
    format: 'image/png',
    transparent: true,
    attribution: 'SOCIB HF RADAR | sea_water_velocity'
});
 
var baseLayers = getCommonBaseLayers(map); // see baselayers.js
L.control.layers(baseLayers, overlayMaps).addTo(map);

// Create and add a TimeDimension Layer to the map
var tdWmsLayer = L.timeDimension.layer.wms(wmsLayer);
tdWmsLayer.addTo(map);