import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare, FaWindowClose } from 'react-icons/fa';
import { connect } from 'react-redux';

class FormatsField extends PureComponent {
  static propTypes = {
    formats: PropTypes.array.isRequired,
    selectedFormat: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFormatPush: PropTypes.func.isRequired,
    handleFormatDelete: PropTypes.func.isRequired,
    availGameFormats: PropTypes.array.isRequired
  }


  render() {
    const formatsList = availGameFormats.map((format, i) => (
      <option key={i} value={format}>{format}</option>
    ));
    const taggedFormatsList = formats.map((format, i) => (
      <li key={i} style={{ display: 'flex', listStyleType: 'none', alignItems: 'center', flexGrow: 0, width: '15%', height: '20px', padding: '3px' }}>
        <h5>{format}</h5>
        <FaWindowClose size="15" onClick={() => handleFormatDelete(format)} />
      </li>
    ));
    return (
      <main>
        <ul style={{ display: 'flex', flexWrap: 'wrap', width: '93%' }}>
          {taggedFormatsList}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select value={selectedFormat} name="selectedFormat" onChange={handleChange}>
            <option value="">--Filter By Format--</option>
            {formatsList}
          </select>
          <FaPlusSquare name="formats" size="23" onClick={handleFormatPush} />
        </div>
      </main>
    );
  }
}

  

// }

// FormatsField.propTypes = {
//   formats: PropTypes.array.isRequired,
//   selectedFormat: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleFormatPush: PropTypes.func.isRequired,
//   handleFormatDelete: PropTypes.func.isRequired,
//   availGameFormats: PropTypes.array.isRequired
// };

export default FormatsField;
