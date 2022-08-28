## Prerequisities


In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

### Usage

```shell
docker build -t weatherapp:v1.0.0 .
```

```shell
docker run -d -p 3000:3000 weatherapp:v1.0.0
```
