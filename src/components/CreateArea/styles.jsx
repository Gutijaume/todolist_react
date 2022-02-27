import styled from "styled-components";
import Zoom from '@mui/material/Zoom'

export const NoteContent = styled.textarea`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2rem;
    font-family: inherit;
    resize: none;
`

export const Formulario = styled.form`
    position: relative;
    width: 480px;
    margin: 30px auto 20px auto;
    background: #fff;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
`

export const NoteTitle = styled.input`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: ${({theme})=> theme.scale.h2}
    font-family: inherit;
    resize: none;
`

export const IcconContainer = styled.div`
    position: absolute;
    left: 440px;
    bottom: -30px;
    cursor: pointer;
`