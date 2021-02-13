import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import $ from "jquery";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    switch (name) {
      case "new":
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          title: '¿Seguro que quieres crear una nueva?',
          text: "Todos los datos actuales se perderán.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si',
          cancelButtonText: 'No',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            $("#steps").empty()
            $("#ingredients").empty()
            $("#title").val("")
          }
        });        
        break;
      case "generate":
        var title = $("#title").val();
        var category = $("#category")[0].innerText.toLowerCase();
        var ingredients = []
        var steps = []
        var ingredientesDiv = document.getElementById("ingredients").childNodes;      
        ingredientesDiv.forEach(ingredient => {
         ingredients.push("- "+ingredient.innerHTML)
        });
        var stepsDiv = document.getElementById("steps").childNodes;      
        stepsDiv.forEach(step => {
         steps.push("- "+step.innerHTML.split(".")[1].trim())
        });
        var postJson = {title:title,category:category,ingredientes:ingredients,pasos:steps}
        console.log(postJson);
        break;
    }
  }

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