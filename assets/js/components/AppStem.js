import React from 'react';

import StemForm from './StemForm'
import StemmerResult from './StemmerResult'

import { connect } from 'react-redux'
import {  stemmingText  } from '../actions'


@connect((store) => {
   return {
    stemResults: store.AppStems

   }

})
export default class AppStem extends React.Component {

    constructor(porps){
        super(porps);
        this.state = {value: 'مكتبة لمعالجة الكلمات العربية وتجذيعها'}
        this.list = " "

        this.handleChange = this.handleChange.bind(this);
        this.ftechStems = this.ftechStems.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
    }
    handleChange(event) {
    this.setState({value: event.target.value});
    }
    ftechStems(event){
     this.list = this.state.value
     this.props.dispatch(stemmingText(this.list));
    }
    //TODO: handle file.txt
    fileHandler(event)
    {

    }
    render(){

      return(
         <div>
            <StemForm
             value={this.state.value}
             onchange={this.handleChange}
             fetchingStem={() => this.ftechStems(event)}
             handleFile={() => this.fileHandler(event)}
            />
            <StemmerResult
            results={this.props.stemResults}
            />
         </div>
      );
  }
}