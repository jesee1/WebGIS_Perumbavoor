var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pbvrward_2 = new ol.format.GeoJSON();
var features_pbvrward_2 = format_pbvrward_2.readFeatures(json_pbvrward_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pbvrward_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pbvrward_2.addFeatures(features_pbvrward_2);
var lyr_pbvrward_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pbvrward_2, 
                style: style_pbvrward_2,
                popuplayertitle: 'pbvr-ward',
                interactive: true,
    title: 'pbvr-ward<br />\
    <img src="styles/legend/pbvrward_2_0.png" /> ASRAMAM<br />\
    <img src="styles/legend/pbvrward_2_1.png" /> ASRAMAM NORTH<br />\
    <img src="styles/legend/pbvrward_2_2.png" /> CATTLE MARKET<br />\
    <img src="styles/legend/pbvrward_2_3.png" /> FIRESTATION<br />\
    <img src="styles/legend/pbvrward_2_4.png" /> K S R T C<br />\
    <img src="styles/legend/pbvrward_2_5.png" /> KADUVAL<br />\
    <img src="styles/legend/pbvrward_2_6.png" /> KANJIRAKKAD L P SCHOOL<br />\
    <img src="styles/legend/pbvrward_2_7.png" /> KANJIRAKKAD NORTH<br />\
    <img src="styles/legend/pbvrward_2_8.png" /> KANJIRAKKAD SOUTH<br />\
    <img src="styles/legend/pbvrward_2_9.png" /> KARATTUPALLIKKARA<br />\
    <img src="styles/legend/pbvrward_2_10.png" /> KUNNAMPILLY CHIRA<br />\
    <img src="styles/legend/pbvrward_2_11.png" /> LIBRARY<br />\
    <img src="styles/legend/pbvrward_2_12.png" /> MARUTH KAVALA<br />\
    <img src="styles/legend/pbvrward_2_13.png" /> MUNICIPAL OFFICE<br />\
    <img src="styles/legend/pbvrward_2_14.png" /> NAGANCHERY MANA<br />\
    <img src="styles/legend/pbvrward_2_15.png" /> NEELAMKULANGARA<br />\
    <img src="styles/legend/pbvrward_2_16.png" /> PANKULAM<br />\
    <img src="styles/legend/pbvrward_2_17.png" /> PARAPPURAM<br />\
    <img src="styles/legend/pbvrward_2_18.png" /> PERIYARVALLIE CLUB<br />\
    <img src="styles/legend/pbvrward_2_19.png" /> POOPPANY<br />\
    <img src="styles/legend/pbvrward_2_20.png" /> RAYONPURAM<br />\
    <img src="styles/legend/pbvrward_2_21.png" /> SASTHAMANGALAM<br />\
    <img src="styles/legend/pbvrward_2_22.png" /> SOUTH VALLAM<br />\
    <img src="styles/legend/pbvrward_2_23.png" /> THALUK HOSPITAL<br />\
    <img src="styles/legend/pbvrward_2_24.png" /> THRIKKAPARAMBU<br />\
    <img src="styles/legend/pbvrward_2_25.png" /> THURUTHIPARAMBU<br />\
    <img src="styles/legend/pbvrward_2_26.png" /> VALLAM NORTH<br />\
    <img src="styles/legend/pbvrward_2_27.png" /> VALLAM THODU<br />\
    <img src="styles/legend/pbvrward_2_28.png" /> VEGETABLE MARKET<br />\
    <img src="styles/legend/pbvrward_2_29.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_pbvrward_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_pbvrward_2];
lyr_pbvrward_2.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', 'Population': 'Population', });
lyr_pbvrward_2.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', 'Population': 'TextEdit', });
lyr_pbvrward_2.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', 'Population': 'no label', });
lyr_pbvrward_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});