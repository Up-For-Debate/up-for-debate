const initialState = {
  city: '',
  usState: ''
}

const GET_CITYSTATE = 'GET_CITYSTATE'

export const getCityState = (city, usState) => {
  return {
    type: GET_CITYSTATE,
    payload: {city, usState}
  }
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type){
    case GET_CITYSTATE:
      return { ...state, 
        city: payload.city, 
        usState: payload.usState }
    default: 
      return state
  }
}