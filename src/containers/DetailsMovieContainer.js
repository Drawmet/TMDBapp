import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Details from '../views/Details';

import { getDetaildByIdAction } from '../store/actions';
import { path } from '../constants';

const mapStateToProps = state => ({
  data: state.movies.current,
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(getDetaildByIdAction(path.MOVIES, id)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      const {
        match: {
          params: { id },
        },
        getData,
      } = this.props;
      getData(id);
    },
  })
)(Details);
