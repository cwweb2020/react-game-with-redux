import styled from 'styled-components';

export const Heading = styled.h3`
    font-size: ${props => props.size || '1.5rem'};
    color : ${props => props.color || '#000'};
`