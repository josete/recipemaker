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
    render() {
        return (<div>
            <Header as='h1'>Ingredientes</Header>
            <Button primary onClick={this.openModal}>Añadir ingrediente</Button>
            <ModalIngredients open={this.state.modalIngredientsOpen} close={this.closeModal} />
        </div>
        )
    }
}