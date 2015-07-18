import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import MainSection from '../components/MainSection.jsx';
import Footer from '../components/Footer.jsx';
import * as EmojiActions from '../actions/EmojiActions';

export default class Root extends Component {
  render () {
    return (
      <Connector select={state => ({ emojis: state.emoji })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild ({ emojis, dispatch }) {
    const actions = bindActionCreators(EmojiActions, dispatch);
    return (
      <div>
        <MainSection emojis={emojis} actions={actions} />
        <Footer />
      </div>
    );
  }
}
