import styles from './main.module.css';
import styled from 'styled-components';

export default function Main({children}) {

    const Section = styled.section`
            background: darkblue;
            color: white`;

    return(
  
        <Section>
            {children}
        </Section>
       
    )
}