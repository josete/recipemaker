import React, { Component } from 'react'
import { Header,Select } from 'semantic-ui-react'

export default class Category extends Component {
    state = {category:""}
    onChange = (e, { name, value }) => {
        this.setState({unit:value})
    }
  render() {
    const options = [
        { key: 'comida', text: 'Comida', value: 'comida' }
    ]
    return (<div class="data">
        <Header as='h1'>Categoria</Header>
        <Select fluid options={options} onChange={this.onChange} placeholder="Categoria" id="category" />
      </div>
    )
  }
}