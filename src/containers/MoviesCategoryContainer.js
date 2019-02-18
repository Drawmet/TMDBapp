import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Category from '../components/Category';

import { getMoviesAction } from '../store/actions';
import { categories, path } from '../constants';

const mapStateToProps = state => ({
  title: categories.POPULAR_MOVIES,
  type: path.MOVIES,
  data: state.movies.data,
  page: state.movies.page,
});

const mapDispatchToProps = dispatch => ({
  getData: page => dispatch(getMoviesAction('popular', page)),
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
