import { createGlobalStyle } from "styled-components";
import { pixelToRem } from "../../utils/pixelToRem";

export let GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;800&display=swap');

body {
    --yellow-sun: #F5D15F;
    --text: #FFF;
    --button: #E85937;
    --subtitle: #D5D5DB;

    --space-light: #3D68B2;
    --space-dark: #040327;
    --space: #0B1E8A;

    --gray-01: #0D0E13;
    --gray-02: #2C2D2A;
    --gray-03: #60616F;
    --gray-04: #898A93;
    --gray-05: #D5D5DB;

    --mars: #e85937;
    --mars-light: #ff8c70;
    --mars-dark: #cf3f1d;
    --sun: #F5d15f;
    --jupiter: #e00e34;
    --earth: ;

     /* Fonts */
    --font-display: 800 ${pixelToRem(62)}/${pixelToRem(96)} "Heebo", sans-serif;
    --font-heading-1: 700 ${pixelToRem(32)}/${pixelToRem(48)} "Heebo", sans-serif;
    --font-heading-2: 500 ${pixelToRem(24)}/${pixelToRem(32)} "Heebo", sans-serif;
    --font-heading-3: 400 ${pixelToRem(20)}/${pixelToRem(24)} "Heebo", sans-serif;
    --font-mobile-heading-1: 800 ${pixelToRem(36)}/${pixelToRem(50)} "Heebo", sans-serif;
    --font-mobile-text-1: 500 ${pixelToRem(14)}/${pixelToRem(24)} "Heebo", sans-serif;
    --text-4: 500 ${pixelToRem(18)}/${pixelToRem(32)} "Heebo", sans-serif;
    --text-3: 500 ${pixelToRem(18)}/${pixelToRem(24)} "Heebo", sans-serif;
    --text-2: 500 ${pixelToRem(14)}/${pixelToRem(20)} "Heebo", sans-serif;
    --text-1: 400 ${pixelToRem(16)}/${pixelToRem(24)} "Heebo", sans-serif;
    --text-0: 400 ${pixelToRem(14)}/${pixelToRem(24)} "Heebo", sans-serif;
}

 body {
   font-family: 'Heebo', sans-serif;
 }
`;