import { ButtonStyle, Span} from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClickButton }) => {
	return (
		<ButtonStyle type="button" onClick={onClickButton}>
							<Span data-comp="spanItem">Load More</Span>
						</ButtonStyle>
	);
}

export default Button;

Button.propTypes = {
	onClickButton: PropTypes.func.isRequired,
};