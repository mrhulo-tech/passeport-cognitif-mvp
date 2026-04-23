Contenu
# Frontend — Passeport Cognitif MVP

## Stack
- Next.js 14
- React 18
- server-side fetch vers le backend Render

## Principe d’architecture
Le frontend consomme le backend en server-side fetch afin d’éviter les problèmes de CORS côté navigateur. La logique multi-utilisateur est pilotée par le query parameter `user`.

## URLs de test
- `/?user=1`
- `/?user=2`

## Structure UI actuelle
- `app/page.tsx` : page principale dashboard
- `app/dashboard.css` : styles dédiés dashboard
- `app/components/MetricCard.tsx`
- `app/components/UserSwitch.tsx`
- `app/components/RecommendationCard.tsx`
- `app/components/IndicatorList.tsx`

## Lancer localement
```bash
npm install
npm run dev
