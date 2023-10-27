import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};
:root{
    
}
html{ 
	font-size: 62.5%;
}
body{
	font-family: 'Pretendard', sans-serif;
}
a{
	text-decoration:none;
}
li{
	list-style: none;
}
p{
	color: #000;
}
Link{
	color: inherit;
	&:visited{
		color: inherit;
	}
}
button{
	padding: 0;
	border: none;
	background: transparent;
}
`;
export default GlobalStyle;
