import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: 'Nunito', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html{
    background: #253237
}

 :root{
    --cor-principal: #253237;
    --cor-secundaria: #1C2541;
    --cinza-1: #F8F9FA;
    --cinza-2: #868E96;
    --cinza-3: #343A40;
    --cinza-4: #2E2E2E;
    --verde: #03B898;

    --font-family: 'Nunito', sans-serif;

    /* Títulos */
    --title-weight-bold: bold;
    --title-1-font-size: 30px;
    --title-2-font-size: 22px;
    --title-3-font-size: 16px;
    --title-4-font-size: 12px;

    /* Cabeçalhos */
    --headline-font-weight: normal;
    --headline-font-size: 16px;

    /* Corpo */
    --body-font-weight: normal;
    --body-font-size: large;
 }
`;
