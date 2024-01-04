import { lazy, Suspense } from "react"
import useInView from "../../../hooks/useInView"
import FileUploader from "./component/FileUploader"
import { jsx, styled } from "./code"

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))

const FileUploaderComponent = () => {

  const { ref, inView } = useInView({ threshold: [0.25] })

  return (
    <div ref={ref}>
      <Suspense>
        {
          inView ?
            <FeaturedComponent
              title="File uploader"
              component={<FileUploader />}
              jsx={jsx}
              styled={styled}
            /> : null
        }
      </Suspense>
    </div>
  )
}

export default FileUploaderComponent