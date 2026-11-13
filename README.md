# Galerie Bon Heritage

Site vitrine statique de la Galerie Bon Heritage, a Kigali.

## Ouvrir le site localement

Ouvrir `index.html` dans un navigateur. Les images du catalogue sont dans `assets/`.

## Formulaire de contact

Le formulaire envoie ses demandes a Formspree avec l'adresse de formulaire
`https://formspree.io/f/xppdwkol`. Il utilise une requete `POST` et affiche
un message de succes ou d'erreur sur la page.

## Publication

La branche `main` est publiee par GitHub Actions vers GitHub Pages. Chaque
push sur `main` lance le workflow `.github/workflows/pages.yml`.

Adresse attendue : <https://nkurunzizaabdoulhakim-cpu.github.io/Site-web/>

Dans GitHub, verifier le workflow dans **Actions** puis la cible dans
**Settings > Pages**. Si GitHub indique que Pages n'est pas disponible pour
ce depot prive, garder le depot prive et choisir un hebergeur compatible,
ou confirmer explicitement que le depot peut devenir public.
