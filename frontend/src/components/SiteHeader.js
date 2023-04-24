import React from "react"
import { Link } from 'react-router-dom'

export default function SitesHeader() {
  return (
    <div className="site-header">
        <Link to="/"><h1>Restaurant Reviews</h1></Link>      
    </div>
  )
}
