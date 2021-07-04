import "./styles.css";
import { ThemeProvider } from '@emotion/react';
import styled from "@emotion/styled";
import getTheme from './helper/getTheme';
import AccordionItem from "./AcordionItem";


const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: ${props => props.theme.backgroundUl};
  border-radius: 0.4rem;
  box-shadow: 0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06),
    0 20px 30px -10px rgba(15, 72, 179, 0.2);
`;
const Li = styled.li`
  border-bottom: ${props => props.theme.borderBottom};
  padding-bottom: 10px;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Acordion = ({ data, theme }) => {

	const lightTheme = {
		background: '#EBF4F8',
		color: '#2C2738',
		text: '#2C2738',
		accent: '#0880AE',
	}
	
	const selectedtheme = getTheme(theme);
	return (
		<ThemeProvider theme={selectedtheme}>
			<Ul>
				{data.map((data, key) => {
					return (
						<Li key={key}>
							<AccordionItem data={data} theme={theme} />
						</Li>
					);
				})}
			</Ul>
		</ThemeProvider>
	);
};

export default Acordion;
