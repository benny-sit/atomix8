FROM node:16-alpine3.15
#RUN apk update; apk add git python make gcc alpine-sdk build-base
ADD . /node/

RUN cd /node ; npm update ; npm install
WORKDIR /node/frontend
RUN npm run build

RUN adduser -D appuser
USER appuser

WORKDIR /node
ENV NODE_ENV=production \
    SESS_NAME=sid \
    SESS_SECRET=dfjkgb483qfnMKXDDFBW8EFHK 

CMD ["npm","start"]
