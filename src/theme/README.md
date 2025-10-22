# Guide d'utilisation des couleurs PrenaCare

## 📁 Localisation
Le fichier de configuration des couleurs se trouve dans : `src/theme/colors.js`

## 🎨 Palette de couleurs (extraite de Home.jsx)

### 🔵 Couleur Principale - TEAL (Bleu-vert foncé)
- **Usage** : Boutons CTA, textes actifs, icônes principales, hover states
- **Couleur de base** : `#0d9488` (teal-600)
- **Classes Tailwind** : `bg-teal-600`, `text-teal-600`, `border-teal-200`, `bg-teal-50`
- **Exemples** : Bouton "Commencer mon suivi", icônes actives, titres en dégradé

### 💚 Vert Médical - EMERALD
- **Usage** : Stats de santé (98.5% réussite), indicateurs positifs, icônes santé
- **Couleur de base** : `#10b981` (emerald-500)
- **Classes Tailwind** : `bg-emerald-500`, `text-emerald-600`, `from-emerald-100`
- **Exemples** : Carte "Taux de réussite", icônes de prévention

### 🔷 Bleu - BLUE (Secondaire)
- **Usage** : Hero section, dégradés principaux, carte mortalité
- **Couleur de base** : `#3b82f6` (blue-500), `#2563eb` (blue-600)
- **Classes Tailwind** : `bg-blue-600`, `from-blue-500`, `to-blue-600`
- **Exemples** : Background hero, dégradés de titres

### 🟣 Indigo - ACCENT
- **Usage** : Complète les dégradés hero et CTA, carte satisfaction
- **Couleur de base** : `#6366f1` (indigo-500), `#4338ca` (indigo-700)
- **Classes Tailwind** : `bg-indigo-700`, `to-indigo-600`, `from-indigo-500`
- **Exemples** : Hero gradient final, carte satisfaction (99.1%)

### 🟪 Purple/Violet
- **Usage** : Stats satisfaction, trimestre 3, services
- **Couleurs** : `#a855f7` (purple-500), `#8b5cf6` (violet-500)
- **Exemples** : Carte satisfaction, calendrier 3ème trimestre

### 🔶 Orange/Amber (Warm)
- **Usage** : Stats chaleureuses (15,000+ naissances)
- **Couleurs** : `#f97316` (orange-500), `#f59e0b` (amber-500)
- **Exemples** : Carte "Naissances suivies"

### 🩷 Pink/Rose
- **Usage** : Service "Préparation"
- **Couleurs** : `#ec4899` (pink-500), `#f43f5e` (rose-500)
- **Exemples** : 3ème carte de services

### 🌊 Cyan
- **Usage** : Dégradés avec teal, backgrounds icônes
- **Couleur** : `#06b6d4` (cyan-500)
- **Exemples** : Service "Examens Médicaux"

## 💻 Utilisation dans les composants

### Import simple
```javascript
import colors from '@/theme/colors';

// Utilisation
const myStyle = {
  backgroundColor: colors.primary.DEFAULT,
  color: colors.medical[500]
};
```

### Import sélectif
```javascript
import { primary, medical, gradients } from '@/theme/colors';

// Utilisation
const buttonStyle = {
  background: gradients.medicalToTeal
};
```

## 🎨 Exemples d'utilisation (tirés de Home.jsx)

### 1. Hero Section (comme sur Home.jsx)
```jsx
<section className="bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700 text-white">
  <h1 className="text-5xl font-bold">Votre Grossesse, Notre Priorité</h1>
</section>
```

### 2. Bouton CTA principal (style exact de Home.jsx)
```jsx
<button className="bg-white text-teal-600 px-8 py-4 rounded-2xl font-bold hover:scale-105">
  <span>Commencer mon suivi</span>
  <ArrowRight className="w-5 h-5" />
</button>
```

### 3. Titre avec dégradé (comme les titres de sections)
```jsx
<h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
  Des Résultats qui Comptent
</h2>
```

### 4. Carte de statistique (style "Taux de réussite")
```jsx
<div className="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white p-8 rounded-3xl">
  <div className="bg-gradient-to-br from-emerald-100 to-green-50 p-4 rounded-2xl">
    <TrendingUp className="w-10 h-10 text-gray-700" />
  </div>
  <div className="text-4xl font-black">98.5%</div>
  <h3 className="font-bold">Accouchements sécurisés</h3>
</div>
```

### 5. Icône active dans la grille mobile
```jsx
<button className="text-teal-600 bg-teal-50 border-teal-200 rounded-2xl">
  <Calendar className="w-8 h-8" />
  <span>Consultation</span>
</button>
```

### 6. Section Call-to-Action (style exact)
```jsx
<section className="bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700 text-white rounded-3xl">
  <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
    Prête à Commencer Votre Suivi ?
  </h2>
  <button className="bg-white text-teal-600 px-8 py-4 rounded-2xl">
    Commencer mon suivi
  </button>
</section>
```

### 4. Avec styled-components ou style inline
```jsx
import colors from '@/theme/colors';

const MyComponent = () => (
  <div style={{ 
    background: colors.gradients.medicalToTeal,
    color: colors.neutral.white 
  }}>
    Contenu
  </div>
);
```

### 5. Badge de statut
```jsx
// Succès
<span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
  Validé
</span>

// Attention
<span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
  En attente
</span>

// Erreur
<span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
  Échec
</span>
```

## 🔧 Personnalisation dans Tailwind

Si vous souhaitez étendre la configuration Tailwind avec ces couleurs, ajoutez dans `tailwind.config.js` :

```javascript
import colors from './src/theme/colors';

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        medical: colors.medical,
        // ... autres couleurs
      }
    }
  }
}
```

## 🌈 Dégradés prédéfinis (extraits de Home.jsx)

```javascript
// Import
import { gradients } from '@/theme/colors';

// Hero Section
<div style={{ background: gradients.hero }}>
  // teal-600 → blue-600 → indigo-700
</div>

// Titres de sections
<h2 style={{ 
  background: gradients.titleMain,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}>
  Titre Principal
</h2>

// Stats - 4 cartes différentes
<div style={{ background: gradients.statSuccess }}>Stats réussite 98.5%</div>
<div style={{ background: gradients.statMortality }}>Stats mortalité 0.2%</div>
<div style={{ background: gradients.statSatisfaction }}>Stats satisfaction 99.1%</div>
<div style={{ background: gradients.statBirths }}>Stats naissances 15,000+</div>

// Services - 3 cartes
<div style={{ background: gradients.serviceExamens }}>Examens Médicaux</div>
<div style={{ background: gradients.serviceSuivi }}>Suivi Personnalisé</div>
<div style={{ background: gradients.servicePreparation }}>Préparation</div>

// CTA Section
<div style={{ background: gradients.cta }}>
  Prête à Commencer Votre Suivi ?
</div>
```

### Dégradés d'icônes (backgrounds clairs)
```javascript
// Pour les icônes dans les cartes
<div style={{ background: gradients.iconEmerald }}>Icône emerald</div>
<div style={{ background: gradients.iconBlue }}>Icône blue</div>
<div style={{ background: gradients.iconTeal }}>Icône teal</div>
<div style={{ background: gradients.iconPurple }}>Icône purple</div>
```

## 💡 Bonnes pratiques

1. **Cohérence** : Utilisez `teal-600` (bleu-vert) pour tous les boutons principaux
2. **Hiérarchie** : Utilisez les nuances (50-900) pour créer de la profondeur
3. **Contraste** : Assurez-vous que le texte est lisible (blanc sur couleurs foncées)
4. **Statuts** : 
   - Vert médical (emerald) = Succès, santé
   - Ambre = Attention
   - Rouge = Erreur
   - Bleu = Information

## 🎯 Exemples de composants courants

### Card avec bordure colorée
```jsx
<div className="bg-white border-l-4 border-teal-600 rounded-lg shadow-md p-6">
  <h3 className="text-teal-700 font-bold">Titre</h3>
  <p className="text-gray-600">Contenu</p>
</div>
```

### Icône avec fond coloré
```jsx
<div className="bg-emerald-100 p-4 rounded-full">
  <HeartIcon className="w-8 h-8 text-emerald-600" />
</div>
```

### Texte avec dégradé
```jsx
<h1 className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
  PrenaCare
</h1>
```

## 🔍 Fonction utilitaire

### Ajouter de l'opacité à une couleur
```javascript
import { withOpacity } from '@/theme/colors';

const semiTransparent = withOpacity('#0d9488', 0.5); // 50% d'opacité
```

---

**Note** : Ce fichier est le point central pour toutes les couleurs de l'application. Toute modification ici se répercutera sur l'ensemble du design.
