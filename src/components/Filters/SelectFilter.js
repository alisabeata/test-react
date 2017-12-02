import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Select from 'react-select';
import {changeSelection} from '../../AC/index';
import 'react-select/dist/react-select.css';


class SelectFilter extends Component {
  handleChange = (selected) => this.props.changeSelection(selected.map(option => option.value));

  render() {
    const {articles, selected} = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return(
      <div>
        <Select
          options = {options}
          value = {selected}
          onChange = {this.handleChange}
          multi = {true} />
      </div>
    );
  }
}

SelectFilter.PropTypes = {
  articles: PropTypes.array.isRequired
};

export default connect(state => ({
  selected: state.filters.selected,
  articles: state.articles
}), { changeSelection })(SelectFilter);