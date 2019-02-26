import { connect } from "react-redux";
import Countries from "../components/Countries";

const mapStateToProps = state => {
  return {
    items: state.countries.allIds
  };
};

export default connect(
  mapStateToProps,
  {}
)(Countries);
