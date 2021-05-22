import React from 'react'
import {
HomeExp,
HomeCard,
HomeCardImage,
HomeCardTitle
} from './ExpElements'

import ReactImage from '../../images/reactjs.png'
import Redux from '../../images/redux.png'
import StyledComp from '../../images/styled.png'

const index = () => {
    return (
        <>
            <HomeExp>     
                    <HomeCard>
                            <HomeCardImage source={ReactImage} />
                            <HomeCardTitle>React</HomeCardTitle>
                    </HomeCard>

                    <HomeCard>
                            <HomeCardImage source={Redux} />
                            <HomeCardTitle>Redux</HomeCardTitle>
                    </HomeCard>

                    <HomeCard>
                            <HomeCardImage source={StyledComp} />
                            <HomeCardTitle>Styled</HomeCardTitle>
                    </HomeCard>
                </HomeExp>
        </>
    )
}

export default index
