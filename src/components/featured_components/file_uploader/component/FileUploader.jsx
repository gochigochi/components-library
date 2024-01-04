import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { MdCloudUpload } from "react-icons/md"
import { Container, FileDropZone, InputHtml, DropText, Icon, PreviewImage, ButtonsContainer } from './Styled'

const FileUploader = () => {

    const [newFile, setNewFile] = useState({})
    const [isDragging, setDragging] = useState(false)

    const handleDragging = () => setDragging(!isDragging)

    const handleNewFile = (e) => {
        setNewFile({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }

    const handleUpload = async () => {
        
        const supabase = createClient(
            import.meta.env.VITE_SUPABASE_PROJECT_URL,
            import.meta.env.VITE_SUPABASE_PUBLIC_API_KEY
            )
        const uuid = crypto.randomUUID()
        const fileName = `${uuid}-${newFile.file.name}`

        try {

            const { data, error } = await supabase.storage
            .from(import.meta.env.VITE_SUPABASE_BUCKET)
            .upload(fileName, newFile.file)

            console.log(data)

            if (error) throw error

        } catch (error) {

            console.log(error)
        }

    }

    return (
        <Container>
            <FileDropZone
                dragging={isDragging}
                onDragEnter={handleDragging}
                onDragLeave={handleDragging}
                onDrop={handleDragging}
            >
                {
                    !newFile.url ?
                    <>
                        <Icon>
                            <MdCloudUpload />
                        </Icon>
                        <InputHtml onChange={handleNewFile} type="file" title="" value="" />
                        <DropText><span>Subir imagen</span> o soltarla</DropText>
                    </> :
                    <>
                        <PreviewImage src={newFile.url} alt="" />
                        <ButtonsContainer>
                            <button onClick={handleUpload}>Guardar</button>
                            <button onClick={() => setNewFile({})}>Borrar</button>
                        </ButtonsContainer>
                    </>
                }
            </FileDropZone>
        </Container>
    )
}

export default FileUploader