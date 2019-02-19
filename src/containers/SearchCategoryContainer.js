import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';

import Category from '../components/Category';

import { getSearchAction } from '../store/actions';
import { categories, path } from '../constants';

const mapStateToProps = state => ({
  title: categories.SEARCH,
  type: path.MOVIES,
  value: state.search.value,
  data: state.search.data,
  page: state.series.page,
});

const mapDispatchToProps = dispatch => ({
  getSearch: (value, page) => dispatch(getSearchAction(value, 'popular', page)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      const { value, getSearch } = this.props;

      if (value) {
        getSearch(value, 1);
      }
    },
  }),
  withHandlers({
    getData: ({ value, getSearch }) => (page = 1) => getSearch(value, page),
  })
)(Category);
