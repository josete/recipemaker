import React, { Component } from 'react'
import { Button, Modal, Icon, Input, Select, Grid } from 'semantic-ui-react'

export default class Ingredients extends Component {
    state = {}
    close = (e) => {
        this.props.close();
    }
    addClick = (e) =>{
        var qty = document.getElementById("qty").value;
        var units = document.getElementById("units");
        var ingredient = document.getElementById("ingredient").value;
        this.props.addIngredient(e,qty,units,ingredient);
    }
    render() {
        const options = [
            { key: 'g', text: 'g', value: 'g' }
        ]
        return (<Modal id="registro" open={this.props.open} onClose={this.close} closeIcon closeOnDimmerClick>
            <Modal.Header>Ingrediente</Modal.Header>
            <Modal.Content>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Input fluid placeholder='Cantidad' id="qty" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Select fluid options={options} placeholder="Unidades" id="units" />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Input fluid placeholder='Ingrediente' id="ingredient" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button positive id="buttonAddIngredient" onClick={this.addClick} animated>
                    <Button.Content visible>Añadir</Button.Content>
                    <Button.Content hidden>
                        <Icon name='check' />
                    </Button.Content>
                </Button>
            </Modal.Actions>
        </Modal>
        )
    }
}