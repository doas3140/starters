# DO THIS BEFORE EVERYTHING ELSE

## Required

First select cpu or gpu env then do following:

`run: cp environment.gpu.yml environment.yml`

`change base image in Dockerfile`

`change PROJECT in .env`

`change docker-compose.yaml search for [GPU:enable] [CPU:disable]`

`change repo_name in settings.ini`

## Optional

### Setup Task Runner

`https://taskfile.dev/installation/`

```bash
cd ~
wget https://raw.githubusercontent.com/go-task/task/master/completion/bash/task.bash
sudo mv task.bash /usr/local/bin/task.bash
chmod +x /usr/local/bin/task.bash
nano ~/.bashrc # or nano ~/.bash_profile
source /usr/local/bin/task.bash # <- add this line
```

```bash
# check installation by running
task version
```
