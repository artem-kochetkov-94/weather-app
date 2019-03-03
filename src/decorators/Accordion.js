export default Component =>
  class Accordion extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      };
      this.toggleOpen = this.toggleOpen.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }

    toggleOpen() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };
