import styled from 'styled-components';

export const NavWrapper = styled.nav`
	background-color: var(--navDark);

	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		font-family: Amiri !important;

		text-transform: capitalize !important;
		&:hover {
			color: var(--navBlue) !important;
		}
	}
`;
