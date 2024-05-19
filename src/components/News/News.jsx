import React from 'react'
import './News.scss'
import photo from '../../assets/cocobod-calls-for-equitable-cost-sharing-of-traceability-infrastructure.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

const News = () => {
  return (
    <div className="news-container">
        <h1>Latest News</h1>
        <div className='news'>
      <div className="news-temp">
        <div className="news-photo">
            <img src={photo} alt="" />
        </div>
        <div className="news-desc">
            <div className="date">
                <p>22 June, 2024</p>
            </div>
            <div className="news-head">
                <h3>Discovery Land</h3>
            </div>
            <div className="read">
                <p>Read more <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
            </div>
        </div>
      </div>
      <div className="news-temp">
        <div className="news-photo">
            <img src={photo} alt="" />
        </div>
        <div className="news-desc">
            <div className="date">
                <p>22 June, 2024</p>
            </div>
            <div className="news-head">
                <h3>Discovery Land</h3>
            </div>
            <div className="read">
                <p>Read more <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
            </div>
        </div>
      </div>
      <div className="news-temp">
        <div className="news-photo">
            <img src={photo} alt="" />
        </div>
        <div className="news-desc">
            <div className="date">
                <p>22 June, 2024</p>
            </div>
            <div className="news-head">
                <h3>Discovery Land</h3>
            </div>
            <div className="read">
                <p>Read more <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
            </div>
        </div>
      </div>
    </div>
      {/* <div className="box">
      <div className="box-container">
        <img src={photo} alt="Box Image" className="box-image" />
        <div className="box-text">
        <h2 className="title">sdbis</h2>
        <p className="description">sddsv</p>
        </div>
      </div>
      <div className="box-container">
        <img src={photo} alt="Box Image" className="box-image" />
        <div className="box-text">
        <h2 className="title">sdbis</h2>
        <p className="description">sddsv</p>
        </div>
      </div>
      </div> */}
    </div>
  )
}

export default News
