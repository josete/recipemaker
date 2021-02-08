import React, { Component } from 'react'
import { Header,Button } from 'semantic-ui-react'
import ModalSteps from '../modalSteps/ModalSteps'
import $ from "jquery";

export default class Steps extends Component {
  state = { modalStepsOpen: false }
    openModal = (e) => {
        this.setState({ modalStepsOpen: true });
    }
    closeModal = (e) => {
        this.setState({ modalStepsOpen: false });
    }
    addStep= (e,step) =>{
      var number = $("#steps").children().length;
      $("#steps").append('<div class="ui segment dataSegment">'+(number+1)+". "+step+'</div>')
    }
  
  render() {
    return (<div class="data">
        <Header as='h1'>Pasos</Header>       
        <div id="steps"></div>
        <Button primary onClick={this.openModal}>Añadir paso</Button> 
        <ModalSteps open={this.state.modalStepsOpen} close={this.closeModal} addStep={this.addStep} />
      </div>
    )
  }
}