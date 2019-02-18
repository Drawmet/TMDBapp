import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Details from '../views/Details';

import { getDetaildByIdAction } from '../store/actions';
import { path } from '../constants';

const mapStateToProps = state => ({
  processed: state.app.processed,
  data: state.series.current,
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(getDetaildByIdAction(path.SERIES, id)),
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
