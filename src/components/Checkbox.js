import cc from "classcat"
import Label from "./shared/Label"
import PropTypes from "prop-types"
import React from "react"

const propTypes = {
	check: PropTypes.func.isRequired,
	isChecked: PropTypes.bool,
	isDisabled: PropTypes.bool,
	label: PropTypes.string.isRequired
}

const defaultProps = {
	check: () => null,
	isChecked: false,
	isDisabled: false,
	label: ""
}

const Checkbox = props => {
	const checkboxClasses = cc({
		"fr-checkbox flex flex-gap-1 relative": true,
		"fr-checkbox--checked": props.isChecked,
		"fr-checkbox--unchecked": !props.isChecked,
		"fr-checkbox--disabled": props.isDisabled
	})

	return (
		<label className={ checkboxClasses }>
			<input
				type="checkbox"
				defaultChecked={ props.isChecked }
				onChange={ () => props.check() }
				className="h-0 w-0 none absolute"
			/>
			<span className="fr-checkbox__mark" />
			<Label>{props.label}</Label>
			<style jsx>{`
				.fr-checkbox {
					cursor: pointer;
					user-select: none;
				}

				.fr-checkbox__mark {
					height: 1.75rem;
					overflow: hidden;
					width: 1.75rem;

					background-color: var(--fr-ground);
					border-radius: 0.125rem;
					border: 2px solid var(--fr-500);
					transition: border-color 120ms ease-in-out;
				}

				.fr-checkbox__mark:after {
					left: 0.625rem;
					top: 0.25rem;
					position: absolute;

					height: 1rem;
					opacity: 0;
					width: 0.5rem;

					border: solid var(--fr-500);
					border-width: 0 0.1875rem 0.1875rem 0;
					transform: rotate(45deg) translateY(-0.125rem) translateX(-0.125rem);
					transition: all 120ms ease-in-out;

					content: " ";
				}

				.fr-checkbox input:checked ~ .fr-checkbox__mark:after {
					opacity: 1;

					transform: rotate(45deg) translateY(0) translateX(0);
				}

				.fr-checkbox input:checked ~ .fr-checkbox__mark {
					background-color: var(--fr-ground);
				}

				.fr-checkbox--disabled {
					opacity: 0.5;
					pointer-events: none;
				}
			`}</style>
		</label>
	)
}

Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

export default Checkbox