import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Category from '../components/Category';

import { getFamilyAction } from '../store/actions';
import { categories, path } from '../constants';

const mapStateToProps = state => ({
  title: categories.DOCUMENTARY,
  type: path.MOVIES,
  data: state.family.data,
  page: state.family.page,
});

const mapDispatchToProps = dispatch => ({
  getData: page => dispatch(getFamilyAction('popular', page)),
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
