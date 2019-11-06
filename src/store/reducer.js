import * as actionTypes from './actions';

const initialState = {
    totalPrice: 4,
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon:0
    }
};

const INGREDIENTS_PRICES = {
    salad: 0.4,
    cheese: 0.7,
    meat: 1.6,
    bacon: 1.8
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
            }
        }
        case actionTypes.REMOVE_INGREDIENT: {
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]
            }
        }
        default:
            return state;
    };
};

export default reducer;