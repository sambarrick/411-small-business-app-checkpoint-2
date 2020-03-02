import { connect } from 'react-redux';
import Listings from '../components/Listings';
import {addBusiness, removeBusiness} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        business: state.business
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)