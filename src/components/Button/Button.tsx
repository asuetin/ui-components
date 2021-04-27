import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Icon from 'components/Icon';

import Styled from './Button.styles';

export type ButtonProps = {
	className?: string;
	onClick: () => void;
	labelledBy?: string;
} & ({
	label: string;
	icon?: typeof Icon | SVGSVGElement | HTMLImageElement;
} | {
	label?: string;
	icon: typeof Icon | SVGSVGElement | HTMLImageElement;
}) & HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
	className,
	onClick,
	label,
	icon,
	labelledBy,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLButtonElement>(forwardedRef);

	return <Styled.Button
		className={className}
		ref={componentRef}
		onClick={onClick}
		aria-labelledby={label ? undefined : labelledBy}
		aria-label={label}
		{...props}
	>
		{icon}
		{label && <span>{label}</span>}
	</Styled.Button>;
});

export default Button;