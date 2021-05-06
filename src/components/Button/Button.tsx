import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Icon from 'components/Icon';

import Styled from './Button.styles';

export type ButtonProps = ({
	onClick: () => void;
	href?: string;
} | {
	onClick?: () => void;
	href: string;
}) & ({
	label: string;
	icon?: typeof Icon | SVGSVGElement | HTMLImageElement;
} | {
	label?: string;
	icon: typeof Icon | SVGSVGElement | HTMLImageElement;
}) & HTMLAttributes<HTMLButtonElement & HTMLAnchorElement>;

const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(({
	label,
	icon,
	onClick,
	href,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLButtonElement & HTMLAnchorElement>(forwardedRef);

	return <Styled.Button
		{...props}
		ref={componentRef}
		aria-label={label}
		href={href}
		as={href ? 'a' : undefined}
		onClick={href ? undefined : onClick}
	>
		{icon}
		{label && <span>{label}</span>}
	</Styled.Button>;
});

export default Button;