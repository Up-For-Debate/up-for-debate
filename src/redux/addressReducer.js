const initialState = {
  cityState: ''
}

const GET_CITYSTATE = 'GET_CITYSTATE'

export const getCityState = (cityState) => {
  return {
    type: GET_CITYSTATE,
    payload: cityState
  }
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type){
    case GET_CITYSTATE:
      return { ...state, cityState: payload }
    default: 
      return state
  }
}