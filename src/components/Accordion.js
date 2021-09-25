import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)


  const handleTitleClick = (index) => {
    setActiveIndex(index)

  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => handleTitleClick(index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  )
}

export default Accordion

/*
  class Accordion extends React.Component {
    state = {activeIndex: 0}
    onTtitleClick = (index) => {
      this.setState({
        activeIndex: index,
      })
    }

    renderItems() {
      return this.propsitems.map((item,index) => {
        return (
          <React.Fragment key ={item.title}>
          //...
          </React.Fragment>
        )
      })
    }

    render() {
      return (
        <div className="ui styled accordion">
          {this.renderItems()}
          <h1>{this.state.activeIndex}</h1>
        </div>
      )
    }
  }

*/