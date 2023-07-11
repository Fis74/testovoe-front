import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { API } from '@/services/Service'

let store: AppStore

export const initStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      [API.reducerPath]: API.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(API.middleware),
  })
}
export const initializeStore = (preloadedState: PreloadedState<RootState>) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({ ...store.getState(), ...preloadedState })
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState: RootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export type AppStore = ReturnType<typeof initStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>
