Contenu
# Script de démo — ALL IN Montréal

## Objectif de la démo
Montrer un MVP crédible, utile et démontrable du Passeport Cognitif, sans prétendre mesurer objectivement l’intelligence. Le système présente un profil d’apprentissage dynamique fondé sur des données observables, des indicateurs interprétables et des recommandations pédagogiques personnalisées.

## Message d’ouverture
Le Passeport Cognitif est un module LMS qui agrège des données pédagogiques afin de produire un profil apprenant utile à la personnalisation des parcours, au suivi de progression et à la recommandation d’activités. Le MVP présenté aujourd’hui ne repose pas sur un scoring opaque ni sur des inférences déterministes. Il met l’accent sur la transparence, la lisibilité et la valeur démontrable.

## Déroulé recommandé

### 1. Introduction
Ouvrir la page principale du frontend déployé sur Vercel.

Message à dire :
Voici le dashboard MVP du Passeport Cognitif. Il s’agit d’un profil apprenant dynamique intégré à notre environnement LMS.

### 2. Présenter la logique du profil
Montrer la section “Profil apprenant”.

Message à dire :
Le profil affiché repose sur des données observables. Nous distinguons clairement trois niveaux : les données, leur interprétation pédagogique, puis les recommandations proposées.

### 3. Montrer les indicateurs globaux
Montrer les cartes :
- Progression
- Confiance
- Engagement

Message à dire :
Ces indicateurs sont lisibles et interprétables. Ils ne prétendent pas représenter une intelligence générale. Ils servent à guider l’accompagnement pédagogique.

### 4. Montrer les indicateurs détaillés
Montrer la section “Forces et axes d’amélioration”.

Message à dire :
Ici, le système met en évidence les domaines où l’apprenant progresse bien et ceux qui nécessitent un soutien supplémentaire.

### 5. Montrer les recommandations
Montrer la section “Prochaines actions proposées”.

Message à dire :
À partir du profil actuel, le système recommande des modules ciblés. L’objectif est de personnaliser le parcours de manière simple, explicable et directement exploitable.

### 6. Démontrer la variation entre utilisateurs
Passer de `?user=1` à `?user=2`.

Message à dire :
La valeur du MVP apparaît ici : deux utilisateurs différents produisent deux profils différents et donc deux ensembles de recommandations distincts.

### 7. Conclusion
Message à dire :
Ce MVP montre qu’il est possible d’intégrer dans un LMS un profil apprenant dynamique, lisible et utile à la personnalisation, sans tomber dans des promesses pseudo-scientifiques.

## Points clés à marteler
- profil d’apprentissage, pas mesure de l’intelligence
- données observables
- indicateurs interprétables
- recommandations pédagogiques personnalisées
- variation visible entre utilisateurs
- intégration LMS
- valeur démontrable immédiate

## URLs de démonstration
- Frontend Vercel : vérifier le domaine actif du projet
- Utilisateur 1 : `/?user=1`
- Utilisateur 2 : `/?user=2`
- Backend Render :
  - `/dashboard/1`
  - `/dashboard/2`

## Plan B en cas de problème
Si le backend répond lentement ou échoue temporairement :
- montrer l’écran d’erreur frontend
- expliquer que l’architecture reste server-side
- rappeler que la logique multi-user et les routes backend sont déjà en place
