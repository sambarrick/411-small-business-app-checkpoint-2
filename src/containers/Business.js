import { connect } from 'react-redux';
import Business from '../components/Business'

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}

export default connect(mapStateToProps)(Business)