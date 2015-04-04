var evtSource = new EventSource('/events');
var eventList = document.getElementById('events');

evtSource.addEventListener('pkg', function(evt) {
  var pkg = JSON.parse(evt.data);
  console.debug('pkg:', pkg);
  addToList(pkg)
}, false);

function addToList (pkg) {
  eventList.appendChild(createMediaItem(pkg));
}

function createMediaItem (pkg) {
  var item = document.createElement('li');
  item.className = 'media'

  var left = document.createElement('div');
  left.className = 'media-left';

  var obj = document.createElement('div');
  obj.className = 'media-object';
  obj.appendChild(createPictogram(pkg.platform));

  left.appendChild(obj);

  var body = document.createElement('a');
  body.className = 'media-body';
  body.setAttribute('href', toLibrariesUrl(pkg));

  var heading = document.createElement('h4');
  heading.className = 'media-heading';
  heading.innerHTML = pkg.name;

  var text = document.createElement('p');
  text.innerHTML = pkg.platform + ' - ' + pkg.name + ' - v' + pkg.version;

  body.appendChild(heading);
  body.appendChild(text);

  item.appendChild(left);
  item.appendChild(body);
  return item;
}

function createPictogram (platform) {
  var pictogram = document.createElement('div');
  pictogram.className = 'pictogram pictogram-lg pictogram-' + platform;
  pictogram.setAttribute('title', platform);
  return pictogram;
}

function toLibrariesUrl(pkg) {
  return 'http://libraries.io/' + [pkg.platform, pkg.name].join('/')
}
