import React from 'react';

// This component encapsulates the behavior we need...
class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.getModule = this.getModule.bind(this);
  }

  handleMouseClick(event) {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    const el = event.target;

    const mod = this.getModule(el);

    const data = {
      element: el,
      timeOfClick: dateTime,
      module: mod
    };
    console.log(data)
  }

  getModule = (el) => {
    if (el.closest('#Product-Overview')) {
      module = 'Product-Overview';
    } else if (el.closest('#Related-Items')) {
      module = 'Related-Items';
    } else if (el.closest('#Questions-Answers')) {
      module = 'Questions-Answers';
    } else if (el.closest('#Ratings-Reviews')) {
      module = 'Ratings-Reviews';
    }
    return module;
  }

  render() {
    return (
      <div onClick={this.handleMouseClick}>
          {/*  Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render. */}
        {this.props.render(null)}
      </div>
    );
  }
}


export default MouseTracker;