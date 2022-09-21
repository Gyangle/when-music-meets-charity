# FastAPI
Install the fastapi and uvicorn dependencies from [FastAPI documentation](https://fastapi.tiangolo.com/#requirements). 

## To start the server using local enviroment: 
```
python3 -m uvicorn main:app --reload
```

## To start the server using virtual enviroment:
```
virtualenv .env && source .env/bin/activate && pip3 install -r requirements.txt
```
and 
```
python3 -m uvicorn main:app --reload
```
This will create the python virtual enviroment folder and install the dependencies in `./requirements.txt`
Use this to quit python virtual enviroment:
```
deactivate
```