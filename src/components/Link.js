import React from "react";

const Link = ({ className, href, children }) => {
  const handleClick = (event) => {
    //實現在連結上按著 command 後點連結可以另開視窗功能
    if (event.metaKey || event.ctrlKey) {
      return
    }

    event.preventDefault()
    // 改變 url 但是不 refresh component
    window.history.pushState({}, '', href)

    // Navigation Event 來監聽 url 是否有改變
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }
  return (
    <a
      className={className}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default Link