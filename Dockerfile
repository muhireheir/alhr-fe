
FROM node:18.16.1

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 4173

CMD ["pnpm", "run", "preview"]
