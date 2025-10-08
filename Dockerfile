# =============================
# 1️⃣ BUILD STAGE
# =============================
FROM node:20-alpine AS builder

WORKDIR /app

# Corepack 활성화 (Yarn 4.x 사용)
RUN corepack enable

# 패키지 설치 (yarn 사용)
COPY package.json yarn.lock ./
COPY .yarnrc.yml ./ 
COPY .yarn ./.yarn
RUN yarn install --immutable

# 프로젝트 복사 및 빌드
COPY . .
RUN yarn build

# =============================
# 2️⃣ RUN STAGE (경량 런타임)
# =============================
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# 빌드 산출물만 복사
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
