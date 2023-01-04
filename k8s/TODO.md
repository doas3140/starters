# DO THIS BEFORE EVERYTHING ELSE

## Required

`https://taskfile.dev/installation/`

`edit environment variables in Taskfile.yaml`

```bash
git checkout -b dev
# edit Taskfile.yaml env to dev
task setup
task up # select test
git add . && git commit -m "dev. init." && git push

git checkout -b prod
# edit Taskfile.yaml env to prod
task setup
task up # select test
git add . && git commit -m "prod. init." && git push
```
