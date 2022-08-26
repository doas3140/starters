# Image Superresolution Server

First select cpu or gpu env then do following:

`bash cp environment.gpu.yml environment.yml`

`change base image in Dockerfile`

`change PROJECT in .env`

`change docker-compose.yaml search for [GPU:enable] [CPU:disable]`

`change repo_name in settings.ini`



## Setup Dev

```bash
docker-compose up --build
# for notebooks goto localhost:8010
# for api goto localhost:8006/docs
```

## Install Lib And Update Environment

```bash
source .env; docker exec -it ${PROJECT}_nbs bash
conda install nbdev
conda env export -n base > /data/environment.gpu.yml
docker-compose up --build
```
