# AUTOGENERATED! DO NOT EDIT! File to edit: src/00_core.ipynb (unless otherwise specified).

__all__ = ['relpath', 'config', 'say_hello', 'test_model']

# Cell
import sys
import os
def relpath(filepath):
    return os.path.join('../', filepath)
    inJupyter = sys.argv[-1].endswith('json')
    if inJupyter:
        return  os.path.join('../', filepath)
    return filepath

# Cell
from dotenv import dotenv_values

config = dict(dotenv_values('../.env'))
config

# Cell
def say_hello(to):
    return f'Hi {to}!'

# Cell
def test_model():
    return open(relpath("models/test_model.txt"), "r").read()