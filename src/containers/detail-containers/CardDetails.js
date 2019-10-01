import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class CardDetail extends PureComponent {
  // static propTypes = {
  //   prop: PropTypes.type.isRequired
  // }

  render() {
    return (
      <h1>Hello Bananana</h1>
    );
  }
}

// const mapStateToProps = state => ({

// });
// const mapDispatchToProps = dispatch => ({

// });
export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(CardDetail);
