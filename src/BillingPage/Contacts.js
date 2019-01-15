import React, { Component } from 'react';
import './index.css';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contact1: '',
      contact2: '',
      contact3: '',
      contact4: '',
    };
    this.handleContact1Change = this.handleContact1Change.bind(this);
    this.handleContact2Change = this.handleContact2Change.bind(this);
    this.handleContact3Change = this.handleContact3Change.bind(this);
    this.handleContact4Change = this.handleContact4Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContact1Change(event) {
    this.setState({contact1: event.target.value});
  }
  handleContact2Change(event) {
    this.setState({contact2: event.target.value});
  }
  handleContact3Change(event) {
    this.setState({contact3: event.target.value});
  }
  handleContact4Change(event) {
    this.setState({contact4: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
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

              <div className={"tab_text"}>
                Contact 1
                <div className={"form_element"}>
                  <div className={"form_text"}>
                    Adresse email
                  </div>
                <input className={"form_input"} type={"text"} placeholder={"arthur@sporteasy.net"} value={this.state.contact1} onChange={this.handleContact1Change}/>
                </div>
              </div>

              <div className={"tab_text"}>
                Contact 2
                <div className={"form_element"}>
                  <div className={"form_text"}>
                    Adresse email
                  </div>
                <input className={"form_input"} type={"text"} placeholder={"arthur@sporteasy.net"} value={this.state.contact2} onChange={this.handleContact2Change}/>
                </div>
              </div>

              <div className={"tab_text"}>
                Contact 3
                <div className={"form_element"}>
                  <div className={"form_text"}>
                    Adresse email
                  </div>
                <input className={"form_input"} type={"text"} placeholder={"arthur@sporteasy.net"} value={this.state.contact3} onChange={this.handleContact3Change}/>
                </div>
              </div>

              <div className={"tab_text"}>
                Contact 4
                <div className={"form_element"}>
                  <div className={"form_text"}>
                    Adresse email
                  </div>
                <input className={"form_input"} type={"text"} placeholder={"arthur@sporteasy.net"} value={this.state.contact4} onChange={this.handleContact4Change}/>
                </div>
              </div>



              <div className={"form_element"}>
                <button type={"submit"} className={"common_button"}>Sauvegarder</button>
              </div>


            </form>

          </div>


        </div>




      </div>
    );
  }
}

export default Contacts;
