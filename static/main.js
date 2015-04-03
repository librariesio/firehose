var evtSource = new EventSource('/events');

var eventList = document.getElementById('events');
evtSource.addEventListener('pkg', function(evt) {
  var newElement = document.createElement("li");
  
  var pkg = JSON.parse(evt.data);
  console.debug('pkg:', pkg);

  var html = '['+ pkg.platform +'] '+ pkg.name +' '+ pkg.version;

  newElement.innerHTML = html;
  eventList.appendChild(newElement);
}, false);
