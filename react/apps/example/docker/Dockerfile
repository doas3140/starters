########################
#         BUILDER      #
########################

# Install dependencies only when needed
# TODO: re-evaluate if emulation is still necessary on arm64 after moving to node 18
FROM --platform=linux/amd64 node:16-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat openssl
RUN npm install -g pnpm
WORKDIR /app

COPY turbo.json turbo.json
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY pnpm-workspace.yaml pnpm-workspace.yaml

# dependencies
COPY apps/example/package.json apps/example/package.json
COPY packages/eslint-config-custom/package.json packages/eslint-config-custom/package.json
COPY packages/tsconfig/package.json packages/tsconfig/package.json
COPY packages/ui/package.json packages/ui/package.json

# main
RUN pnpm install

# prisma
COPY apps/example/prisma apps/example/prisma
COPY apps/example/.env apps/example/.env
WORKDIR /app/apps/example
RUN npm run prisma generate

# files
WORKDIR /app
COPY apps/example apps/example
COPY packages/eslint-config-custom packages/eslint-config-custom
COPY packages/tsconfig packages/tsconfig
COPY packages/ui packages/ui

WORKDIR /app/apps/example

RUN npm run build

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]

# ########################
# #        RUNNER        #
# ########################

# # Production image, copy all the files and run next
# # TODO: re-evaluate if emulation is still necessary after moving to node 18
# FROM --platform=linux/amd64 node:16-alpine AS runner
# # WORKDIR /usr/app
# WORKDIR /app

# ENV NODE_ENV production
# # Uncomment the following line in case you want to disable telemetry during runtime.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# COPY --from=builder /app/apps/example/next.config.mjs ./
# COPY --from=builder /app/apps/example/public ./public
# COPY --from=builder /app/apps/example/package.json ./package.json

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/apps/example/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/apps/example/.next/static ./.next/static

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000

# CMD ["node", "server.js"]