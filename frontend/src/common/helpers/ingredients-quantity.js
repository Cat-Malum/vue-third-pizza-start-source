import { useDataStore } from '@/stores/data';

export const ingredientsQuantity = (pizza) => {
    const data = useDataStore();

    return data.ingredients.reduce((accum, value) => {
        accum[value.id] = pizza.ingredients.find((item) => item.ingredientId === value.id)
            ?.quantity ?? 0;

        return accum;
    }, {});
};