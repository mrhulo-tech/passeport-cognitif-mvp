# Frontend - Passeport Cognitif MVP

## Stack
- Next.js 14
- React 18
- server-side fetch vers le backend Render

## Architecture
Le frontend charge le dashboard côté serveur et consomme le backend Render.

Backend utilisé :
https://passeport-cognitif-mvp.onrender.com

## URLs de démonstration
- `/?user=1`
- `/?user=2`

## Structure utile
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `app/dashboard.css`
- `app/components/IndicatorList.tsx`
- `app/components/MetricCard.tsx`
- `app/components/RecommendationCard.tsx`
- `app/components/UserSwitch.tsx`

## Règles de stabilité
- ne pas revenir à `use client` pour le dashboard principal
- ne pas utiliser `useEffect` + fetch navigateur pour charger le dashboard
- conserver le fetch server-side
- préserver la logique multi-user par query param

## Build
```bash
npm install
npm run build
