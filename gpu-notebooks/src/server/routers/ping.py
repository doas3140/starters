from fastapi import APIRouter, File, UploadFile
from fastapi.responses import StreamingResponse

from nbs.server_functions import FastApi, Ping

router = APIRouter()

VERSION = open('../VERSION','r').read()
@router.get("/version")
async def version():
    return VERSION

@router.get("/ping")
async def ping():
    return Ping.ping()

@router.get("/ping-model")
async def ping_model():
    return Ping.ping_model()

@router.get("/ping-write-image")
async def ping_write_image():
    im = Ping.ping_write_image()
    return StreamingResponse(FastApi.np_img2bytes(im), media_type="image/png")

@router.get("/ping-read-image")
async def ping_read_image(file: UploadFile = File(...)):
    img = await FastApi.file2np_img(file)
    return Ping.ping_read_image(img)