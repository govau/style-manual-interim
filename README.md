The interim home for the 7th Edition of the Style Manual.

## Developer information
This site is built with [Jekyll](http://jekyllrb.com/).

### Using Docker
Build the local Docker container:
```
docker build -t style-manual .
```

And run it while in the `interim-website` directory. This will resolve all application dependencies, serve over port 80 and watch over local changes.
```
docker run --rm --volume="$PWD:/workdir" -p 80:4000 -it style-manual
```

Point your browser to your docker host, eg `http://localhost/`
