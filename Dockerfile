FROM node:8

WORKDIR /home

COPY . /home


RUN npm install .

EXPOSE 5000 

ENTRYPOINT [ "sh", "-c", "npm start" ]

