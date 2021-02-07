import React, { Component } from 'react'
import { Header, Button } from 'semantic-ui-react'
import ModalIngredients from '../modalIngredients/ModalIngredients'

export default class Ingredients extends Component {
    state = { modalIngredientsOpen: false }
    openModal = (e) => {
        this.setState({ modalIngredientsOpen: true });
    }
    closeModal = (e) => {
        this.setState({ modalIngredientsOpen: false });
    }
    addIngredient = (e,qty,units,ingredient) =>{
        console.log(qty+" "+units+" "+ingredient);
    }
    render() {
        return (<div>
            <Header as='h1'>Ingredientes</Header>
            <div class="ingredients"></div>
            <Button primary onClick={this.openModal}>Añadir ingrediente</Button>
            <ModalIngredients open={this.state.modalIngredientsOpen} close={this.closeModal} addIngredient={this.addIngredient} />
        </div>
        )
    }
}