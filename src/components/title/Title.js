import React, { Component } from 'react'
import { Header,Input } from 'semantic-ui-react'

export default class Title extends Component {
  state = {}
  
  render() {
    return (<div>
        <Header as='h1'>Titulo</Header>
        <Input placeholder='Titulo' id="title"/>
      </div>
    )
  }
}