import { connect } from 'react-redux';
import ListingsLoggedIn from '../components/ListingsLoggedIn';
import { fetchMakes, deleteMake } from '../redux/actions'

export default connect(mapStateToProps, mapDispatchToProps)(ListingsLoggedIn)