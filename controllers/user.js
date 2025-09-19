// Import des modules nécessaires
const bcrypt = require('bcrypt'); // Pour le hachage des mots de passe
const User = require('../models/User'); // Modèle User
const jwt = require('jsonwebtoken'); // Pour la génération de tokens

// Fonction d'inscription
exports.signup = (req, res, next) => {
  // Vérification des champs requis dans le corps de la requête
  const { name, firstName, phone, email, password } = req.body;

  // Hachage du mot de passe
  bcrypt.hash(password, 10)
    .then(hash => {
      const user = new User({
        name,
        firstName,
        phone,
        email,
        password: hash
      });
      // Sauvegarde de l'utilisateur dans la base de données
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => {
          // Gestion des erreurs liées à la sauvegarde
          if (error.code === 11000) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
          }
          res.status(400).json({ error });
        });
    })
    .catch(error => res.status(500).json({ error }));
};

// Fonction de connexion
exports.login = (req, res, next) => {
  // Recherche de l'utilisateur par email
  User.findOne({ email: req.body.email })
    .then(user => {
      // Vérification de l'existence de l'utilisateur
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      // Comparaison du mot de passe
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          // Génération d'un token JWT
          res.status(200).json({
            userId: user._id,
            role: user.role,
            token: jwt.sign(
              { userId: user._id, role: user.role },
              process.env.JWT_SECRET || 'RANDOM_TOKEN_SECRET', // Utiliser une variable d'environnement pour le secret
              { expiresIn: '24h' }
            )
          });
        })
        .catch(err => res.status(500).json({ error: err.message }));
    })
    .catch(err => res.status(500).json({ error: err.message }));
};