# Galerie Bon Heritage

Site vitrine statique de la Galerie Bon Heritage, a Kigali.

## Ouvrir le site localement

Ouvrir `index.html` dans un navigateur. Les images du catalogue sont dans `assets/`.

## Formulaire de contact

Le formulaire envoie ses demandes a Formspree avec l'adresse de formulaire
`https://formspree.io/f/xppdwkol`. Il utilise une requete `POST` et affiche
un message de succes ou d'erreur sur la page.

## Publication

Adresse principale : <https://galeriebonheritage.pages.dev/>.

Le site est publie sur Cloudflare Pages par televersement direct. Pour publier
une mise a jour, creer un deploiement dans **Workers & Pages**, puis televerser
le dossier contenant `index.html`, `script.js`, `style.css` et `assets/`.
Eviter les archives ZIP creees sous Windows : leurs chemins internes peuvent
empecher Cloudflare de retrouver les images.

Le depot conserve aussi son deploiement GitHub Pages automatique :
chaque push sur `main` lance `.github/workflows/pages.yml` et publie
<https://nkurunzizaabdoulhakim-cpu.github.io/Site-web/>.
