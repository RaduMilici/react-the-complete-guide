import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  }

  componentDidCatch = errorMessage => {
    this.setState({ hasError: true, errorMessage })
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrong</h1>
    ) : (
      this.props.children
    )
  }
}

export default ErrorBoundary
