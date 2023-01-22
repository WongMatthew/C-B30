import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';

const getResponse = async (userInput, conversationId, parentId) => {
  // Make API call to your chatbot service
  const response = await fetch('http://127.0.0.1:5000/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_input: userInput, conversation_id: conversationId, parent_id: parentId }),
  });
  return response.json();
}

class ChatbotApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggerNext = this.triggerNext.bind(this);
  }

  async componentWillMount() {
    const self = this;
    const initialPrompt = "ask me these questions one by one and have a conversation with me about them: Modifying Rules And Assumptions What is the rule (or assumption) I live by that I would like to modify? How does this rule (or assumption) affect me in my day to day life?";
    
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', readyStateChange);

    function readyStateChange() {
      if (this.readyState === 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        console.log(data);
        const bindings = data.results.bindings;
        if (bindings && bindings.length > 0) {
          self.setState({ loading: false, result: bindings[0].comment.value });
        } else {
          self.setState({ loading: false, result: 'Not found.' });
        }
      }
    }
    xhr.open('POST', 'http://127.0.0.1:5000/ask');
    xhr.send(JSON.stringify({user_input: initialPrompt}));
  }

  triggerNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <div className="chatbotapp">
        { loading ? <Loading /> : result }
        {
          !loading &&
          <div
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            {
              !trigger &&
              <button
                onClick={() => this.triggerNext()}
              >
                Search Again
              </button>
            }
          </div>
        }
      </div>
    );
  }
}

ChatbotApp.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

ChatbotApp.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default ChatbotApp