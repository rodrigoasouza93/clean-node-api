FROM node:14

WORKDIR /usr/src/app

COPY ["./package.json", "./package-lock.json", "./"]

COPY . .

EXPOSE 5050

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
