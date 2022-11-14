from fastapi import APIRouter, File, UploadFile
from fastapi.responses import StreamingResponse

from nbs.server_functions import FastApi, PingFastai

router = APIRouter()

@router.get("/ping-fastai-pets")
async def ping_fastai_pets(file: UploadFile = File(...)):
    img = await FastApi.file2np_img(file)
    return PingFastai.ping_fastai_pets(img)