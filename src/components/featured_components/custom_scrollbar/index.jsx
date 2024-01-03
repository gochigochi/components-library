import React from 'react'
import FeaturedComponent from '../FeaturedComponent'
import CustomScrollbar from './component/CustomScrollbar'

const CustomScrollbarComponent = () => {
  return (
    <FeaturedComponent 
        title="Custom Scrollbar"
        component={<CustomScrollbar />}
    />
  )
}

export default CustomScrollbarComponent