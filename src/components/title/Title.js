import React, { Component } from 'react'
import { Header,Input } from 'semantic-ui-react'

export default class Title extends Component {
  state = {}
  
  render() {
    return (<div class="data">
        <Header as='h1'>Titulo</Header>
        <Input fluid placeholder='Titulo' id="title"/>
      </div>
    )
  }
}