import React, { Component } from 'react'
import { Header, Button } from 'semantic-ui-react'
import ModalIngredients from '../modalIngredients/ModalIngredients'
import $ from "jquery";

export default class Ingredients extends Component {
    state = { modalIngredientsOpen: false }
    openModal = (e) => {
        this.setState({ modalIngredientsOpen: true });
    }
    closeModal = (e) => {
        this.setState({ modalIngredientsOpen: false });
    }
    addIngredient = (e,qty,units,ingredient) =>{
       $("#ingredients").append('<div class="ui segment">'+qty+" "+units+" "+ingredient+'</div>')
        console.log(qty+" "+units+" "+ingredient);
    }
    render() {
        return (<div class="data">
            <Header as='h1'>Ingredientes</Header>
            <div id="ingredients"></div>
            <Button primary onClick={this.openModal}>Añadir ingrediente</Button>
            <ModalIngredients open={this.state.modalIngredientsOpen} close={this.closeModal} addIngredient={this.addIngredient} />
        </div>
        )
    }
}