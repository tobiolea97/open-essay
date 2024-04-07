import { configureStore } from '@reduxjs/toolkit'
import loginReducer  from '../Login'
import OpenAIReducer  from './OpenAiReducer'
import DataReducer from './DataReducer'

export default configureStore({
  reducer: {
    OpenAi: OpenAIReducer,
    login: loginReducer,
    data: DataReducer
  }
})
