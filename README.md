# Clou-et-Cie

**Clou-et-Cie** est un site vitrine pour un auto-entrepreneur dans le domaine du BTP.

Le site présente ses services de rénovation, éléctricité, plaquiste, plomberie, etc., tout en mettant l'accent sur la simplicité et la réactivité.

## Technologies utilisées

- **ViteJS** : Un bundler rapide pour un développement moderne.
- **ReactJS** : Pour une interface utilisateur dynamique et réactive.
- **TailwindCSS** : Pour une stylisation rapide et moderne.
- **PostCSS** : Utilisé pour ajouter des préfixes CSS automatiquement.
- **Prettier** : Pour un code propre et bien formaté.
- **ESLint** : Pour maintenir un code JavaScript de qualité.
- **PNPM** : Un gestionnaire de paquets rapide et efficace.

## Prérequis

Avant de commencer, assurez-vous que vous avez les outils suivants installés :

- **Node.js** : Version 16 ou supérieure.
- **PNPM** : Si ce n'est pas déjà installé, vous pouvez l'installer avec la commande indiquée.

## Installation

Clonez ce projet et installez les dépendances avec PNPM :

- Cloner le dépôt
- Installer les dépendances avec **PNPM**

## Scripts disponibles

- **`dev`** : Démarre le serveur de développement local avec Vite.
- **`build`** : Crée une version optimisée du site pour la production.

- **`preview`** : Permet de prévisualiser la version buildée en local.

- **`lint`** : Vérifie la qualité du code avec Prettier et ESLint.

- **`fix`** : Formate et corrige automatiquement le code avec Prettier et ESLint.

- **`clean`** : Supprime les fichiers et dossiers temporaires (node_modules, dist, package-lock.json).

## Configuration de TailwindCSS

Le projet utilise **TailwindCSS** pour la gestion des styles. Les classes de Tailwind sont définies dans le fichier `src/index.css`. Lors du build, Tailwind génère un fichier CSS optimisé qui est ensuite inclus dans la version finale.

## Développement

Pour démarrer le serveur de développement en mode local et voir les changements en temps réel, exécutez le script dédié.

## Déploiement sur Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com/).
2. Reliez votre dépôt GitHub ou GitLab à Netlify.
3. Netlify va automatiquement détecter votre projet et le déployer en suivant les configurations par défaut pour **Vite**.
4. Vous pouvez personnaliser la configuration de déploiement, mais pour un déploiement standard, Netlify se charge de la construction et de la mise en ligne.

## Licence

Ce projet est sous licence MIT.

Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
