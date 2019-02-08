# Libraries Firehose

Server sent event bridge for the [Libraries.io](https://libraries.io) events firehose.

## Event timing

The Libraries.io events firehose allows you to consume new upstream release
events in near-realtime.

The main [libraries.io dispatch
application](https://libraries.io/github/librariesio/dispatch) polls several
upstream repository feeds every 30 seconds. For GitHub specifically, the
dispatch app watches the [server-sent event stream for
GitHub](https://github.com/librariesio/github-firehose).

Your new release event should show up in the libraries.io firehose in less than
one minute, although the [GitHub Event API is delayed by five
minutes](https://github.blog/changelog/2018-08-01-new-delay-public-events-api/).

## Development

Source hosted at [GitHub](http://github.com/librariesio/firehose).
Report issues/feature requests on [GitHub Issues](http://github.com/librariesio/firehose/issues). Follow us on Twitter [@librariesio](https://twitter.com/librariesio). We also hangout on [Gitter](https://gitter.im/librariesio/support).

### Note on Patches/Pull Requests

 * Fork the project.
 * Make your feature addition or bug fix.
 * Add tests for it. This is important so I don't break it in a
   future version unintentionally.
 * Add documentation if necessary.
 * Commit, do not change procfile, version, or history.
 * Send a pull request. Bonus points for topic branches.

## Copyright

Copyright (c) 2016 Mauro Pompilio. See [LICENSE](https://github.com/librariesio/firehose/blob/master/LICENSE) for details.
