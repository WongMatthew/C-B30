import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';

class ChatbotApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  async componentWillMount() {
    const self = this;
    const initialPrompt = "ask me these questions one by one and have a conversation with me about them: Modifying Rules And Assumptions What is the rule (or assumption) I live by that I would like to modify? How does this rule (or assumption) affect me in my day to day life?";
    
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', readyStateChange);

    function readyStateChange() {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        console.log(data);
        const bindings = data.message.bindings;
        if (bindings && bindings.length > 0) {
          self.setState({ loading: false, result: bindings[0].message.value });
        } else {
          self.setState({ loading: false, result: 'Not found.' });
        }
      }
    }
    xhr.open('POST', 'http://127.0.0.1:5000/ask', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({"user_input": initialPrompt}));
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <div className="dbpedia">
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
                onClick={() => this.triggetNext()}
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

const App = () => (
  <ChatBot
    steps={[
      {
        id: '1',
        message: 'Type something to search on Wikipédia. (Ex.: Brazil)',
        trigger: 'search',
      },
      {
        id: 'search',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        component: <ChatbotApp />,
        waitAction: true,
        trigger: '1',
      },
    ]}
  />
);

export default App;