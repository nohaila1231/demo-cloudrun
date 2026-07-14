FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app .

ENV NODE_ENV=production

ENV PORT=8080

EXPOSE 8080

CMD ["npm","start"]