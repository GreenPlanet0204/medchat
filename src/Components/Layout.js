import React from 'react'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import { ReactComponent as TrashIcon } from '../assets/trash.svg'

const Layout = ({ children }) => {
  return (
    <div className="main">
      <div className="menu">
        <div className="content-2">
          <div className="plus">
            <PlusIcon />
          </div>
          <div className="message-box">
            <div className="message">Message 1</div>
            <div className="btn">
              <TrashIcon />
            </div>
          </div>
          <div className="message-box">
            <div className="message">Message 2</div>
            <div className="btn">
              <TrashIcon />
            </div>
          </div>
          <div className="message-box">
            <div className="message">Message 3</div>
            <div className="btn">
              <TrashIcon />
            </div>
          </div>
        </div>

        <div className="profile">
          <div className="avatar" />
        </div>

        <div className="content">
          <div className="text">Try MedChat Mobile App</div>
          <div className="text">Try Chrome Extension</div>
          <div className="text">Try Mobile keyboard Extension</div>
          <div className="plus">
            <PlusIcon />
          </div>
        </div>
      </div>

      <div className="container">{children}</div>
    </div>
  )
}

export default Layout
