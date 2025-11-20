import React from 'react'
import type { currentPage } from '../types/current-page'
import DiscoverRecipes from './discover-recipes/DiscoverRecipes'
import './Feed.css'

interface FeedProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<currentPage>>
}

const Feed: React.FC<FeedProps> = ({ setCurrentPage }) => {
  const handleBackClick = () => {
    setCurrentPage({ currentPage: { page: 'homepage' } })
  }

  return (
    <div className="feed-container">
      <button className="back-button" onClick={handleBackClick}>
        ← Back
      </button>
      <div className="w-full h-full">
        <DiscoverRecipes setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}

export default Feed