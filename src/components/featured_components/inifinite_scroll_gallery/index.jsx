import React from 'react'
import FeaturedComponent from '../FeaturedComponent'
import InfiniteScrollGallery from './component/InfiniteScrollGallery'
import { jsx, styled, hooks } from './code'

const InfiniteScrollGalleryCompononent = () => {
  return (
    <FeaturedComponent 
        title="Infinite Scroll Gallery"
        component={<InfiniteScrollGallery />}
        jsx={jsx}
        styled={styled}
        hooks={hooks}
    />
  )
}

export default InfiniteScrollGalleryCompononent