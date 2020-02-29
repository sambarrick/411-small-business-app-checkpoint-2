import { connect } from 'react-redux';
import Listings from '../components/Listings';
import { fetchMakes, deleteMake } from '../redux/actions'

export default connect(mapStateToProps, mapDispatchToProps)(Listings)