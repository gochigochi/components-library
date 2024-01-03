import React from 'react'
import FeaturedComponent from '../FeaturedComponent'
import CustomScrollbar from './component/CustomScrollbar'
import { jsx, styled, hoc } from './code'

const CustomScrollbarComponent = () => {
  return (
    <FeaturedComponent 
        title="Custom Scrollbar"
        component={<CustomScrollbar />}
        jsx={jsx}
        styled={styled}
        hoc={hoc}
    />
  )
}

export default CustomScrollbarComponent