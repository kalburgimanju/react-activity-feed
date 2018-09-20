import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import '../styles/EmojiPicker.css';

/**
 * Component is described here.
 *
 * @example ./examples/EmojiPicker.md
 */
export default class EmojiPicker extends React.Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.emojiPicker = React.createRef();
    this.state = {
      open: false,
    };
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideMenu);
  }

  hideMenu = (e) => {
    if (!this.emojiPicker.current.contains(e.target)) {
      this.setState({ open: false }, () => {
        document.removeEventListener('click', this.hideMenu);
      });
    } else {
      console.log('j');
    }
  };

  showMenu = (e) => {
    e.preventDefault();

    this.setState({ open: true }, () => {
      document.addEventListener('click', this.hideMenu);
    });
  };

  render() {
    return (
      <div className="raf-emoji-picker">
        {this.state.open && (
          <div className="raf-emoji-picker__container" ref={this.emojiPicker}>
            <Picker showPreview={false} />
          </div>
        )}
        <div
          role="button"
          onClick={this.showMenu}
          className="raf-emoji-picker__button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 15.498c2.33 0 4.304-1.456 5.106-3.5H4.892c.802 2.044 2.777 3.5 5.107 3.5zm-3.5-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-3.5 9a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8zm-.006-18C4.467-.002 0 4.475 0 9.998s4.468 10 9.995 10c5.526 0 10.005-4.477 10.005-10s-4.479-10-10.005-10z"
              fill="#A0B2B8"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
    );
  }
}