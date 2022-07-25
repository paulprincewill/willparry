import styled from 'styled-components';

export default function Flexbox({children}) {

    const Div = styled.div`
        display: flex
        `;

    return(
  
        <Div>
            {children}
        </Div>
       
    )
}