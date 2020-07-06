import React from 'react'
import { connect } from 'react-redux'

export const Tile = (widget) =>{
    if(widget === 'qa'){
        return (

        )
    }else if(widget === 'reviews'){
        return (
            
        )
    }
}






const mapStateToProps = state => ({
    answers: state.answers.results,
    questions: state.questions.results
})

export default connect(mapStateToProps)(Tile)