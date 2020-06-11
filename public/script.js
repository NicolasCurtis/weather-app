var mymap = L.map('worldmap',{
    center: [48.866667, 2,333333],
    zoom: 4,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(mymap);

  var cities = document.getElementsByClassName('list-group-item');

  var customIcon = L.icon({
    iconUrl: '/images/leaf-red.png',
    shadowUrl: '/images/leaf-shadow.png',
  
    iconSize:     [38, 95], 
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]
  });

for(let i =0; i<cities.length; i++) {
 var lon = cities[i].dataset.lon;
 var lat = cities[i].dataset.lat;
 var cityname = cities[i].dataset.cityname;
 L.marker([lat, lon], {icon: customIcon}).addTo(mymap).bindPopup(cityname).openPopup();
 
}