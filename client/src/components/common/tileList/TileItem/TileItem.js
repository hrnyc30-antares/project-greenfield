/* eslint-disable max-len */
import React, { Component } from 'react';

// note for using the card body, the person using it must put in the their widget is (ex. 'review' ,'question', or 'answer')
//   this is used for when the helpful or report button is pressed, it can go the right request
class TileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsTotal: [],
      questionDefaultView: [],
      questionsListFiltered: [],
      answers: [],
    }
  }

  // // this function will send an api request and get the data for its perspective widget
  // componentDidMount() {
  //   // until redux is set up for global usage, normal react state is in use
  //   if (this.props.widget === 'qa') {
  //     fetch(`http://18.224.200.47/${this.props.widget}/${this.props.product_id}/`)
  //       .then((res) => res.json())
  //       .then((val) => {
  //         // sets the total of the questions to the state
  //         this.setState({ questionsTotal: this.state.questionsTotal.concat(val.results) })

  //         // finds the two highest values based on how much their helpful value is
  //         let highestOne = val.results[0],highestTwo=val.results[1];
  //         val.results.forEach(element => {
  //           if(element["question_helpfulness"] > highestOne['"question_helpfulness"']) highestOne = element
  //           if(element["question_helpfulness"] <= highestTwo['"question_helpfulness"']) highestTwo = element
  //         })

  //         // separates the two from the filtered questions to the highest two and set them up to the ones that are going to be displayed
  //         // to the ones that are going to be rendered when looking up more questions
  //         let filtered = this.state.questionsTotal.filter(el => el !== (highestOne||highestTwo))
  //         this.setState({
  //           questionDefaultView: this.state.questionDefaultView.concat(highestOne, highestTwo),
  //           questionsListFiltered: this.state.questionsListFiltered.concat(filtered)
  //         })

  //         // this api request gets all the answers from api using the question id 
  //         val.results.forEach(el =>{
  //           fetch(`http://18.224.200.47/${this.props.widget}/${el.question_id}/answers`)
  //           .then(res => res.json())
  //           .then(val => this.setState({answers: this.state.answers.concat(val)}))
  //           .catch(err => console.log('error fetching answers'))

  //         })
  //       })
  //       .catch((err) => console.log('error'));
  //   }
  // }

  // handleYesQuestionClick(e){
  //   console.log('question yes was clicked')
  //   e.preventDefault()
  // }
  // handleYesAnswerClick(e){
  //   console.log('answer yes was clicked')
  //   e.preventDefault()
  // }
  // handleReportAnswer(e){
  //   e.preventDefault()
  //   console.log('report yes was clicked')
  // }

  render() {
    // const dateFormat = new Date('input date here').toDateString().slice(4, 'input the date length i.e. date.length') output may 1 2018

    return (
      <div className="tile-body">

        {this.props.widget === 'qa' 
          ?
          this.state.questionDefaultView.map(el =>{
            let list = this.state.answers.map(values =>{
              if(el.question_id === Number(values.question)) {
                return values.results.map(value => {
                  const dateFormat = new Date(value.date).toDateString().slice(4, value.date.length);
                  return(
                 <li>
                   <p>A:</p>
                   <span>{value.body}</span>
                   <p>{value.answerer_name}</p>
                   <span>{dateFormat}</span>
                   <p> Helpful? <a href='' onClick={this.handleYesAnswerClick.bind(this)}>Yes</a> ({value.helpfulness}) | <a href='' onClick={this.handleReportAnswer.bind(this)}>Report</a></p> 
                 </li>
               )
             })
              }
            })
             return(
             <div>
               <p>Q:</p>
               <span>{el.question_body}</span>
               <p> Helpful? <a href='' onClick={this.handleYesQuestionClick.bind(this)}>Yes</a> ({el.question_helpfulness})</p>
              <ul>
              {list}
              </ul>
             </div>
            );
          })


        :
            <div>
              {/* for review and rating, styling will be done on your end, need to add username and date
            for date, use format up above to out the styling of date like may 1 2019 */}
            </div>
        
        }    
        
      </div>
    );
  }
}
export default TileItem;






          // question  - note: when question is rendered an answer button must be created with it along with another helpful method and button/ rating star here
          // answer / rating title here
          // rating body or list of answers based on the product id here


          //         help button method goes here and pass in the prop product id and the path for the request(ex, helpful or report to answers or reviews)
          //           so when the user presses the button it updates the state of the question

          //           report button and method goes here so when the button is pressed it will send request to api and update the number of the api
          //   the method then sends a get request to update the report number and state 
