import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class RequireAuthComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.ShouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.ShouldNavigateAway();
    }
    ShouldNavigateAway() {
      if (!this.props.token) {
          console.log(this.props)
          this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { token: state.auth.token };
  }
  return connect(mapStateToProps)(RequireAuthComponent);
