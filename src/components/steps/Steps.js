import React, { Component } from 'react'
import { Header,Button } from 'semantic-ui-react'

export default class Steps extends Component {
  state = {}
  
  render() {
    return (<div>
        <Header as='h1'>Pasos</Header>       
        <Button primary>Añadir paso</Button> 
      </div>
    )
  }
}