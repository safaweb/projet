import { GET_EVENT, GET_EVENT_FAIL, GET_EVENT_SECCESS, GET_MY_EVENTS_FAIL, GET_ONE_EVENT, GET_ONE_EVENT_FAIL, GET_ONE_EVENT_SECCESS } from "../ActionTypes/ActionTypes"
import { GET_MY_EVENTS, GET_MY_EVENTS_SECCESS } from './../ActionTypes/ActionTypes';


const initState = {
  Loading: false,
  event: [],
  error: null
}


const Event_Select = (state = initState, { type, payload }) => {
  switch (type) {

    case GET_ONE_EVENT:
    case GET_MY_EVENTS:
    case GET_EVENT:
      return {
        ...state,
        Loading: true,
        event: [],
      }


    case GET_ONE_EVENT_SECCESS:
      return {
        ...state,
        Loading: false,
        event: payload,
        error: null
      }
    case GET_EVENT_SECCESS:
    case GET_MY_EVENTS_SECCESS:
      return {
        ...state,
        Loading: false,
        event: payload,
        error: null
      }

    case GET_ONE_EVENT_FAIL:
    case GET_MY_EVENTS_FAIL:
    case GET_EVENT_FAIL:
      return {
        ...state,
        Loading: false,
        event: null,
        error: payload
      }
    default:
      return state
  }
}
export default Event_Select;