import { createTypes } from 'redux-recompose';

import { getBooks, getBook } from '../../services/Book/service';

import { BOOKS, BOOK } from './constants';

const types = ['ADD_BOOKS', 'GET_BOOKS', 'ADD_BOOK', 'GET_BOOK', 'REMOVE_BOOK', 'PABLITO'];
export const actions = createTypes(types, '@@BOOKS');

export const actionCreators = {
  addBooks: books => ({
    type: actions.ADD_BOOKS,
    target: BOOKS,
    payload: books
  }),
  getBooks: () => async (dispatch, getState) => {
    const books = await getBooks(getState().auth.accessToken);
    dispatch(actionCreators.addBooks(books));
  },
  addBook: book => ({
    type: actions.ADD_BOOK,
    target: BOOK,
    payload: book
  }),
  getBook: bookId => async (dispatch, getState) => {
    dispatch({ type: actions.PABLITO });
    const book = await getBook(getState().auth.accessToken, bookId);
    dispatch(actionCreators.addBook(book));
  },
  removeBook: () => ({
    type: actions.REMOVE_BOOK,
    target: BOOK
  })
};

// export const actionCreators = {
//   setBasePizzaIdsForSteps: stepPizzaIds => ({
//     type: actions.SET_BASE_PIZZA_FOR_STEP,
//     target: STEPS_TARGET,
//     payload: stepPizzaIds
//   }),
//   getOffer: offerId => ({
//     type: actions.GET_OFFER,
//     target: OFFER_TARGET,
//     service: OfferService.getOffer,
//     payload: offerId,
//     injections: [
//       withSuccess((dispatch, { data }) => {
//         const serializedData = deserializer.serialize(data);
//         const pizzaIds = serializedData.groups.reduce((result, group) => {
//           let initialPizza = group.productOfferGroups.find(
//             productOfferGroup => productOfferGroup.menuable.category === pizzaCategories.MAKE_YOUR_PIZZA
//           );

//           if (!initialPizza) {
//             initialPizza = group.productOfferGroups.find(
//               productOfferGroup => productOfferGroup.menuable.category === pizzaCategories.PIZZA
//             );
//           }

//           if (initialPizza) {
//             result.push(initialPizza.menuable.productId);
//           }

//           return result;
//         }, []);

//         const onSuccess = () =>
//           dispatch({ type: actions.GET_OFFER_SUCCESS, target: OFFER_TARGET, payload: serializedData });

//         dispatch(customPizzaActions.getOfferPizzas(pizzaIds, onSuccess));
//       })
//     ]
//   }),
//   clearOffer: () => ({
//     type: actions.CLEAR_OFFER,
//     target: OFFER_TARGET
//   }),
//   setSelectedPizza: ({ item, half, stepId }) => (dispatch, getState) => {
//     const { config } = getState().customPizza;
//     const loadedDefaultIngredients = config.basePizzaData?.defaultIngredients?.[item.menuableId];

//     if (loadedDefaultIngredients) {
//       const { ingredients, bases } = ingredientsFromPizzaData(
//         { ingredients: loadedDefaultIngredients.whole },
//         config,
//         half
//       );

//       dispatch(
//         customPizzaActions.setPizzaCreationSelections({ menuable: item, stepId, half, ingredients, bases })
//       );
//     } else {
//       dispatch(customPizzaActions.setDefaultEditPizzaValues({ menuable: item, stepId, half }));
//     }
//   }
// };
