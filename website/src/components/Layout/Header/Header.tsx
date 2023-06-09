import styled from '@emotion/styled'
import OpenColor from 'open-color'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiLinkExternal } from 'react-icons/bi'
import { useHoverRegister } from 'react-cursorify'

// TODO: github 문구로 변경

type Props = {}

const Header: React.FC<Props> = () => {
  const location = useLocation()
  const register = useHoverRegister()
  return (
    <StyledWrapper>
      <div className="lt">
        <Link className="logo" to={'/'} {...register('pointer')}>
          🕹️ React Cursorify
        </Link>
        <nav>
          <Link
            className="menu"
            data-active={location.pathname === '/docs'}
            to={'/docs'}
            {...register('pointer')}
          >
            Docs
          </Link>
          <Link
            className="menu"
            data-active={location.pathname === '/cursor'}
            to={'/cursor'}
            {...register('pointer')}
          >
            Cursor
          </Link>
          {/* <Link
            className="menu"
            data-active={location.pathname === '/playground'}
            to={'/playground'}
            {...register('pointer')}
          >
            Playground
          </Link> */}
        </nav>
      </div>
      <div className="rt">
        <a
          href="https://github.com/morethanmin/react-cursorify"
          rel="noreferrer"
          target="_blank"
          {...register('pointer')}
        >
          <div>Github</div>
          <BiLinkExternal />
        </a>
      </div>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid ${OpenColor.gray[3]};
  padding: 0 20px;
  > .lt {
    display: flex;
    align-items: center;
    gap: 40px;
    .logo {
      color: ${OpenColor.gray[9]};
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
    }
    nav {
      display: flex;
      align-items: center;
      gap: 20px;
      .menu {
        color: ${OpenColor.gray[9]};
        text-decoration: none;
        font-weight: 400;
        &[data-active='true'] {
          color: ${OpenColor.violet[9]};
        }
      }
    }
  }
  > .rt {
    a {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 8px;
      svg {
        color: ${OpenColor.gray[9]};
        font-size: 22px;
      }
      &:hover {
        background-color: ${OpenColor.gray[1]};
      }
    }
  }
`
