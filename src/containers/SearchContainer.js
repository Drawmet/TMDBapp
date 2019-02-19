import { connect } from 'react-redux';

import Search from '../views/Search';
import { setSearchAction } from '../store/actions';

const mapStateToProps = state => ({
  value: state.search.value,
});

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(setSearchAction(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
