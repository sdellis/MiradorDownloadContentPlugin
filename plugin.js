class MiradorShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert('Share this stuff')
  }
  render() {
    return React.createElement('button', { className: 'share', onClick: this.handleClick}, 'Share');
  }
}
