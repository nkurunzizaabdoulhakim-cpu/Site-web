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
une mise a jour, televerser a nouveau les fichiers statiques du site dans le
projet `galeriebonheritage` depuis **Workers & Pages** dans Cloudflare.

Le depot conserve aussi son deploiement GitHub Pages automatique :
chaque push sur `main` lance `.github/workflows/pages.yml` et publie
<https://nkurunzizaabdoulhakim-cpu.github.io/Site-web/>.
