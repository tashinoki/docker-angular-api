
# FROM python:3.6-alpine
FROM python:3.6

RUN mkdir application
WORKDIR /application

ADD requirements.txt /application/
RUN pip install -r requirements.txt