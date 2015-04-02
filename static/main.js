var evtSource = new EventSource('/events');

var eventList = document.getElementById('events');
evtSource.addEventListener('pkg', function(evt) {
  var newElement = document.createElement("li");
  
  var pkg = JSON.parse(evt.data);
  console.debug('pkg:', pkg);

  newElement.innerHTML = '['+ pkg.platform +'] New Package: ' + pkg.name;
  eventList.appendChild(newElement);
}, false);
