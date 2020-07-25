# BUILD STAGE

FROM node:13.2.0 AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm ci --quiet && npm run build


# PRODUCTION STAGE
FROM node:13.2.0
RUN mkdir -p /dist
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
# RUN npm ci --quiet --only=production
RUN npm ci --quiet --only=production

# We just need the build to execute the command
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 9090

CMD ["npm","start"]
