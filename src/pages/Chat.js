import React from 'react'
import Layout from '../Components/Layout'
import { ReactComponent as PlaneIcon } from '../assets/plane.svg'

const Chat = () => {
  return (
    <Layout>
      <div className="part">
        <div className="main-area"></div>
        <div className="search">
          <input type="text" placeholder="Search here...." />
          <PlaneIcon />
        </div>
      </div>
    </Layout>
  )
}

export default Chat
