# Repo Recovery Notes

## Important lesson
Quand on travaille dans GitHub web avec un format structuré, il ne faut jamais copier les libellés dans le contenu réel des fichiers.

## Files that were sensitive
- `frontend/tsconfig.json`
- `frontend/next-env.d.ts`
- `frontend/app/layout.tsx`
- `frontend/app/components/IndicatorList.tsx`

## Known good frontend structure
- `frontend/app/page.tsx`
- `frontend/app/layout.tsx`
- `frontend/app/globals.css`
- `frontend/app/dashboard.css`
- `frontend/app/components/IndicatorList.tsx`
- `frontend/app/components/MetricCard.tsx`
- `frontend/app/components/RecommendationCard.tsx`
- `frontend/app/components/UserSwitch.tsx`
- `frontend/next-env.d.ts`
- `frontend/tsconfig.json`

## Recovery rule
Avant de tester un build :
- vérifier visuellement les premières lignes des fichiers sensibles
- s’assurer qu’aucun mot parasite n’apparaît
- vérifier que Vercel déploie bien la branche main

## Safe workflow
1. modifier dans GitHub web
2. vérifier le fichier après commit
3. attendre le build Vercel
4. seulement ensuite reprendre les changements suivants
