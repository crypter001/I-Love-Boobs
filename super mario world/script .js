function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 29.931409, lng: 78.122589},
  zoom: 18,
  mapId: 'bd819ce13ede0215',
  mapTypeControl: false,
fullscreenControl: false,
streetViewControl: false
});
//Name
//longitude and latitude 
//image  url
// scaledSize, width, height
const markers = [
[
  "Mario\'s Castle",
    29.931409, 
    78.122589,
    "castle.png",
    38,
    31
],
[
  "hills",
   29.931420, 
  78.123086,
  "hills.png",
  38,
  31
]

];

  for(let i=0; i<markers.length; i++){
    const currMarker = markers[i];
     const marker =  new google.maps.Marker({
    position:{ lat: currMarker[1], lng:currMarker[2]},
    map,
    title: currMarker[0],
    icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
    },
     animation: google.maps.Animation.DROP,
  });

    const infowindow = new google.maps.InfoWindow({
    content: currMarker[0],
  });

   marker.addListener("click", () => {
    infowindow.open(map, marker);
  });


}
  }



//29.931409, 78.122589, 

