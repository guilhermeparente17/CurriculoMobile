import React from 'react'
import {
    HomeContainer,
    HomeImage,
    HomeTitle,
    HomeSubTitle,
    HomeTitleExp
} from './HomeElements'
import Imagem from '../../images/perfil.jpeg'
import { ScrollView } from 'react-native'

import Exp from '../Exp'

const index = () => {
    return (
        <>
        <ScrollView>
            <HomeContainer>
                <HomeImage source={Imagem} />
                <HomeTitle>Guilherme Parente</HomeTitle>
                <HomeSubTitle>Desenvolvedor Mobile</HomeSubTitle>

                <HomeTitleExp>Experiencia</HomeTitleExp>
                    <Exp />

                <HomeTitleExp>Trabalhos</HomeTitleExp>
                    <Exp />
                
            </HomeContainer>
        </ScrollView>
        </>
    )
}

export default index
