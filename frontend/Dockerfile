# ── Stage 1: Dependencies ──────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ── Stage 2: Build ──────────────────────────────────
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV RESEND_API_KEY="re_build_dummy_key"
ENV NEXT_PUBLIC_SUPABASE_URL="https://dummy.supabase.co"
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY="dummy-key"
ENV SUPABASE_SERVICE_ROLE_KEY="dummy-key"
RUN npm run build

# ── Stage 3: Runner ─────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy standalone output & static assets
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
