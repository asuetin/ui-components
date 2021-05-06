import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const TextInput = styled.input(({theme}) => {
	const {fontFamily, background, content, size, radius, shadow, light} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		height: ${size[3]};

		font-family: ${fontFamily};
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: ${content[3]};
		background-color: ${background[8]};
		box-shadow: ${shadow[0]};
		outline: none;
		border: none;
		border-radius: ${radius[2]};
		transition: ${['background-color', 'box-shadow'].map(v => `${v} 125ms ease-in-out`).join()};

		padding: 0 ${size[1]} 0 ${size[1]};

		&[aria-multiline='true']{
			padding: ${size[1]};
		}

		&::placeholder {
			color: ${content[9]};
		}

		&:focus, &:hover {
			box-shadow: ${light[1]};
			background-color: ${background[9]};
		}

		&:disabled {
			background-color: ${background[4]};
		}

		&:disabled, &:read-only {
			pointer-events: none;
		}

		::-webkit-scrollbar {
			width: var(--width-scrollbar);
		}

		::-webkit-scrollbar-button {
			display: none;
		}

		::-webkit-scrollbar-thumb {
			background-color: ${content[8]};
			border-radius: ${radius[2]};
		}

		::-webkit-scrollbar-thumb:hover {
			background-color: ${content[9]};
		}

		::-webkit-scrollbar-track,
		::-webkit-scrollbar-track-piece,
		::-webkit-resizer,
		::-webkit-scrollbar-corner {
			display: none;
		}
	`;
});

export default {TextInput};