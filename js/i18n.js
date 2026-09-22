const i18n = (() => {
    let currentLang = 'he';

    const translations = {
        he: {
            meta: {
                title: 'המטבח המצרי — מתכונים אותנטיים',
                description: 'המטבח המצרי — מתכונים אותנטיים ממצרים, בעברית.'
            },
            header: {
                logo: 'המטבח המצרי',
                backToRecipes: 'חזרה למתכונים'
            },
            hero: {
                title: 'המטבח המצרי',
                subtitle: 'מתכונים אותנטיים מהשולחן היהודי של קהיר ואלכסנדריה',
                searchPlaceholder: 'חיפוש מתכון...'
            },
            categories: {
                all: 'הכל',
                'פול וטעמיה': 'פול וטעמיה',
                'מלוכיה ותבשילים': 'מלוכיה ותבשילים',
                'אורז ומאפים': 'אורז ומאפים',
                'דגים וסלטים': 'דגים וסלטים',
                'קינוחים ומשקאות': 'קינוחים ומשקאות'
            },
            difficulty: {
                'קל': 'קל',
                'בינוני': 'בינוני',
                'מאתגר': 'מאתגר'
            },
            detail: {
                prepTime: 'זמן הכנה',
                cookTime: 'זמן בישול',
                servings: 'מנות',
                difficulty: 'רמת קושי',
                kosher: 'כשרות',
                ingredients: 'מצרכים',
                instructions: 'הוראות הכנה',
                categories: 'קטגוריות',
                whatsappShare: 'שלח רשימת קניות ב-WhatsApp',
                minutes: 'דקות'
            },
            search: {
                noResults: 'לא נמצאו מתכונים',
                tryAgain: 'נסו לשנות את מילות החיפוש או לבחור קטגוריה אחרת',
                clearFilters: 'נקה חיפוש',
                resultsCount: 'נמצאו {count} מתכונים'
            },
            loading: 'טוען מתכונים...',
            footer: {
                tagline: 'המטבח המצרי — מתכונים אותנטיים ממצרים, בעברית',
                backToHub: 'לעוד מתכוני עולם — חזרה לרכזת המתכונים'
            }
        },
        en: {
            meta: {
                title: 'Egyptian Cuisine — Authentic Recipes',
                description: 'Egyptian Cuisine — 50 authentic Egyptian Jewish recipes, all kosher, in English.'
            },
            header: {
                logo: 'Egyptian Cuisine',
                backToRecipes: 'Back to Recipes'
            },
            hero: {
                title: 'Egyptian Cuisine',
                subtitle: 'Authentic recipes from the Jewish table of Cairo and Alexandria',
                searchPlaceholder: 'Search recipe...'
            },
            categories: {
                all: 'All',
                'פול וטעמיה': 'Ful and Taamia',
                'מלוכיה ותבשילים': 'Mulukhiyah & Stews',
                'אורז ומאפים': 'Rice & Breads',
                'דגים וסלטים': 'Fish & Salads',
                'קינוחים ומשקאות': 'Sweets & Drinks',
                'Ful and Taamia': 'Ful and Taamia',
                'Mulukhiyah & Stews': 'Mulukhiyah & Stews',
                'Rice & Breads': 'Rice & Breads',
                'Fish & Salads': 'Fish & Salads',
                'Sweets & Drinks': 'Sweets & Drinks'
            },
            difficulty: {
                'קל': 'Easy',
                'בינוני': 'Medium',
                'מאתגר': 'Hard',
                'Easy': 'Easy',
                'Medium': 'Medium',
                'Hard': 'Hard'
            },
            detail: {
                prepTime: 'Prep Time',
                cookTime: 'Cook Time',
                servings: 'Servings',
                difficulty: 'Difficulty',
                kosher: 'Kosher',
                ingredients: 'Ingredients',
                instructions: 'Instructions',
                categories: 'Categories',
                whatsappShare: 'Share shopping list on WhatsApp',
                minutes: 'minutes'
            },
            search: {
                noResults: 'No recipes found',
                tryAgain: 'Try different search terms or select another category',
                clearFilters: 'Clear search',
                resultsCount: 'Found {count} recipes'
            },
            loading: 'Loading recipes...',
            footer: {
                tagline: 'Egyptian Cuisine — Authentic kosher Egyptian Jewish recipes',
                backToHub: 'More world recipes — Back to Recipe Hub'
            }
        }
    };

    function t(key) {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return value || key;
    }

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language not supported: ${lang}`);
            return;
        }
        currentLang = lang;
    }

    function getLanguage() {
        return currentLang;
    }

    function detectLanguage() {
        const saved = localStorage.getItem('lang');
        if (saved && translations[saved]) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('he')) return 'he';
        return 'en';
    }

    function init() {
        const detectedLang = detectLanguage();
        setLanguage(detectedLang);
        return detectedLang;
    }

    return {
        t,
        setLanguage,
        getLanguage,
        detectLanguage,
        init
    };
})();
