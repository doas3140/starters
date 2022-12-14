# AUTOGENERATED! DO NOT EDIT! File to edit: ../05_fastai_utils.ipynb.

# %% auto 0
__all__ = ['ExamplePredictor']

# %% ../05_fastai_utils.ipynb 1
from .core import imread, imshow, imwrite
from fastai.vision.all import *

# %% ../05_fastai_utils.ipynb 2
class ExamplePredictor:
    path = '/app/' # because save/load appends ./models/ to this
    def __init__(self):
        pass
    
    def load_learner(self, model_name, path_to_images='/app/data/example_pets/'):
        self.learn = ExamplePredictor.init_learner(path_to_images, valid_pct=0)
        self.learn.load(model_name)
    
    def predict(self, np_img):
        img = PILImage.create(np_img)
        is_cat,_,probs = self.learn.predict(img)
        classes = self.learn.dls.vocab
        return [{'name': c, 'score': float(p)} for c,p in zip(classes, probs)]
    
    def init_learner(path='/app/data/example_pets/', pretrained=False, valid_pct=0.2):

        def label_func(x):
            return '_'.join(x.split('_')[:-1])
        dls = ImageDataLoaders.from_name_func(
            ExamplePredictor.path, get_image_files(path), valid_pct=valid_pct, seed=42, 
            label_func=label_func, item_tfms=Resize(224), num_workers=0)

        return vision_learner(dls, resnet18, metrics=error_rate, pretrained=pretrained)
