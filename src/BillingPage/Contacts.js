import React, { Component } from 'react';
import './index.css';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contactsList: ['arnaud@fortnite.fr', 'jpp@hotmail.fr'],
    };
    this.handleContact1Change = this.handleContact1Change.bind(this);
    this.handleContact2Change = this.handleContact2Change.bind(this);
    this.handleContact3Change = this.handleContact3Change.bind(this);
    this.handleContact4Change = this.handleContact4Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContact1Change(event) {
    const contactsList = this.state.contactsList;
    contactsList[0] = event.target.value;
    this.setState({contactsList: contactsList});
  }
  handleContact2Change(event) {
    const contactsList = this.state.contactsList;
    contactsList[1] = event.target.value;
    this.setState({contactsList: contactsList});
  }
  handleContact3Change(event) {
    const contactsList = this.state.contactsList;
    contactsList[2] = event.target.value;
    this.setState({contactsList: contactsList});
  }
  handleContact4Change(event) {
    const contactsList = this.state.contactsList;
    contactsList[3] = event.target.value;
    this.setState({contactsList: contactsList});
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  showContact1(){
    if(this.state.contactsList.length > 0) {
      return (
        <div className={"tab_text"}>
          Contact 1
          <div className={"form_element"}>
            <div className={"form_text"}>
              Adresse email
            </div>
            <input className={"form_input"} type={"text"} placeholder={"arthur@sporteasy.net"}
                   value={this.state.contactsList[0]} onChange={this.handleContact1Change}/>
            <div className={"button_delete_contact"} onClick={() => this.deleteContact(0)}>X</div>
          </div>
        </div>
      )
    }
  }

  showContact2(){
    if(this.state.contactsList.length > 1) {
      return(
        <div className={"tab_text"}>
          Contact 2
          <div className={"form_element"}>
            <div className={"form_text"}>
              Adresse email
            </div>
            <input className={"form_input"} type={"text"} placeholder={"arthur@sporteasy.net"}
                   value={this.state.contactsList[1]} onChange={this.handleContact2Change}/>
            <div className={"button_delete_contact"} onClick={() => this.deleteContact(1)}>X</div>
          </div>
        </div>
      )
    }
  }

  showContact3(){
    if(this.state.contactsList.length > 2) {
      return (
        <div className={"tab_text"}>
          Contact 3
          <div className={"form_element"}>
            <div className={"form_text"}>
              Adresse email
            </div>
            <input className={"form_input"} type={"text"} placeholder={"arthur@sporteasy.net"}
                   value={this.state.contactsList[2]} onChange={this.handleContact3Change}/>
            <div className={"button_delete_contact"} onClick={() => this.deleteContact(2)}>X</div>
          </div>
        </div>
      )
    }
  }

  showContact4(){
    if(this.state.contactsList.length > 3) {
      return (
        <div className={"tab_text"}>
          Contact 4
          <div className={"form_element"}>
            <div className={"form_text"}>
              Adresse email
            </div>
            <input className={"form_input"} type={"text"} placeholder={"arthur@sporteasy.net"}
                   value={this.state.contactsList[3]} onChange={this.handleContact4Change}/>
            <div className={"button_delete_contact"} onClick={() => this.deleteContact(3)}>X</div>
          </div>
        </div>
      )
    }
  }

  addContactField(){
    if(this.state.contactsList.length < 4){
      let contactsList = this.state.contactsList;
      contactsList.push("");
      this.setState({contactsList: contactsList});
    }
  }

  deleteContact(contact){
    let contactsList = this.state.contactsList;
    contactsList.splice(contact, 1);
    this.setState({contactsList: contactsList});
  }

  showAddContactButton(){
    try {
      const addContactButton = document.getElementById("add_contact_button");
      if (this.state.contactsList.length > 3) {
        addContactButton.style.opacity = "0.25";
        addContactButton.style.cursor = "default";
      }
      else {
        addContactButton.style.opacity = "1";
        addContactButton.style.cursor = "pointer";
      }
    }
    catch{}
  }

  render() {
    this.showAddContactButton();
    return (
      <div className={"tab_container"}>

        <div className={"tab_block"}>
          <div className={"tab_title"}>
            Contacts
          </div>

          <div className={"tab_description"}>
            <div className={"tab_text"}>
              Les emails de facturation seront envoyés à arthur@sporteasy.net.
            </div>

            <div className={"tab_text"}>
              Vous pouvez ajouter d'autres adresses de contact pour la facturation (par exemple : votre département
              de comptabilité). Tous les emails relatifs à la facturation seront envoyés à cette liste de contact
              (maximum 4 emails).
            </div>
          </div>

          <div className={"tab_description"}>

            <div className={"tab_text"}>
              Votre adresse email

              <div className={"form_element"}>
                <div className={"form_text"}>
                  Adresse email
                </div>
                <input className={"form_input"} type={"text"} value={"arthur@sporteasy.net"} disabled/>
              </div>

            </div>

          </div>

          <div className={"tab_description"}>

            <form className={"tab_form"} onSubmit={this.handleSubmit}>

              {this.showContact1()}
              {this.showContact2()}
              {this.showContact3()}
              {this.showContact4()}

              <div className={"form_element"}>
                <button type={"submit"} id={"add_contact_button"} className={"common_button"} onClick={() => this.addContactField()}>
                  Ajouter un membre
                </button>
                <button type={"submit"} className={"common_button"}>
                  Sauvegarder
                </button>
              </div>

            </form>

          </div>


        </div>




      </div>
    );
  }
}

export default Contacts;
