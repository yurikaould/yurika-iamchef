// Ricette statiche per la modalità mockup
// Ogni ricetta contiene tutti i dati necessari per simulare l'API di Spoonacular

export const mockRecipes = [
  {
    id: 'mock-1',
    title: 'Spaghetti alla Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
    readyInMinutes: 20,
    servings: 4,
    healthScore: 65,
    pricePerServing: 250,
    summary: 'La carbonara è uno dei piatti più iconici della cucina romana. Preparata con guanciale croccante, uova fresche e pecorino romano, rappresenta la quintessenza della semplicità italiana.',
    extendedIngredients: [
      { id: 1, name: 'spaghetti', amount: 400, unit: 'g' },
      { id: 2, name: 'guanciale', amount: 150, unit: 'g' },
      { id: 3, name: 'uova', amount: 4, unit: '' },
      { id: 4, name: 'pecorino romano', amount: 100, unit: 'g' },
      { id: 5, name: 'pepe nero', amount: 5, unit: 'g' }
    ],
    cuisines: ['Italiana'],
    dishTypes: ['pranzo', 'cena'],
    diets: [],
    instructions: 'Cuoci gli spaghetti in abbondante acqua salata. Nel frattempo, rosola il guanciale tagliato a cubetti. Sbatti le uova con il pecorino grattugiato. Scola la pasta al dente, mantieni un po\' di acqua di cottura. Mescola la pasta con il guanciale, togli dal fuoco e aggiungi il composto di uova e pecorino, mantecando con l\'acqua di cottura. Servi con una spolverata di pepe nero.',
    analyzedInstructions: [
      {
        steps: [
          { number: 1, step: 'Portare a ebollizione abbondante acqua salata per la pasta' },
          { number: 2, step: 'Tagliare il guanciale a cubetti e rosolare in padella fino a renderlo croccante' },
          { number: 3, step: 'In una ciotola, sbattere le uova con il pecorino grattugiato e il pepe nero' },
          { number: 4, step: 'Cuocere gli spaghetti al dente, conservando un mestolo di acqua di cottura' },
          { number: 5, step: 'Scolare la pasta e aggiungerla al guanciale in padella fuori dal fuoco' },
          { number: 6, step: 'Versare il composto di uova e pecorino, mantecando con acqua di cottura' },
          { number: 7, step: 'Servire immediatamente con una spolverata di pepe nero' }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: 'Calories', amount: 520, unit: 'kcal' },
        { name: 'Fat', amount: 22, unit: 'g' },
        { name: 'Carbohydrates', amount: 58, unit: 'g' },
        { name: 'Protein', amount: 24, unit: 'g' }
      ]
    }
  },
  {
    id: 'mock-2',
    title: 'Risotto ai Funghi Porcini',
    image: 'https://images.unsplash.com/photo-1476124369491-c4be476b0531?w=400&h=300&fit=crop',
    readyInMinutes: 35,
    servings: 4,
    healthScore: 78,
    pricePerServing: 420,
    summary: 'Un risotto cremoso e profumato, arricchito dal sapore intenso dei funghi porcini. Un classico della tradizione del nord Italia, perfetto per l\'autunno.',
    extendedIngredients: [
      { id: 6, name: 'riso carnaroli', amount: 320, unit: 'g' },
      { id: 7, name: 'funghi porcini', amount: 300, unit: 'g' },
      { id: 8, name: 'brodo vegetale', amount: 1, unit: 'l' },
      { id: 9, name: 'cipolla', amount: 1, unit: '' },
      { id: 10, name: 'vino bianco', amount: 100, unit: 'ml' },
      { id: 11, name: 'parmigiano reggiano', amount: 80, unit: 'g' },
      { id: 12, name: 'burro', amount: 50, unit: 'g' },
      { id: 13, name: 'prezzemolo', amount: 10, unit: 'g' }
    ],
    cuisines: ['Italiana'],
    dishTypes: ['pranzo', 'cena'],
    diets: ['vegetarian'],
    instructions: 'Pulisci i funghi porcini e tagliali a fette. Fai un soffritto con cipolla tritata e burro. Aggiungi il riso e tostalo, poi sfuma con vino bianco. Cuoci aggiungendo il brodo caldo un mestolo alla volta. A metà cottura aggiungi i funghi. Manteca con burro e parmigiano. Guarnisci con prezzemolo fresco.',
    analyzedInstructions: [
      {
        steps: [
          { number: 1, step: 'Pulire i funghi porcini con un panno umido e tagliarli a fette' },
          { number: 2, step: 'Preparare il brodo vegetale e tenerlo caldo' },
          { number: 3, step: 'Tritare finemente la cipolla e farla appassire in una casseruola con burro' },
          { number: 4, step: 'Aggiungere il riso e tostarlo per 2 minuti' },
          { number: 5, step: 'Sfumare con il vino bianco e far evaporare' },
          { number: 6, step: 'Aggiungere il brodo un mestolo alla volta, mescolando continuamente' },
          { number: 7, step: 'A metà cottura aggiungere i funghi porcini' },
          { number: 8, step: 'A cottura ultimata, mantecare con burro e parmigiano' },
          { number: 9, step: 'Servire guarnendo con prezzemolo fresco tritato' }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: 'Calories', amount: 450, unit: 'kcal' },
        { name: 'Fat', amount: 18, unit: 'g' },
        { name: 'Carbohydrates', amount: 62, unit: 'g' },
        { name: 'Protein', amount: 12, unit: 'g' }
      ]
    }
  },
  {
    id: 'mock-3',
    title: 'Pollo al Curry con Riso Basmati',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
    readyInMinutes: 40,
    servings: 4,
    healthScore: 82,
    pricePerServing: 320,
    summary: 'Un piatto speziato e avvolgente, il pollo al curry è una ricetta versatile che unisce la cucina indiana con ingredienti facilmente reperibili. Perfetto servito con riso basmati profumato.',
    extendedIngredients: [
      { id: 14, name: 'petto di pollo', amount: 600, unit: 'g' },
      { id: 15, name: 'curry in polvere', amount: 20, unit: 'g' },
      { id: 16, name: 'latte di cocco', amount: 400, unit: 'ml' },
      { id: 17, name: 'cipolla', amount: 2, unit: '' },
      { id: 18, name: 'aglio', amount: 3, unit: 'spicchi' },
      { id: 19, name: 'zenzero', amount: 15, unit: 'g' },
      { id: 20, name: 'pomodori pelati', amount: 200, unit: 'g' },
      { id: 21, name: 'riso basmati', amount: 300, unit: 'g' }
    ],
    cuisines: ['Indiana', 'Asiatica'],
    dishTypes: ['pranzo', 'cena'],
    diets: ['gluten free'],
    instructions: 'Taglia il pollo a cubetti. In una padella, rosola cipolla, aglio e zenzero. Aggiungi il curry e il pollo, facendolo dorare. Incorpora i pomodori e il latte di cocco. Cuoci a fuoco lento per 25 minuti. Servi con riso basmati cotto a vapore.',
    analyzedInstructions: [
      {
        steps: [
          { number: 1, step: 'Tagliare il petto di pollo a cubetti di circa 2-3 cm' },
          { number: 2, step: 'Tritare finemente cipolla, aglio e zenzero' },
          { number: 3, step: 'In una padella capiente, soffriggere cipolla, aglio e zenzero' },
          { number: 4, step: 'Aggiungere il curry in polvere e tostare per 1 minuto' },
          { number: 5, step: 'Unire i cubetti di pollo e farli dorare su tutti i lati' },
          { number: 6, step: 'Aggiungere i pomodori pelati schiacciati e il latte di cocco' },
          { number: 7, step: 'Cuocere a fuoco lento per 25 minuti, mescolando occasionalmente' },
          { number: 8, step: 'Nel frattempo, cuocere il riso basmati seguendo le istruzioni' },
          { number: 9, step: 'Servire il pollo al curry su un letto di riso basmati' }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: 'Calories', amount: 580, unit: 'kcal' },
        { name: 'Fat', amount: 24, unit: 'g' },
        { name: 'Carbohydrates', amount: 54, unit: 'g' },
        { name: 'Protein', amount: 38, unit: 'g' }
      ]
    }
  },
  {
    id: 'mock-4',
    title: 'Insalata Caesar con Pollo Grigliato',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    readyInMinutes: 25,
    servings: 2,
    healthScore: 88,
    pricePerServing: 280,
    summary: 'Un\'insalata fresca e proteica, perfetta per un pranzo leggero ma sostanzioso. La Caesar salad con pollo grigliato è un classico intramontabile della cucina internazionale.',
    extendedIngredients: [
      { id: 22, name: 'lattuga romana', amount: 300, unit: 'g' },
      { id: 23, name: 'petto di pollo', amount: 300, unit: 'g' },
      { id: 24, name: 'parmigiano reggiano', amount: 50, unit: 'g' },
      { id: 25, name: 'crostini di pane', amount: 80, unit: 'g' },
      { id: 26, name: 'uova', amount: 2, unit: '' },
      { id: 27, name: 'aglio', amount: 1, unit: 'spicchio' },
      { id: 28, name: 'acciughe', amount: 4, unit: '' },
      { id: 29, name: 'senape', amount: 5, unit: 'g' },
      { id: 30, name: 'limone', amount: 1, unit: '' }
    ],
    cuisines: ['Americana', 'Internazionale'],
    dishTypes: ['pranzo', 'insalata'],
    diets: [],
    instructions: 'Griglia il petto di pollo condito con sale e pepe. Prepara la salsa Caesar frullando uova, acciughe, aglio, senape e limone. Taglia la lattuga, aggiungi il pollo a fette, i crostini e il parmigiano. Condisci con la salsa Caesar.',
    analyzedInstructions: [
      {
        steps: [
          { number: 1, step: 'Condire il petto di pollo con sale, pepe e olio' },
          { number: 2, step: 'Grigliare il pollo per 6-7 minuti per lato fino a cottura completa' },
          { number: 3, step: 'Preparare la salsa Caesar: frullare uova, acciughe, aglio, senape, succo di limone e olio' },
          { number: 4, step: 'Lavare e tagliare la lattuga romana a pezzi' },
          { number: 5, step: 'Preparare i crostini tostando il pane tagliato a cubetti' },
          { number: 6, step: 'Tagliare il pollo grigliato a fette sottili' },
          { number: 7, step: 'Comporre l\'insalata: lattuga, pollo, crostini e scaglie di parmigiano' },
          { number: 8, step: 'Condire con la salsa Caesar e servire immediatamente' }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: 'Calories', amount: 420, unit: 'kcal' },
        { name: 'Fat', amount: 18, unit: 'g' },
        { name: 'Carbohydrates', amount: 22, unit: 'g' },
        { name: 'Protein', amount: 42, unit: 'g' }
      ]
    }
  },
  {
    id: 'mock-5',
    title: 'Lasagne alla Bolognese',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop',
    readyInMinutes: 120,
    servings: 8,
    healthScore: 62,
    pricePerServing: 180,
    summary: 'Il comfort food italiano per eccellenza. Strati di pasta all\'uovo, ragù alla bolognese e besciamella cremosa, gratinati al forno fino a doratura perfetta.',
    extendedIngredients: [
      { id: 31, name: 'sfoglia per lasagne', amount: 500, unit: 'g' },
      { id: 32, name: 'carne macinata', amount: 600, unit: 'g' },
      { id: 33, name: 'pomodori pelati', amount: 800, unit: 'g' },
      { id: 34, name: 'cipolla', amount: 2, unit: '' },
      { id: 35, name: 'carota', amount: 2, unit: '' },
      { id: 36, name: 'sedano', amount: 2, unit: 'coste' },
      { id: 37, name: 'latte', amount: 1, unit: 'l' },
      { id: 38, name: 'farina', amount: 100, unit: 'g' },
      { id: 39, name: 'burro', amount: 100, unit: 'g' },
      { id: 40, name: 'parmigiano reggiano', amount: 200, unit: 'g' }
    ],
    cuisines: ['Italiana'],
    dishTypes: ['pranzo', 'cena'],
    diets: [],
    instructions: 'Prepara il ragù rosolando le verdure tritate, aggiungi la carne e i pomodori, cuoci per 2 ore. Fai la besciamella sciogliendo burro, aggiungendo farina e latte. Alterna strati di pasta, ragù, besciamella e parmigiano. Inforna a 180°C per 40 minuti.',
    analyzedInstructions: [
      {
        steps: [
          { number: 1, step: 'Tritare finemente cipolla, carota e sedano per il soffritto' },
          { number: 2, step: 'In una casseruola, rosolare il soffritto con olio d\'oliva' },
          { number: 3, step: 'Aggiungere la carne macinata e rosolarla fino a doratura' },
          { number: 4, step: 'Unire i pomodori pelati schiacciati, sale e pepe' },
          { number: 5, step: 'Cuocere il ragù a fuoco lento per almeno 2 ore' },
          { number: 6, step: 'Preparare la besciamella: sciogliere il burro, aggiungere farina, poi latte gradualmente' },
          { number: 7, step: 'In una teglia imburrata, alternare strati: pasta, ragù, besciamella, parmigiano' },
          { number: 8, step: 'Ripetere gli strati terminando con besciamella e abbondante parmigiano' },
          { number: 9, step: 'Infornare a 180°C per 40 minuti fino a doratura' },
          { number: 10, step: 'Far riposare 10 minuti prima di servire' }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: 'Calories', amount: 620, unit: 'kcal' },
        { name: 'Fat', amount: 32, unit: 'g' },
        { name: 'Carbohydrates', amount: 48, unit: 'g' },
        { name: 'Protein', amount: 34, unit: 'g' }
      ]
    }
  },
  {
    id: 'mock-6',
    title: 'Salmone al Forno con Verdure',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    readyInMinutes: 30,
    servings: 4,
    healthScore: 95,
    pricePerServing: 480,
    summary: 'Un piatto sano e leggero, ricco di omega-3. Il salmone al forno con verdure mediterranee è perfetto per chi cerca un pasto nutriente e gustoso senza rinunciare alla linea.',
    extendedIngredients: [
      { id: 41, name: 'filetti di salmone', amount: 600, unit: 'g' },
      { id: 42, name: 'zucchine', amount: 2, unit: '' },
      { id: 43, name: 'peperoni', amount: 2, unit: '' },
      { id: 44, name: 'pomodorini', amount: 300, unit: 'g' },
      { id: 45, name: 'limone', amount: 2, unit: '' },
      { id: 46, name: 'olio extravergine', amount: 50, unit: 'ml' },
      { id: 47, name: 'timo', amount: 5, unit: 'g' },
      { id: 48, name: 'aglio', amount: 2, unit: 'spicchi' }
    ],
    cuisines: ['Mediterranea'],
    dishTypes: ['pranzo', 'cena'],
    diets: ['pescatarian', 'gluten free', 'dairy free'],
    instructions: 'Taglia le verdure a pezzi e disponile in una teglia con olio, aglio e timo. Inforna a 200°C per 15 minuti. Aggiungi i filetti di salmone conditi con sale, pepe e succo di limone. Continua la cottura per altri 15 minuti. Servi con fette di limone fresco.',
    analyzedInstructions: [
      {
        steps: [
          { number: 1, step: 'Preriscaldare il forno a 200°C' },
          { number: 2, step: 'Tagliare zucchine e peperoni a pezzi regolari' },
          { number: 3, step: 'Disporre le verdure in una teglia con olio, aglio schiacciato e timo' },
          { number: 4, step: 'Aggiungere i pomodorini interi' },
          { number: 5, step: 'Infornare le verdure per 15 minuti' },
          { number: 6, step: 'Condire i filetti di salmone con sale, pepe e succo di limone' },
          { number: 7, step: 'Aggiungere il salmone alla teglia con le verdure' },
          { number: 8, step: 'Continuare la cottura per altri 12-15 minuti' },
          { number: 9, step: 'Servire guarnendo con fette di limone fresco e timo' }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: 'Calories', amount: 380, unit: 'kcal' },
        { name: 'Fat', amount: 22, unit: 'g' },
        { name: 'Carbohydrates', amount: 14, unit: 'g' },
        { name: 'Protein', amount: 35, unit: 'g' }
      ]
    }
  },
  {
    id: 'mock-7',
    title: 'Tiramisù Classico',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    readyInMinutes: 240,
    servings: 8,
    healthScore: 45,
    pricePerServing: 220,
    summary: 'Il dessert italiano più famoso al mondo. Strati di savoiardi imbevuti nel caffè alternati a una crema vellutata di mascarpone, completati da una generosa spolverata di cacao amaro.',
    extendedIngredients: [
      { id: 49, name: 'mascarpone', amount: 500, unit: 'g' },
      { id: 50, name: 'savoiardi', amount: 300, unit: 'g' },
      { id: 51, name: 'uova', amount: 6, unit: '' },
      { id: 52, name: 'zucchero', amount: 150, unit: 'g' },
      { id: 53, name: 'caffè espresso', amount: 400, unit: 'ml' },
      { id: 54, name: 'cacao amaro', amount: 30, unit: 'g' },
      { id: 55, name: 'liquore amaretto', amount: 50, unit: 'ml' }
    ],
    cuisines: ['Italiana'],
    dishTypes: ['dessert'],
    diets: ['vegetarian'],
    instructions: 'Separa i tuorli dagli albumi. Monta i tuorli con lo zucchero fino a ottenere una crema chiara. Incorpora il mascarpone. Monta gli albumi a neve e uniscili delicatamente. Prepara il caffè e fallo raffreddare. Intingi i savoiardi nel caffè e disponili in una pirofila. Copri con la crema al mascarpone. Ripeti lo strato. Refrigera per almeno 4 ore. Prima di servire, spolvera con cacao amaro.',
    analyzedInstructions: [
      {
        steps: [
          { number: 1, step: 'Separare i tuorli dagli albumi' },
          { number: 2, step: 'Montare i tuorli con lo zucchero fino a ottenere una crema spumosa e chiara' },
          { number: 3, step: 'Incorporare il mascarpone alla crema di tuorli mescolando delicatamente' },
          { number: 4, step: 'Montare gli albumi a neve ferma' },
          { number: 5, step: 'Unire gli albumi alla crema con movimenti dal basso verso l\'alto' },
          { number: 6, step: 'Preparare il caffè espresso e farlo raffreddare, aggiungendo l\'amaretto' },
          { number: 7, step: 'Intingere velocemente i savoiardi nel caffè' },
          { number: 8, step: 'Disporre uno strato di savoiardi in una pirofila' },
          { number: 9, step: 'Coprire con metà della crema al mascarpone' },
          { number: 10, step: 'Ripetere con un secondo strato di savoiardi e crema' },
          { number: 11, step: 'Refrigerare per almeno 4 ore (meglio una notte)' },
          { number: 12, step: 'Prima di servire, spolverare abbondantemente con cacao amaro' }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: 'Calories', amount: 420, unit: 'kcal' },
        { name: 'Fat', amount: 26, unit: 'g' },
        { name: 'Carbohydrates', amount: 38, unit: 'g' },
        { name: 'Protein', amount: 10, unit: 'g' }
      ]
    }
  },
  {
    id: 'mock-8',
    title: 'Pasta al Pesto Genovese',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop',
    readyInMinutes: 15,
    servings: 4,
    healthScore: 72,
    pricePerServing: 200,
    summary: 'Un classico ligure veloce e profumato. Il pesto alla genovese con basilico fresco, pinoli, parmigiano e olio extravergine è un\'esplosione di sapori mediterranei.',
    extendedIngredients: [
      { id: 56, name: 'trofie o trenette', amount: 400, unit: 'g' },
      { id: 57, name: 'basilico fresco', amount: 80, unit: 'g' },
      { id: 58, name: 'pinoli', amount: 40, unit: 'g' },
      { id: 59, name: 'parmigiano reggiano', amount: 60, unit: 'g' },
      { id: 60, name: 'pecorino', amount: 40, unit: 'g' },
      { id: 61, name: 'aglio', amount: 1, unit: 'spicchio' },
      { id: 62, name: 'olio extravergine', amount: 100, unit: 'ml' },
      { id: 63, name: 'patate', amount: 200, unit: 'g' },
      { id: 64, name: 'fagiolini', amount: 150, unit: 'g' }
    ],
    cuisines: ['Italiana', 'Ligure'],
    dishTypes: ['pranzo', 'cena'],
    diets: ['vegetarian'],
    instructions: 'Prepara il pesto: frulla basilico, pinoli, aglio, formaggi e olio fino a ottenere una crema. Cuoci la pasta con patate a cubetti e fagiolini. Scola conservando acqua di cottura. Manteca la pasta con il pesto diluito con un po\' d\'acqua di cottura. Servi immediatamente.',
    analyzedInstructions: [
      {
        steps: [
          { number: 1, step: 'Lavare e asciugare le foglie di basilico' },
          { number: 2, step: 'Nel mortaio o frullatore, pestare/frullare basilico, pinoli e aglio' },
          { number: 3, step: 'Aggiungere i formaggi grattugiati' },
          { number: 4, step: 'Incorporare l\'olio extravergine fino a ottenere una crema omogenea' },
          { number: 5, step: 'Tagliare le patate a cubetti e pulire i fagiolini' },
          { number: 6, step: 'Portare a ebollizione acqua salata e cuocere patate e fagiolini' },
          { number: 7, step: 'Dopo 10 minuti aggiungere la pasta' },
          { number: 8, step: 'Scolare conservando un mestolo di acqua di cottura' },
          { number: 9, step: 'Diluire il pesto con un po\' di acqua di cottura' },
          { number: 10, step: 'Mantecare la pasta con il pesto e servire immediatamente' }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: 'Calories', amount: 520, unit: 'kcal' },
        { name: 'Fat', amount: 28, unit: 'g' },
        { name: 'Carbohydrates', amount: 56, unit: 'g' },
        { name: 'Protein', amount: 16, unit: 'g' }
      ]
    }
  }
]

// Funzione helper per filtrare ricette per ingredienti
// Comportamento: trova ricette che contengono ALMENO UNO degli ingredienti cercati
export const filterRecipesByIngredients = (recipes, searchedIngredients) => {
  if (!searchedIngredients || searchedIngredients.length === 0) {
    return recipes
  }

  // Sistema di aliases per ingredienti correlati
  const ingredientAliases = {
    'pasta': ['spaghetti', 'trofie', 'trenette', 'sfoglia per lasagne'],
    'spaghetti': ['pasta', 'spaghetti'],
    'riso': ['riso carnaroli', 'riso basmati', 'riso'],
    'pollo': ['petto di pollo', 'pollo'],
    'petto di pollo': ['pollo', 'petto di pollo'],
    'funghi': ['funghi porcini', 'funghi'],
    'funghi porcini': ['funghi', 'funghi porcini'],
    'formaggio': ['parmigiano reggiano', 'pecorino romano', 'mascarpone', 'pecorino'],
    'parmigiano reggiano': ['parmigiano', 'formaggio'],
    'pecorino romano': ['pecorino', 'formaggio'],
    'pomodori': ['pomodori pelati', 'pomodorini'],
    'pomodori pelati': ['pomodori', 'pomodoro'],
    'basilico fresco': ['basilico'],
    'filetti di salmone': ['salmone'],
    'caffè espresso': ['caffè', 'caffe'],
    'curry in polvere': ['curry'],
    'carne macinata': ['carne']
  }

  // Normalizza gli ingredienti cercati (lowercase e trim)
  const normalizedSearch = searchedIngredients.map(ing => 
    ing.toLowerCase().trim()
  )

  console.log('🔍 Filtering recipes for ingredients:', normalizedSearch)

  const filteredRecipes = recipes.filter(recipe => {
    // Estrai tutti i nomi degli ingredienti della ricetta
    const recipeIngredients = recipe.extendedIngredients.map(ing => 
      ing.name.toLowerCase()
    )

    // Controlla se ALMENO UNO degli ingredienti cercati è presente nella ricetta
    const hasMatch = normalizedSearch.some(searchedIng => {
      // Cerca corrispondenze dirette
      const directMatch = recipeIngredients.some(recipeIng => {
        return recipeIng.includes(searchedIng) || searchedIng.includes(recipeIng)
      })
      
      if (directMatch) {
        console.log(`✅ Direct match: "${searchedIng}" in recipe "${recipe.title}"`)
        return true
      }
      
      // Cerca corrispondenze tramite aliases
      const aliases = ingredientAliases[searchedIng] || []
      const aliasMatch = aliases.some(alias => 
        recipeIngredients.some(recipeIng => 
          recipeIng.includes(alias) || alias.includes(recipeIng)
        )
      )
      
      if (aliasMatch) {
        console.log(`✅ Alias match: "${searchedIng}" → aliases in recipe "${recipe.title}"`)
        return true
      }
      
      return false
    })
    
    return hasMatch
  })

  console.log(`📋 Found ${filteredRecipes.length} recipes matching ingredients`)
  return filteredRecipes
}
