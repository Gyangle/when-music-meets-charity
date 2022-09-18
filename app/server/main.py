from typing import Union
from fastapi import FastAPI

app = FastAPI()


@app.get("/api")
def read_root():
    return {"Hello": "World"}


@app.get("/api/ping")
def read_root():
    return 200
