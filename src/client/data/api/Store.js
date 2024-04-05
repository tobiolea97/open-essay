import { configureStore } from '@reduxjs/toolkit'
import OpenAIReducer  from './OpenAiReducer'
import loginReducer  from '../Login'

export default configureStore({
  reducer: {
    OpenAi: OpenAIReducer,
    login: loginReducer
  }
})
