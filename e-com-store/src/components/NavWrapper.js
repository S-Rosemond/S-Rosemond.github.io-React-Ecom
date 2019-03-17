import styled from 'styled-components';

export const NavWrapper = styled.nav`
	background-color: var(--navDark);

	.nav-link {
		color: var(--navBlue) !important;
		font-size: 1.9rem;
		font-family: Amiri !important;

		text-transform: capitalize !important;
		&:hover {
			color: var(--mainWhite) !important;
		}
	}
`;
