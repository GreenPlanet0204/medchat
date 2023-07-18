import React from 'react'
import Layout from '../Components/Layout'
import { ReactComponent as PlaneIcon } from '../assets/plane.svg'

const Home = () => {
  const texts = [
    'Ask a medical question',
    'Find out how to manage your anxiety',
    'Health Insurance Questions',
    'Learn more about your symptoms',
    'How do I stay on top of my mental health?',
    'Find out how to eat right and exercise',
    'Make sense of your sensor data in your Apple Health Kit',
    'Find out more about your medications',
    'Find out more about my lab tests',
    'Make an appointment with my doctor',
    'Things to do before my surgery appointment?',
    'Create a summary of my medical record',
    'Things to do before my doctor appointment?',
    'Find the closest pharmacy',
    'Record meeting with my Doctor',
    'Things to do before my lab procedure?',
    'Find the closest medical lab',
    'Participate in clinical trials',
  ]
  return (
    <div className="dashboard">
      <Layout>
        <div className="desktop">
          <div className="main-area">
            <div className="top">
              <div className="btn active">MedChat</div>
              <div className="btn">Community Questions</div>
              <div className="btn">Med Chat for Nurses</div>
            </div>
            <div className="title">MedChat</div>
            <div className="content">
              {texts.map((item) => (
                <div className="item">
                  <div className="text">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="search">
            <input type="text" placeholder="Search here...." />
            <PlaneIcon />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
