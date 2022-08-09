import styled from "styled-components";
import { pixelToRem } from "../../utils/pixelToRem";



export const Header = styled.div`
    display: flex;
    width: 100%;
`;

export const Logo = styled.image`
    width: ${pixelToRem(201)};
    height: ${pixelToRem(41)};
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%
`

export const LittleTitle = styled.p`
    color: var(--sun);
    font: var(--text-3); 
    padding: 0;
    margin-bottom: ${pixelToRem(8)};
    letter-spacing: ${pixelToRem(4)};
`
export const MainTitle = styled.p`
    font-size: ${pixelToRem(62)};
    font-weight: 800;
    font-family: 'Heebo', sans-serif;
    letter-spacing: ${pixelToRem(1)};
    color: var(--text);
    padding: 0;
    margin: 0;
`

export const Subtitle = styled.div`
    font: var(--font-heading-3);
    color: var(--text);

    margin-top: ${pixelToRem(24)};
`