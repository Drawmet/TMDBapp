import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Category from '../components/Category';

import { getSeriesAction } from '../store/actions';
import { categories, path } from '../constants';

const mapStateToProps = state => ({
  title: categories.POPULAR_SERIES,
  type: path.SERIES,
  data: state.series.data,
  page: state.series.page,
});

const mapDispatchToProps = dispatch => ({
  getData: page => dispatch(getSeriesAction('popular', page)),
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
