import React, { Component } from 'react'
import { Button, Modal, Icon, Input, Select, Grid } from 'semantic-ui-react'
import $ from "jquery";

export default class ModalSteps extends Component {
    close = (e) => {
        this.props.close();
    }
    addClick = (e) => {
        var step = $("#step").val();
        this.props.addStep(e, step);
        $("#step").val("");
    }
    onChange = (e, { name, value }) => {
        this.setState({ unit: value })
    }
    render() {
        return (<Modal id="registro" open={this.props.open} onClose={this.close} closeIcon closeOnDimmerClick>
            <Modal.Header>Paso</Modal.Header>
            <Modal.Content>
                <Input fluid placeholder='Paso' id="step" />
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