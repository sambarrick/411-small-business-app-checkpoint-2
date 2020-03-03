import { connect } from 'react-redux'
import AddBusiness from '../components/AddBusiness'
import {addBusiness} from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business))
    }
}

const mapStateToProps = (state) => {
    return {
        businessTotal: state.business.length
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness)
