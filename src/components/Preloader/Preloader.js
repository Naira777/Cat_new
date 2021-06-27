import React from 'react';
import preloader from './../../../src/Images/Preloader.svg'
import * as Styled from "./styled";

const Preloader = () => {

return (
<Styled.Box>
    <Styled.Image src= {preloader}
 />
 </Styled.Box>
)
}

export default Preloader;
