import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Category from '../components/Category';

import { getDocumentaryAction } from '../store/actions';
import { categories } from '../constants';

const mapStateToProps = state => ({
  title: categories.DOCUMENTARY,
  data: state.documentary.data,
  page: state.documentary.page,
});

const mapDispatchToProps = dispatch => ({
  getData: page => dispatch(getDocumentaryAction('popular', page)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getData();
    },
  })
)(Category);
