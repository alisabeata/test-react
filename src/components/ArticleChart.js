import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticleChart extends Component {

  componentDidMount() {
    // some library (d3, jq...) works with this.refs.container
  }

  componentWillReciveProps(nextProps) {
    // some upd for new articles
  }

  render() {
    return(
      <div ref = 'container' />
    );
  }

  componentWillUnmount() {
    // do some clean up
  }
}

ArticleChart.PropTypes = {

};

export default ArticleChart;