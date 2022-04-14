# Install Node.js image
FROM node:16

EXPOSE 8080

WORKDIR /usr/src/app

RUN npm install i npm@latest -g 

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY ./src ./src

RUN npm install

CMD npm run dev