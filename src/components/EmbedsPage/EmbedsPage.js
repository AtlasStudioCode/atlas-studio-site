import React from 'react'

import './EmbedsPage.css'

function EmbedsPage({ title, src }) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe title={title} className="embed-responsive-item" src={src}
        allowfullscreen></iframe>
    </div>
  )
}

export default EmbedsPage;