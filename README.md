# Fonctionalité

Ce projet est une API RESTful construite avec Node.js et Express, utilisant MongoDB comme base de données. Il permet de gérer des "stuffs" (objets) avec des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) et inclut des fonctionnalités d'authentification utilisateur.
# Technologies Utilisées
- Node.js
- Express
- MongoDB avec Mongoose
- Helmet pour la sécurité des en-têtes HTTP
- Multer pour la gestion des fichiers
- JSON Web Tokens (JWT) pour l'authentification
# Installation
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/Kakesa/api_rest.git
   ```
2. Installer les dépendances :
   ```bash
   cd api_rest
   npm install
   ```
3. Démarrer le serveur :
   ```bash
   nodemon server.js
   ```