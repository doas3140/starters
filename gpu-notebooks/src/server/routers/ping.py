from fastapi import APIRouter, File, UploadFile
from fastapi.responses import StreamingResponse

import io
import cv2
import numpy as np

from nbs.core import say_hello, test_model, relpath
import os

router = APIRouter()

@router.get("/ping")
async def ping():
    return {"Hello": say_hello('world')}

@router.get("/ping-model")
async def ping_model():
    return {"Hello": test_model()}

@router.get("/ping-write-image")
async def ping_write_image():
    im = cv2.imread(relpath('data/test.png'))
    res, im_png = cv2.imencode(".png", im)
    return StreamingResponse(io.BytesIO(im_png.tobytes()), media_type="image/png")

@router.get("/ping-read-image")
async def ping_read_image(file: UploadFile = File(...)):
    contents = await file.read()
    nparr = np.fromstring(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return {"Hello": str(img.shape)}