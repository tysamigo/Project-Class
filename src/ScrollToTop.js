import React from 'react'
import { withRouter } from 'react-router-dom'

// Found Scroll to top code here https://zeph.co/react-router-scroll-to-top

class ScrollToTop extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return null;
	}
}

export default withRouter (ScrollToTop);