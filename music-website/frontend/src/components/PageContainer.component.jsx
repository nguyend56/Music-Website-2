import React from "react";

const PageContainer = ({ children, ...rest }) => {
  return (
    <div
      className="min-h-screen h-fit"
      {...rest}
    >
      {children}
    </div>
  )
}

export default PageContainer
