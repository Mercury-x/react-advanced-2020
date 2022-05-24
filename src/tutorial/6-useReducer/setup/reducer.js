export default (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      people: [...state.people, action.payload],
      modalContent: 'item added',
      isOpenModal: true,
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      modalContent: 'invalid',
      isOpenModal: true,
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isOpenModal: false,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      modalContent: 'item removed',
      isOpenModal: true,
      people: newPeople,
    };
  }

  throw new Error('no matching action type');
};
