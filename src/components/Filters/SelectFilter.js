import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class SelectFilter extends Component {
  state = {
    selection: null
  };

  changeSelection = (selection) => this.setState({ selection });

  render() {
    const {articles} = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return(
      <div>
        <Select
          options = {options}
          value = {this.state.selection}
          onChange = {this.changeSelection}
          multi = {true} />
      </div>
    );
  }
}

SelectFilter.PropTypes = {
  articles: PropTypes.array.isRequired
};

export default SelectFilter;