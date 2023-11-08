import React from "react";

const PageContainer = ({ children, ...rest }) => {
  return (
    <div
      className="h-fit"
      {...rest}
    >
      {children}
    </div>
  )
}

export default PageContainer
