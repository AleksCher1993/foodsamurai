import React from "react"
import ContentLoader from "react-content-loader"

export const PizzaSkeletonItem:React.FC = () => {
return <ContentLoader 
  className="pizza-block"
  speed={2}
  width={280}
  height={466}
  viewBox="0 0 280 466"
  backgroundColor="#f3f3f3"
  foregroundColor="#ffffff"
  >
    <circle cx="140" cy="130" r="130" /> 
    <rect x="0" y="282" rx="0" ry="0" width="280" height="27" /> 
    <rect x="0" y="333" rx="0" ry="0" width="280" height="76" /> 
    <rect x="0" y="428" rx="10" ry="10" width="90" height="27" /> 
    <rect x="132" y="424" rx="20" ry="20" width="150" height="43" />
  </ContentLoader>
  }

