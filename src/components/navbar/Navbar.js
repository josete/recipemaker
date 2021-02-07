import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='new'
          active={activeItem === 'new'}
          onClick={this.handleItemClick}
        >
          Receta nueva
        </Menu.Item>

        <Menu.Item
          name='open'
          active={activeItem === 'open'}
          onClick={this.handleItemClick}
        >
          Abrir receta
        </Menu.Item>

        <Menu.Item
          name='generate'
          active={activeItem === 'generate'}
          onClick={this.handleItemClick}
        >
          Generar receta
        </Menu.Item>
      </Menu>
    )
  }
}