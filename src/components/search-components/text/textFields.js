import { connect } from 'react-redux';

import { changeName, changeTypeLine, changeText } from '../../../actions/searchFormActions';
import { changeTextField } from '../../../actions/simpleSearchActions';
import { getCardName, getCardText, getTypeLine } from '../../../selectors/searchFormSelectors';
import { getSimpleText } from '../../../selectors/simpleFormSelectors';
import TextField from './TextField';

const textFieldConstructor = [
  {
    id: 'SimpleText',
    selector: getSimpleText,
    action: changeTextField,
    placeholder: 'Search for Cards by Name, Type, or Text'
  },
  {
    id: 'CardName',
    selector: getCardName,
    action: changeName,
    placeholder: 'Search Cards by Name'
  },
  {
    id: 'CardTypeLine',
    selector: getTypeLine,
    action: changeTypeLine,
    placeholder: 'Search Cards by Type Line'
  },
  {
    id: 'CardText',
    selector: getCardText,
    action: changeText,
    placeholder: 'Search Cards by Text'
  }
];

const statefulTextInputs = {};

textFieldConstructor.forEach(({ id, selector, action, placeholder }) => {
  const mapStateToProps = state => ({
    text: selector(state),
    placeholder
  });

  const mapDispatchToProps = dispatch => ({
    handleChange(text) {
      dispatch(action(text));
    }
  });

  statefulTextInputs[id] = connect(mapStateToProps, mapDispatchToProps)(TextField);

});

export default statefulTextInputs;




