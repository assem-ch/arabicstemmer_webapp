import React from 'react';

import StemForm from './StemForm'
import StemmerResult from './StemmerResult'

import { connect } from 'react-redux'
import {  stemmingText  } from '../actions'

import store from '../store'

@connect((store) => {
   return {
    stemResults: store.AppStems

   }

})
export default class AppStem extends React.Component {

    constructor(porps){
        super(porps);
        this.state = {
             value: 'مكتبة لمعالجة الكلمات العربية وتجذيعها'
             }

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

    fileHandler(event){

         var file = event.target.files[0];
         var textType = /text.*/;
         if (file.type.match(textType)){
            var reader = new FileReader();
            reader.onload = function(e) {
             var r = e.target.result;
              store.dispatch(stemmingText(r))
            }
            reader.readAsText(file);
         }else{
            alert("File not supported!")
            }
    }
    render(){

      return(
         <div>
            <StemForm
             value={this.state.value}
             onchange={this.handleChange}
             fetchingStem={() => this.ftechStems(event)}
             handleFile={this.fileHandler}
            />
            <StemmerResult
            results={this.props.stemResults}
            />
         </div>
      );
  }
}