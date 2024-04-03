import { configureStore } from '@reduxjs/toolkit'
import OpenAIReducer  from './OpenAiReducer'

export default configureStore({
  reducer: {
    OpenAi: OpenAIReducer
  }
})
