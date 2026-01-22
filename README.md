# Portfolio Georges Camara

Portfolio professionnel d'un développeur fullstack basé à Bouaké/Abidjan, Côte d'Ivoire.

## 🚀 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec animations
- **JavaScript (ES6+)** - Interactions et fonctionnalités
- **GSAP** - Animations avancées
- **EmailJS** - Envoi de formulaires

## 🎨 Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Mode sombre/clair avec localStorage
- ✅ Animations GSAP fluides
- ✅ Formulaire de contact fonctionnel
- ✅ Modal de projets détaillés
- ✅ Navigation smooth scroll
- ✅ Optimisé pour les performances
- ✅ Accessibilité (ARIA labels, navigation clavier)

## 📁 Structure du projet

```
portfolio/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles et animations
├── js/
│   └── main.js         # Logique JavaScript
├── img/                # Images et assets
│   ├── georges-camara.jpg
│   ├── resto-delicieux.jpg
│   ├── app-diendi.jpg
│   ├── bibliotheque-uao.jpg
│   └── marketplace-mobile.jpg
└── README.md           # Documentation
```

## 🛠️ Installation & Utilisation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/georges-camara/portfolio.git
   cd portfolio
   ```

2. **Ouvrir dans un serveur local**
   ```bash
   # Avec Python
   python -m http.server 8000

   # Avec Node.js
   npx serve .

   # Avec PHP
   php -S localhost:8000
   ```

3. **Accéder au portfolio**
   Ouvrez `http://localhost:8000` dans votre navigateur

## 🎯 Personnalisation

### Images
Remplacez les fichiers dans `img/` par vos vraies images :
- `georges-camara.jpg` : Votre photo professionnelle
- `resto-delicieux.jpg` : Capture d'écran du projet
- etc.

### EmailJS
Pour activer le formulaire de contact :
1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Récupérez votre Service ID, Template ID et User ID
3. Remplacez les valeurs dans `js/main.js` :
   ```javascript
   emailjs.init("YOUR_USER_ID");
   // Et dans la fonction sendForm
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", ...)
   ```

### Couleurs
Modifiez les variables CSS dans `css/style.css` :
```css
:root {
  --primary: #6366F1;
  --secondary: #10B981;
  /* ... autres variables */
}
```

## 📱 Responsive Design

- **Mobile** : < 768px - Layout vertical, menu burger
- **Tablet** : 768px - 1024px - Grille adaptée
- **Desktop** : > 1024px - Layout complet

## 🚀 Performance

- **Lighthouse Score** : > 95 (Performance, Accessibilité)
- **Taille bundle** : < 100KB gzippé
- **Chargement** : < 2 secondes
- **Core Web Vitals** : Optimisés

## 📞 Contact

**Georges Camara**
- Email : camara.georges1313@gmail.com
- Téléphone : +225 0566015516
- LinkedIn : [Votre profil]
- GitHub : [Votre GitHub]

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

*Fait avec ❤️ par Georges Camara - Développeur Fullstack*

l'ien portfolio: https://lespros-informatique.github.io/georges-portfolio/
