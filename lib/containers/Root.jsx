import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import MainSection from '../components/MainSection.jsx';
import * as EmojiActions from '../actions/EmojiActions';

export default class Root {
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
      </div>
    );
  }
}
