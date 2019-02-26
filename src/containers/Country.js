import { connect } from "react-redux";
import Country from "../components/Country";
import { countriesSelectors } from "../redux/ducks/countries";

const mapStateToProps = state => {
  return {
    countries: state.countries
  };
};

class CountryContainer extends React.PureComponent {
  render() {
    const { countries, id } = this.props;
    const country = countriesSelectors.getCountryById(countries, id);
    return <Country {...country} />;
  }
}

export default connect(
  mapStateToProps,
  {}
)(CountryContainer);
