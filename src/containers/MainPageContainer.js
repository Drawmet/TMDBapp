import { connect } from 'react-redux';

import MainPage from '../views/MainPage';

const mapStateToProps = state => ({
  ...state.app,
});

export default connect(mapStateToProps)(MainPage);
