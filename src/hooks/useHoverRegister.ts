import { useCursorifyDispatch } from '../components/CursorifyProvider'
import { HoverState } from '../types'

const useHoverRegister = () => {
  const dispatch = useCursorifyDispatch()

  const register = (hoverState: HoverState) => {
    return {
      onMouseEnter: (e: any) => {
        dispatch({
          type: 'UPDATE_HOVER_STATE',
          payload: hoverState,
        })
      },
      onMouseLeave: (e: any) => {
        dispatch({
          type: 'UPDATE_HOVER_STATE',
          payload: 'default',
        })
      },
    }
  }
  return register
}

export { useHoverRegister }
