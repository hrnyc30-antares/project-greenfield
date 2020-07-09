import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from '../../Common/tileList/Tile';

export class QuestionSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filtered: [],
      input: '',
    };
  }
  handleChange(e) {
      let value = e.target.value
    this.setState({ input: value.toLowerCase() });
    if (value.length >= 3) {
        this.props.questions.forEach(val => {
            let bodyArr = val.question_body.toLowerCase().split(' ')
            if(bodyArr.includes(value))this.setState({filtered: this.state.filtered.concat(val)})
        })
        this.props.onChange('filter', !false)
    }else {
        this.props.onChange('filter', false)
        this.setState({filtered: []})
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
          placeholder='Have a Question? Search For Answers...'
        />
        <>
        {this.state.filtered.length >0 
        ?
        <Tile widget={'qa'} data={this.state.filtered} />
        :
        <></>
        }
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.questions.results,
});

export default connect(mapStateToProps)(QuestionSearch);
