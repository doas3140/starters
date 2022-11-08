# AUTOGENERATED! DO NOT EDIT! File to edit: ../04_server_functions.ipynb.

# %% auto 0
__all__ = ['FastApi', 'Ping']

# %% ../04_server_functions.ipynb 2
from .core import say_hello, test_model, relpath

# %% ../04_server_functions.ipynb 3
import cv2
import io
import numpy as np

class FastApi:
    async def file2np_img(image):
        contents = await image.read()
        nparr = np.fromstring(contents, np.uint8)
        im = cv2.imdecode(nparr, cv2.IMREAD_UNCHANGED)
        # if im.shape[2] == 4:
        #     img = im[:,:,:3]
        #     mask = im[:,:,3][:,:,None] / 255
        #     im = (img * mask) + (np.ones_like(img)*255 * (1-mask))
        #     im = np.array(im, np.uint8)
        im = im[:,:,::-1]
        return im
    
    def np_img2bytes(np_img):
        np_img = np_img[:,:,::-1]
        res, im_png = cv2.imencode(".png", np_img)
        return io.BytesIO(im_png.tobytes())

# %% ../04_server_functions.ipynb 4
class Ping:
    def ping():
        return {"Hello": say_hello('world')}
    
    def ping_model():
        return {"Hello": test_model()}
    
    def ping_write_image():
        return cv2.imread(relpath('data/test.png'))
    
    def ping_read_image(np_img):
        return {"Hello": str(np_img.shape)}