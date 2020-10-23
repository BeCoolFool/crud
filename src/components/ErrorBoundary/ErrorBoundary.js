import React from "react";
import { connect } from "react-redux";
import { handleAppError } from "../../actions/actions";
import ErrorBanner from "./ErrorBanner";

class ErrorBoundary extends React.Component {


  componentDidCatch(error, info) {
    this.props.handleAppError(error);
  }

  render() {
    if (this.props.error) {
      return <ErrorBanner />;
    }
    return this.props.ownProps.children;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.error,
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAppError: (err) => dispatch(handleAppError(err)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
