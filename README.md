# Clou-et-Cie

**Clou-et-Cie** est un site vitrine pour un auto-entrepreneur dans le domaine du BTP.

Le site présente ses services de rénovation, plaquiste, plomberie, etc., tout en mettant l'accent sur la simplicité et la réactivité.

## Technologies utilisées

- **ViteJS** : Un bundler rapide pour un développement moderne, offrant une construction rapide et une expérience de rechargement à chaud efficace.
- **ReactJS** : Une bibliothèque pour construire des interfaces utilisateurs dynamiques et réactives avec des composants réutilisables.
- **TailwindCSS** : Un framework CSS utilitaire qui permet une stylisation rapide et moderne avec une approche efficace.
- **PostCSS** : Un outil pour ajouter automatiquement des préfixes CSS et améliorer la compatibilité CSS entre les navigateurs.
- **Prettier** : Un formateur de code.
- **ESLint** : Un outil pour maintenir un code JavaScript de qualité en identifiant et en corrigeant les problèmes selon des règles prédéfinies.
- **PNPM** : Un gestionnaire de paquets rapide et efficace qui optimise node_modules avec de meilleures performances et une gestion plus économique de l'espace disque.
- **React Icons** : Une bibliothèque fournissant une collection d'icônes personnalisables pour améliorer le design de l'interface utilisateur.
- **React Lazy Load** : Un composant pour charger les images en mode lazy loading, améliorant les temps de chargement des pages et les performances globales.
- **Prop Types** : Un outil de vérification de type en temps réel pour valider les props passées aux composants React, garantissant la sécurité des types et réduisant les bugs.

## Prérequis

Avant de commencer, assurez-vous que vous avez les outils suivants installés :

- **Node.js** : Version 16 ou supérieure.
- **PNPM** : Si ce n'est pas déjà installé, vous pouvez l'installer avec la commande indiquée.

## Installation

Clonez ce projet et installez les dépendances avec PNPM ou NPM ou YARN :

- Cloner le dépôt
- Installer les dépendances avec **PNPM ou NPM ou YARN**
  ```bash
  pnpm install
  ```

## Scripts disponibles

- **`dev`** : Démarre le serveur de développement local avec Vite.

- **`build`** : Crée une version optimisée du site pour la production.

- **`preview`** : Permet de prévisualiser la version buildée en local.

- **`lint`** : Vérifie la qualité du code avec ESLint.

- **`fix`** : Formate et corrige automatiquement le code avec Prettier.

- **`remove`** : Supprime les fichiers et dossiers temporaires (node_modules, dist, package-lock.json).

## Configuration de TailwindCSS

Le projet utilise **TailwindCSS** pour la gestion des styles.

Les classes de Tailwind sont définies dans le fichier `src/index.css`.

Lors du build, Tailwind génère un fichier CSS optimisé qui est ensuite inclus dans la version finale.

## Développement

Pour démarrer le serveur de développement en mode local et voir les changements en temps réel, exécutez le script dédié.

## Licence

Ce projet est sous licence MIT.

Voir le fichier [LICENSE](LICENSE.md) pour plus d'informations.
