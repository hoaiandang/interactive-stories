import Header from './Header';
import React from 'react';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}


class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={layoutStyle}>
		    	<Header />
		    	{this.props.children}
		 	</div>
	 	)
	}
}

//can be used interchangeably?


/*
const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)
*/


export default Layout