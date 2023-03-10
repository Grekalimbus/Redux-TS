# Start Actions

Create folder store > in store create index.ts, todoSlice.ts

## In store > index.ts

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

## Create Hook

In Hook :
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import type {RootState, AppDispatch} from './store'

export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export const useAppSelector :TypedUseSelectorHook<RootState> = useSelector

### Create TodoSlice
