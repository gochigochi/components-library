export const jsx = `import { useState } from 'react'
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
        const fileName = \`\${uuid}-\${newFile.file.name}\`

        try {

            const { data, error } = await supabase.storage
            .from(import.meta.env.VITE_SUPABASE_BUCKET)
            .upload(fileName, newFile.file)

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

export default FileUploader`

export const styled = `import styled from "styled-components"

export const Container = styled.div\`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
\`

export const FileDropZone = styled.section\`
    position: relative;
    border: 2px dashed var(--light-gray);
    padding: 1rem;
    border-radius: 12px;
    overflow: hidden;
    height: auto;
    width: 95%;
    max-width: 20rem;
    height: 20rem;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: \${({dragging}) => dragging ? "var(--ghost-color)" : "transparent"};
    transition: all .2s ease-in-out;
\`

export const InputHtml = styled.input\`
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    text-transform: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;

    &:focus {
        outline: none;
    }
\`

export const DropText = styled.p\`
    color: var(--text-color);
    margin-bottom: .5rem;

    span {
        color: var(--pale-red);
        text-decoration: underline;
    }
\`

export const Icon = styled.i\`
    svg {
        font-size: 4rem;
        fill: var(--pale-red);
    }
\`

export const PreviewImage = styled.img\`
    width: 10rem;
    height: 10rem;
    border-radius: 500px;
    object-fit: cover;
    box-shadow: var(--soft-shadow);
\`

export const ButtonsContainer = styled.div\`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
\`
`