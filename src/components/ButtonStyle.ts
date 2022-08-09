import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRem";


export const ButtonComponent = styled.button`
    background: var(--mars);
    width: ${pixelToRem(264)};
    height: ${pixelToRem(62)};
    border-radius: ${pixelToRem(6)};
    border: none;

    margin-top: ${pixelToRem(32)};
    color: var(--text);
`;