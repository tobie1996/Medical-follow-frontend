# Architecture du formulaire multi-étapes

## Structure du projet

```
src/client/Consultation/
├── Multi-step Form.jsx          # Composant principal
├── components/                  # Composants réutilisables
│   ├── index.js                # Export groupé des composants
│   ├── FormInput.jsx           # Champ de formulaire réutilisable
│   ├── ProgressSteps.jsx       # Indicateurs de progression
│   ├── StepHeader.jsx          # En-tête de chaque étape
│   ├── NavigationButtons.jsx   # Boutons de navigation
│   └── SuccessScreen.jsx       # Écran de succès
└── steps/                      # Étapes du formulaire
    ├── index.js               # Export groupé des étapes
    ├── PersonalInfoStep.jsx   # Étape 1: Informations personnelles
    ├── MedicalHistoryStep.jsx # Étape 2: Antécédents médicaux
    ├── PregnancyInfoStep.jsx  # Étape 3: Informations de grossesse
    └── AppointmentStep.jsx    # Étape 4: Préférences de rendez-vous
```

## Composants

### FormInput.jsx
Composant réutilisable pour tous les champs de formulaire avec :
- Support pour différents types (text, email, tel, date, textarea, select)
- Gestion des erreurs avec animations
- Icônes personnalisables
- Couleurs de focus configurables
- Validation intégrée

### ProgressSteps.jsx
Gère l'affichage de la progression avec :
- Indicateurs visuels pour chaque étape
- Animations de transition
- Barre de progression globale
- États complétés/en cours/à venir

### StepHeader.jsx
En-tête coloré pour chaque étape avec :
- Titre et description
- Illustration emoji
- Couleurs thématiques par étape

### NavigationButtons.jsx
Boutons de navigation avec :
- Logique conditionnelle (Précédent/Suivant/Soumettre)
- Animations et interactions
- États désactivés

### SuccessScreen.jsx
Écran de confirmation avec :
- Animations de succès
- Effets de confettis
- Éléments flottants
- Informations de suivi

## Étapes

### PersonalInfoStep.jsx
Collecte les informations personnelles :
- Nom complet
- Date de naissance
- Adresse
- Téléphone
- Email

### MedicalHistoryStep.jsx
Collecte les antécédents médicaux :
- Groupe sanguin
- Allergies
- Maladies chroniques
- Médicaments actuels

### PregnancyInfoStep.jsx
Collecte les informations de grossesse :
- Date des dernières règles
- Grossesses antérieures
- Complications précédentes
- Date prévue d'accouchement

### AppointmentStep.jsx
Collecte les préférences de rendez-vous :
- Date préférée
- Heure préférée
- Contact d'urgence
- Téléphone d'urgence
- Notes supplémentaires

## Avantages de cette architecture

1. **Réutilisabilité** : Les composants peuvent être réutilisés dans d'autres formulaires
2. **Maintenabilité** : Code organisé et facile à maintenir
3. **Évolutivité** : Facile d'ajouter de nouvelles étapes ou composants
4. **Lisibilité** : Structure claire et logique
5. **Testabilité** : Chaque composant peut être testé indépendamment

## Utilisation

```jsx
// Import du composant principal
import MultiStepForm from './Consultation/Multi-step Form';

// Utilisation
<MultiStepForm />
```

## Personnalisation

- Modifier les couleurs dans chaque étape
- Ajouter de nouveaux types de champs dans FormInput
- Créer de nouvelles étapes en suivant le modèle existant
- Personnaliser les animations et transitions