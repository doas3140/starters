# DO THIS BEFORE EVERYTHING ELSE

First select cpu or gpu env then do following:

`run: cp environment.gpu.yml environment.yml`

`change base image in Dockerfile`

`change PROJECT in .env`

`change docker-compose.yaml search for [GPU:enable] [CPU:disable]`

`change repo_name in settings.ini`
