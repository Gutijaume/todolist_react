import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';

import { Header, Title } from './styles'
import { useTheme, useUpdateTheme,} from './ThemeContext/ThemeContext';

export default function HeaderWeb() {
    const darkTheme = useTheme()
    const tooggleTheme = useUpdateTheme()

    const theme = { //Esto es un estilo que lo exportaré abajo en el return
        backgroundColor: darkTheme ? '#202124' : '#f5ba13',
        border: darkTheme && 'solid 1px #eee'
    }


  return (
    <div>
        <Header style={theme}>
            <Title>BENET GARCIA SL</Title>
            <div onClick={tooggleTheme}>
                {darkTheme ? (<Brightness5Icon sx={{color:'white'}}/>) : (<Brightness4Icon sx={{color:'white'}}/>)}
            </div>            
        </Header>
    </div>
  )
}
