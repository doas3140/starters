# Notebooks

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

```bash
# list sizes of all packages
pip list | tail -n +3 | awk '{print $1}' | xargs pip show | grep -E 'Location:|Name:' | cut -d ' ' -f 2 | paste -d ' ' - - | awk '{print $2 "/" tolower($1)}' | xargs du -sh 2> /dev/null | sort -hr
```
