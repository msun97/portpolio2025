import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  :root {
  width: 100% !important;
    --background-color: #1c1c1e;
    --perspective: 2000px;
  
    /* Primary Colors (Pink) */
    --primary-10: rgb(254, 239, 242);  /* rgb(254, 239, 242) */
    --primary-20: rgb(253, 230, 236);  /* rgb(253, 230, 236) */
    --primary-30: rgb(250, 204, 215);  /* rgb(250, 204, 215) */
    --primary-40: rgb(245, 126, 154);  /* rgb(24  5, 126, 154) */
    --primary-50: rgb(240, 90, 126);   /* rgb(240, 90, 126) */
    --primary-60: rgb(216, 81, 113);   /* rgb(216, 81, 113) */
    --primary-70: rgb(192, 72, 100);   /* rgb(192, 72, 100) */
    --primary-80: rgb(144, 54, 75);    /* rgb(144, 54, 75) */
    --primary-90: rgb(108, 40, 56);    /* rgb(108, 40, 56) */

    /* Secondary Colors (Yellow) */
    --secondary-10: rgb(255, 248, 224);  /* rgb(255, 248, 224) */
    --secondary-20: rgb(255, 242, 201);  /* rgb(255, 242, 201) */
    --secondary-30: rgb(255, 218, 94);   /* rgb(255, 218, 94) */
    --secondary-40: rgb(255, 218, 94);   /* rgb(255, 218, 94) */
    --secondary-50: rgb(255, 208, 52);   /* rgb(255, 208, 52) */
    --secondary-60: rgb(222, 177, 27);   /* rgb(222, 177, 27) */
    --secondary-70: rgb(153, 125, 32);   /* rgb(153, 125, 32) */
    --secondary-80: rgb(105, 86, 21);    /* rgb(105, 86, 21) */
    --secondary-90: rgb(75, 61, 15);     /* rgb(75, 61, 15) */

    /* Gray Scale */
    --gray-0: rgb(255, 255, 255);    /* White */
    --gray-10: rgb(241, 241, 241);   /* rgb(241, 241, 241) */
    --gray-20: rgb(221, 221, 221);   /* rgb(221, 221, 221) */
    --gray-30: rgb(206, 206, 206);   /* rgb(206, 206, 206) */
    --gray-40: rgb(185, 185, 185);   /* rgb(185, 185, 185) */
    --gray-50: rgb(146, 146, 146);   /* rgb(146, 146, 146) */
    --gray-60: rgb(95, 95, 95);      /* rgb(95, 95, 95) */
    --gray-70: rgb(80, 80, 80);      /* rgb(80, 80, 80) */
    --gray-80: rgb(51, 51, 51);      /* rgb(51, 51, 51) */
    --gray-90: rgb(28, 28, 30);      /* rgb(28, 28, 30) */

    /* Semantic Colors */
    --text-primary: var(--gray-0);
    --text-secondary: var(--gray-40);
    --background-primary: var(--gray-90);
    --background-secondary: var(--gray-80);
    --hover-color: var(--primary-50);
    --border-color: var(--gray-70);

    /* layout */
    --layout: 1440px;
    --p-tablet: 30px;
    --p-mobile: 15px;

    /* font styles */
    --font-primary: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    --font-size-root: 10px;
    --font-size-base: 1.0rem;

    /* font-size */
    --font-title-xs: 56px;
    --font-title-s: 64px;
    --font-title-m: 72px;
    --font-title-l: 90px;
    --font-title-xl: 120px;
    --font-heading-m: 17px;
    --font-content-s: 16px;
    --font-content-m: 17px;
    --font-content-l: 20px;
    --font-content-xl: 24px;
    --font-content-xxl: 26px;
    --font-content-xxxl: 36px;
    --font-label-xs:12px;
    --font-label-s: 14px;
    --font-label-m: 20px;
    --font-label-l: 24px;
    --font-footer-m: 2.0rem;

    --font-title-m-tablet: 48px;
    --font-heading-m-tablet: 17px;
    --font-content-m-tablet: 16px;
    --font-content-xxl-tablet: 24px;
    --font-label-m-tablet: 12px;
    --font-label-xl-tablet: 14px;
    --font-footer-m-tablet: 12px;

    --font-title-m-mobile: 30px;
    --font-heading-m-mobile: 15px;
    --font-content-m-mobile: 14px;
    --font-content-l-mobile: 16px;
    --font-content-xxl-mobile: 20px;
    --font-label-m-mobile: 7px;
    --font-label-xl-mobile: 14px;
    --font-footer-m-mobile: 10px;

    /* font-weight */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;


    /* line-hieght */
    --line-height-base: 1.2;

    @font-face {
      font-family: 'LOTTERIACHAB';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/LOTTERIACHAB.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
      @font-face {
    font-family: 'LOTTERIADDAG';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/LOTTERIADDAG.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  }
  
html,
body {
  position: relative;
  width: 100%;
  font-family: var(--font-primary);
  color: var(--text-primary);
  line-height: var(--line-height-base);
  word-break: keep-all;
  word-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
  background-color: var(--background-primary);
}
html {
  font-size: $font-size-root;
}
body {
  font-size: var(--#{$prefix}fz-body-md);
  overflow-x: hidden;
}
*:focus {
  @include focus();
}
::-moz-selection {
  background: var(--background-primary);
  color: var(--#{$prefix}white);
}
::selection {
  background: var(--background-primary);
  color: var(--#{$prefix}white);
}

main {
margin-left: 80px;
}

body,
div,
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
dl,
dt,
dd,
table,
th,
td,
form,
fieldset,
legend,
input,
textarea,
a,
button,
select,
ul,
li,
span,
em,
label,
:before,
:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: none;
  font-family: inherit;
  line-height: var(--line-height-base);
  letter-spacing: -0.015em;
}
pre {
  font-family: inherit;
}
input,
textarea,
a,
button,
select,
span,
label,
:before,
:after {
  font: {
    size: inherit;
    weight: inherit;
  }
}
h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: map-get($fws, bold);
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img,
fieldset {
  border: 0;
}
fieldset {
  min-width: 100%;
}
img {
  max-width: 100%;
  vertical-align: top;
}
ul,
ol {
  list-style: none;
}
em,
address,
i {
  font-style: normal;
}
a,
a:hover,
a:active,
a:focus {
  color: inherit;
  text-decoration: none;
}
button,
input[type="submit"],
input[type="button"] {
  overflow: visible;
  margin: 0;
  background-color: transparent;
  border: none;
  -webkit-appearance: button;
  cursor: pointer;
  font: inherit;
  color: inherit;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}

textarea {
  resize: none;
}

label {
  cursor: pointer;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="text"],
input[type="tel"],
input[type="password"],
input[type="file"],
input[type="number"],
input[type="email"],
input[type="date"],
input[type="search"],
textarea {
  -webkit-box-shadow: none;
  box-shadow: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

caption {
  position: static !important;
  margin: 0 !important;
}

table {
  table-layout: fixed;
  max-width: none;
  width: auto;
  min-width: 100%;
  border-collapse: collapse;
}

[role="button"] {
  cursor: pointer;
}

.img img {
  min-width: 100%;
  max-width: 100%;
}
.img.bg-img {
  background-size: cover;
}

.blind,
hr,
.sr-only,
legend,
caption {
  @include sr-only;
}
.hide {
  display: none !important;
}
.show {
  display: block !important;
}

.al {
  text-align: left !important;
}
.ac {
  text-align: center !important;
}
.ar {
  text-align: right !important;
}

//responsive mobile
@include mobile {
  .pc-only {
    display: none !important;
  }
  .pc-only.read {
    @include sr-only;
  }
  .mob-line {
    display: block;
    line-height: inherit;
  }
}

@include mobileMore {
  .mob-only {
    display: none !important;
  }
  .mob-only.read {
    @include sr-only;
  }
  .pc-line {
    display: block;
    line-height: inherit;
  }
}
`;

export default GlobalStyle;
