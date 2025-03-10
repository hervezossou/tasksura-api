# Taskify - Task Management API

Taskify est une API RESTful permettant de gérer des tâches de manière efficace. Elle offre des fonctionnalités comme l'authentification des utilisateurs, la création, la mise à jour et la suppression de tâches avec gestion des priorités et des statuts.

## 🚀 Fonctionnalités

- **Authentification des utilisateurs** avec JWT
- **CRUD complet** sur les tâches
- **Gestion des priorités et statuts** des tâches
- **Validation des entrées** avec Zod
- **Base de données PostgreSQL** avec Prisma ORM

## 🛠️ Technologies utilisées

- **Backend** : Node.js, Express.js, TypeScript
- **Base de données** : PostgreSQL avec Prisma ORM
- **Authentification** : JSON Web Token (JWT)
- **Validation** : Zod

---

## 📌 Installation et exécution

### 1️⃣ Cloner le projet
```sh
git clone https://github.com/votre-utilisateur/tasksura.git
cd taskify
```

### 2️⃣ Installer les dépendances
```sh
npm install
```

### 3️⃣ Configuration des variables d'environnement
Créer un fichier `.env` à la racine du projet et ajouter les variables suivantes :
```env
DATABASE_URL=postgresql://user:password@localhost:5432/taskify
JWT_SECRET=votre_secret
```

### 4️⃣ Exécuter les migrations Prisma
```sh
npx prisma migrate dev --name init
```

### 5️⃣ Lancer le serveur
```sh
npm run dev
```

L'API sera accessible sur `http://localhost:5000`

---

## 📚 Documentation de l'API

### 🔑 Authentification
- `POST /api/auth/register` → Inscription d'un utilisateur
- `POST /api/auth/login` → Connexion et génération d'un token JWT

### 📋 Gestion des tâches
- `POST /api/tasks` → Créer une tâche
- `GET /api/tasks` → Récupérer toutes les tâches
- `GET /api/tasks/:id` → Récupérer une tâche par ID
- `PUT /api/tasks/:id` → Mettre à jour une tâche
- `DELETE /api/tasks/:id` → Supprimer une tâche

---

## ✨ Contribuer

1. Fork le projet 🍴
2. Crée une nouvelle branche (`git checkout -b feature-nouvelle-fonctionnalite`)
3. Ajoute tes modifications et commit (`git commit -m 'Ajout de ma fonctionnalité'`)
4. Push vers ta branche (`git push origin feature-nouvelle-fonctionnalite`)
5. Ouvre une Pull Request 🚀

---

## 📝 Licence
Ce projet est sous licence MIT.

---

💡 **Idée d'amélioration future** : Ajout d'une interface frontend avec React ou Next.js.

🔗 **Contact** : Si vous avez des questions, n'hésitez pas à me contacter sur GitHub ou Twitter ! 🚀

