import React, { Component } from 'react'
import { Button, Modal, Icon, Input, Select, Grid } from 'semantic-ui-react'
import $ from "jquery";

export default class ModalIndredients extends Component {
    state = {unit:""}
    close = (e) => {
        this.props.close();
    }
    addClick = (e) =>{
        var qty = $("#qty").val();
        var units = this.state.unit;
        var ingredient = $("#ingredient").val();
        this.props.addIngredient(e,qty,units,ingredient);
        $("#qty").val("");
        $("#ingredient").val("");
    }
    onChange = (e, { name, value }) => {
        this.setState({unit:value})
    }
    render() {
        const options = [
            { key: '', text: '', value: '' },
            { key: 'gramos', text: 'gramos', value: 'gramos' },
            { key: 'tbsp', text: 'tbsp', value: 'tbsp' }            
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
                            <Select fluid options={options} onChange={this.onChange} placeholder="Unidades" id="units" />
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