//import

const {
  LOAD_CONTACT,
  SUCC_CONTACT,
  FAIL_CONTACT,
} = require('../ActionTypes/contact')

//initialstate
const initialState = {
  contactList: [],
  error: [],
  load: false,
}

//pure function
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, load: true }
    case SUCC_CONTACT:
      return { ...state, load: false, contactList: payload.contactList }
    case FAIL_CONTACT:
      return { ...state, load: false, errors: payload }

    default:
      return state
  }
}
// export

export default contactReducer
