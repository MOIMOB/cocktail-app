import { ExtendedIngredientGroup, IngredientGroup } from 'models/cocktail';
import { Ingredient, ManageIngredientModel } from 'models/ingredient';

export function getIngredients() {
    return [...currentIngredients].sort((a, b) => a.name.localeCompare(b.name));
}

export function getRandomIngredients(count: number, excludeIds: number[] = []) {
    const ingredients = getIngredients().filter(x => !excludeIds.includes(x.id));

    const randomIngredients = ingredients.sort(() => 0.5 - Math.random()).slice(0, count);

    return randomIngredients.map(x => ({
        id: x.id,
        name: x.name,
        type: x.type,
        ABV: x.ABV,
        isActive: false,
    }));
}

export function getManageIngredientModels(activeIds: number[]): ManageIngredientModel[] {
    return getIngredients().map(x => ({
        id: x.id,
        name: x.name,
        type: x.type,
        ABV: x.ABV,
        isActive: activeIds.includes(x.id),
    }));
}

export function toExtendedIngredientGroup(groups: IngredientGroup[]): ExtendedIngredientGroup[] {
    return groups.map(x => ({
        amount: x.amount,
        ingredientId: x.ingredientId,
        unit: x.unit,
        ingredient: currentIngredients.find(y => y.id === x.ingredientId),
    }));
}

export function getIngredientsByIds(ids: number[]): Ingredient[] {
    return getIngredients().filter(x => ids.includes(x.id));
}

const currentIngredients: Ingredient[] = [
    { id: 1, name: 'Light Rum', type: '', ABV: 40 },
    { id: 2, name: 'Lime Juice', type: '', ABV: null },
    { id: 3, name: 'Simple syrup', type: '', ABV: null },
    { id: 4, name: 'Soda Water', type: '', ABV: null },
    { id: 5, name: 'Mint', type: '', ABV: null },
    { id: 6, name: 'Gin', type: '', ABV: 40 },
    { id: 7, name: 'Tonic Water', type: '', ABV: null },
    { id: 8, name: 'Vodka', type: '', ABV: 40 },
    { id: 9, name: 'Tomato Juice', type: '', ABV: null },
    { id: 10, name: 'Lemon Juice', type: '', ABV: null },
    { id: 11, name: 'Tabasco sauce', type: '', ABV: null },
    { id: 12, name: 'Worcestershire sauce', type: '', ABV: null },
    { id: 13, name: 'Black Pepper', type: '', ABV: null },
    { id: 14, name: 'Celery Salt', type: '', ABV: null },
    { id: 15, name: 'Celery', type: '', ABV: null },

    { id: 17, name: 'Cranberry Juice', type: '', ABV: null },
    { id: 18, name: 'Tequila', type: '', ABV: 40 },
    { id: 19, name: 'Orange liqueur', type: 'Liqueur', ABV: null },
    { id: 20, name: 'Strawberry', type: '', ABV: null },
    { id: 21, name: 'Ice', type: '', ABV: null },
    { id: 22, name: 'Amaretto', type: '', ABV: null },
    { id: 23, name: 'Egg white', type: '', ABV: null },
    { id: 24, name: 'Ginger Beer', type: '', ABV: null },
    { id: 25, name: 'Coconut Cream', type: '', ABV: null },
    { id: 26, name: 'Pineapple Juice', type: '', ABV: null },
    { id: 27, name: 'Angostura bitters', type: '', ABV: null },
    { id: 28, name: 'Bourbon Whiskey', type: '', ABV: null },

    { id: 30, name: 'Grenadine', type: '', ABV: null },
    { id: 31, name: 'Dry Vermouth', type: '', ABV: null },
    { id: 32, name: 'Olive', type: '', ABV: null },
    { id: 33, name: 'Galliano', type: '', ABV: null },
    { id: 34, name: 'Coffee', type: '', ABV: null },
    { id: 35, name: 'Cream', type: '', ABV: null },
];
