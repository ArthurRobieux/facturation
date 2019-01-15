import React, { Component } from 'react';
import './index.css';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import ProgressBar from './ProgressBar';

class SubscriptionsSteps extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      selectedSubscription: 'year',
      estimatePrice: 0,
    };
  }

  backToHome(Home){
    Home.setState({view:'home'});
    this.setState({step: 1});
  }

  showStep(){
    const step = this.state.step;

    if(step === 1){return(<Step1 SubscriptionsSteps={this}/>)}
    else if(step === 2){return(<Step2 SubscriptionsSteps={this}/>)}
    else if(step === 3){return(<Step3 SubscriptionsSteps={this}/>)}
    else if(step === 4){return(<Step4 SubscriptionsSteps={this}/>)}
  }

  render() {
    const Home = this.props.Home;
    return (
      <div id={"subscriptions_steps"}>

        <div className={"back_button"} onClick={() => this.backToHome(Home)}>&lsaquo; Retour</div>

        <ProgressBar step={this.state.step}/>

        {this.showStep()}

      </div>
    );
  }
}

export default SubscriptionsSteps;
