FROM python:3.9-alpine

WORKDIR /server

COPY ./requirements.txt /server/requirements.txt

RUN pip3 install --no-cache-dir --upgrade -r /server/requirements.txt

COPY ./main.py /server/

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

EXPOSE 8000