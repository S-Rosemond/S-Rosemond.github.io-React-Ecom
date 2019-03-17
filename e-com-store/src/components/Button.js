import styled from 'styled-components';

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: ${props => (props.bg ? props.bg : 'transparent')};
	border: 0.05rem solid var(--mainWhite);
	color: var(--mainWhite);
	border-radius: 0.5rem;
	padding: 0.2rem 1rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.5rem 0.6rem;
	transition: all 0.5s easie-in-out;
	&:hover {
		color: ${props => (props.bg ? props.bg : 'white')};
		background: ${props => (props.bg ? 'white' : 'var(--lightBlue)')};
		border-color: ${props => (props.bg ? props.bg : ' 0.05rem solid var(--mainWhite)')};
	}
	&:focus {
		outline: none;
	}
`;
