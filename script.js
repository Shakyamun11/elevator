function moveObject(stationNumber) {
    var object = document.getElementById('movingObject');
    var station = document.getElementById('station_' + stationNumber);

    var stationRect = station.getBoundingClientRect();

    object.style.transition = 'transform 0.5s ease-in-out';
    object.style.transform = 'translate(' + stationRect.left + 'px, ' + stationRect.top + 'px)';
}
