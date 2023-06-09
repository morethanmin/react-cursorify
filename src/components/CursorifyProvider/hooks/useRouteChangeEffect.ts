import { Dispatch, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CursorifyReducerActionType } from '../../../types'

const isNext =
  typeof window !== 'undefined' && (window as any).__NEXT_DATA__ !== undefined

// TODO: support with Next.js
const useRouteChangeEffect = (
  dispatch: Dispatch<CursorifyReducerActionType>
) => {
  const location = useLocation()

  useEffect(() => {
    dispatch({
      type: 'UPDATE_HOVER_STATE',
      payload: 'default',
    })
  }, [location])

  return
}

export default useRouteChangeEffect
