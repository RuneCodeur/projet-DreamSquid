version : 1.4.1
concept : DreamSquid est un générateur de texte aléatoire à destination des artistes/illustrateurs/scénaristes de tout niveau.

le projet est construit avec les languages HTML, SASS, Javascript et vue.js. 
Le projet est disponible à l'adresse suivante : https://dreamsquid.netlify.app

1
faire un signal sur la page search qui dit "aucune oeuvre à afficher"
2
optimiser le css
3
faire une page d'accueil pour optimiser le SEO

---------------
futur MAJ

2.0.0.0 integration de l'ajout des images par les utilisateurs
2.1.0.0 ajout de la recherche optimisé
2.2.0.0 ajout des likes
2.4.0.0 ajout de la version appli mobile en react native
3.0.0.0 ajout de la page defi

page du randomizer 		// le randomizer
page ajouter une image 	// pour ajouter une image,il faut d'abord creer un compte
page history 			// pour raconter l'origine du projet
page recherche 			// page recherche par theme et mots clés
page recherche mot clé	// page recherche par mot clés
page recherche user 	// page recherche par utilisateur
page connexion 			// pour se connecter ou creer un compte
page profil 			// page de son propre compte 
page option 			// pour modifier des trucs sur son compte
page message privé		// pour voir ses messages privées échangé avec un autre compte
page défi 				// bonus avec une description personalisé et temporalisé
---------------

--- routes du serveur node ---
route principale : https://dreamsquid.alwaysdata.net

ROUTES USERS

POST    /auth/signup
pour creer un compte. envoie un mail de confirmation à l'adresse mail. les infos doivent être envoyé au format suivant :
            mdp:{string} -> 5 caractères minimum
            pseudo:{string} -> entre 3 et 20 caractères, seuelement des chiffres, lettres majuscules/minuscules, et les tirets - _
            mail:{string} -> format email standard


PUT     /auth/validMail
pour valider l'accès au compte les infos doivent être envoyé au format suivant :
            id:{int} -> valeur ID de l'utilisateur qui valide le mail (présent dans le lien envoyé dans l'email)
            token:{string} -> token de validation (présent dans le lien envoyé dans l'email)


GET     /auth/login
pour connecter l'utilisateur à son compte. doit d'abord valider son compte avec la route /auth/validMail. les infos doivent être envoyé au format suivant :
            pseudo:{string} -> le pseudo de l'utilisateur qui souhaite se connecter
            mdp:{string} -> le mot de passe (en clair) de l'utilisateur qui souhaite se connecter

les infos renvoyé sont présenté comme ceci : 
            id: {int} -> la valeur ID de l'utilisateur
            pseudo: {string} -> le pseudo de l'utilisateur
            mail: {string} -> le mail de l'utilisateur
            token: {string} -> le token d'authentification. expire en 72h, httpOnly = true


PUT     /auth/modifyPseudo
pour modifier le pseudo de l'utilisateur. les infos doivent être envoyé au format suivant :
            newPseudo: {string} -> le nouveau pseudo de l'utilisateur
            oldPseudo: {string} -> l'ancien pseudo de l'utilisateur
            id: {int} -> la valeur ID de l'utilisateur


PUT     /auth/modifyMail
pour modifier l'adresse email de l'utilisateur. les infos doivent être envoyé au format suivant :
            newMail: {string} -> la nouvelle adresse email de l'utilisateur
            oldMail: {string} -> l'ancienne adresse email de l'utilisateur
            id: {int} -> la valeur ID de l'utilisateur


PUT     /auth/modifyPassword
pour modifier le mot de passe de l'utilisateur. les infos doivent être envoyé au format suivant :
            password: {string} -> le nouveau mot de passe (en clair) de l'utilisateur
            pseudo: {string} -> le pseudo de l'utilisateur
            id: {int} -> la valeur ID de l'utilisateur


GET     /auth/myDescri
pour recuperer la liste de toutes les descriptions enregistré par l'utilisateur. les infos doivent être envoyé au format suivant :
            id:{int} -> la valeur ID de l'utilisateur
            pseudo:{string} -> le pseudo de l'utilisateur
les infos renvoyé sont présenté comme ceci :
            descriptionRegistred: {json} -> toutes les descriptions enregistrés par l'utilisateur. au format json présenté comme ceci : [description1, description2, etc...]
            lastDescription: {json} -> la dernière description fait par l'utilisateur au format json. voir les differentes routes 'calculator' pour le format des infos



ROUTES CALCULATOR

GET     /calculator/pokemon
génère une description pokemon en public. les infos renvoyé sont présenté comme ceci :
            description : {string} -> la description généré
            type: {string} -> le type généré


GET     /calculator/RPG
génère une description de perso de RPG en public. les infos renvoyé sont présenté comme ceci :
            description : {string} -> la description généré
            alignement: {string} -> l'alignement du perso généré
            stats : {
                fo: {int} -> la stat de force
                dex: {int} -> la stat de dexterité
                co: {int} -> la stat de constitution
                int: {int} -> la stat d'inteligence
                sag: {int} -> la stat de sagesse
                cha: {int} -> la stat de charisme
            }


GET     /calculator/persona
génère une description de personnage en public. les infos renvoyé sont présenté comme ceci :
            description : {string} -> la description généré


GET     /calculator/chimera
génère une description de créature en public. les infos renvoyé sont présenté comme ceci :
            description : {string} -> la description généré


GET     /calculator/auth/pokemon
génère une description pokemon en privé. sauvegardé temporairement, jusquà la prochaine generation de description les infos doivent être envoyé au format suivant :
            id:{int} -> la valeur ID de l'utilisateur
            pseudo:{string} -> le pseudo de l'utilisateur
les infos renvoyé sont présenté comme ceci :
            description : {string} -> la description généré
            type: {string} -> le type généré


GET     /calculator/RPG
génère une description de perso de RPG en privé. sauvegardé temporairement, jusquà la prochaine generation de description les infos doivent être envoyé au format suivant :
            id:{int} -> la valeur ID de l'utilisateur
            pseudo:{string} -> le pseudo de l'utilisateur 
les infos renvoyé sont présenté comme ceci :
            description : {string} -> la description généré
            alignement: {string} -> l'alignement du perso généré
            stats : {
                fo: {int} -> la stat de force
                dex: {int} -> la stat de dexterité
                co: {int} -> la stat de constitution
                int: {int} -> la stat d'inteligence
                sag: {int} -> la stat de sagesse
                cha: {int} -> la stat de charisme
            }


GET     /calculator/persona
génère une description de personnage en privé. sauvegardé temporairement, jusquà la prochaine generation de description les infos doivent être envoyé au format suivant :
            id:{int} -> la valeur ID de l'utilisateur
            pseudo:{string} -> le pseudo de l'utilisateur
les infos renvoyé sont présenté comme ceci :
            description : {string} -> la description généré


GET     /calculator/chimera
génère une description de créature en privé. sauvegardé temporairement, jusquà la prochaine generation de description les infos doivent être envoyé au format suivant :
            id:{int} -> la valeur ID de l'utilisateur
            pseudo:{string} -> le pseudo de l'utilisateur
les infos renvoyé sont présenté comme ceci :
            description : {string} -> la description généré