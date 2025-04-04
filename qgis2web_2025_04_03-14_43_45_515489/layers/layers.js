ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-131.585394, -106.928566, 158.420950, 146.128821]);
var wms_layers = [];


        var lyr_ESRITerrain_0 = new ol.layer.Tile({
            'title': 'ESRI Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1 = new ol.format.GeoJSON();
var features_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1 = format_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1.readFeatures(json_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1.addFeatures(features_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1);
var lyr_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1, 
                style: style_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1,
                popuplayertitle: 'Major_Aquifers_of_the_World — Major__Aquifers.shp',
                interactive: true,
    title: 'Major_Aquifers_of_the_World — Major__Aquifers.shp<br />\
    <img src="styles/legend/Major_Aquifers_of_the_WorldMajor__Aquifersshp_1_0.png" /> Human-Dominated Variable Stress<br />\
    <img src="styles/legend/Major_Aquifers_of_the_WorldMajor__Aquifersshp_1_1.png" /> Overstressed<br />\
    <img src="styles/legend/Major_Aquifers_of_the_WorldMajor__Aquifersshp_1_2.png" /> Unstressed<br />\
    <img src="styles/legend/Major_Aquifers_of_the_WorldMajor__Aquifersshp_1_3.png" /> Variable Stress<br />\
    <img src="styles/legend/Major_Aquifers_of_the_WorldMajor__Aquifersshp_1_4.png" /> <br />' });

lyr_ESRITerrain_0.setVisible(true);lyr_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1.setVisible(true);
var layersList = [lyr_ESRITerrain_0,lyr_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1];
lyr_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WROB0_CONT': 'WROB0_CONT', 'HYGEO': 'HYGEO', 'Aquifer_sy': 'Aquifer Name', 'Storage_Tr': 'Storage_Tr', 'Stress_Cla': 'Stress_Cla', 'Pop': 'Pop', });
lyr_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1.set('fieldImages', {'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'WROB0_CONT': 'Hidden', 'HYGEO': 'Hidden', 'Aquifer_sy': 'TextEdit', 'Storage_Tr': 'TextEdit', 'Stress_Cla': 'TextEdit', 'Pop': 'Hidden', });
lyr_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1.set('fieldLabels', {'Aquifer_sy': 'inline label - always visible', 'Storage_Tr': 'inline label - always visible', 'Stress_Cla': 'inline label - always visible', });
lyr_Major_Aquifers_of_the_WorldMajor__Aquifersshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});