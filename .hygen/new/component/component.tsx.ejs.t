---
to: <%= absPath %>/<%= componentName %>.tsx
---
import React from 'react'
import './<%= componentName %>.scss'

interface <%= componentName %>Props {

}

const <%= componentName %>:React.FC<<%= componentName %>Props> = (props) => {
  return ()
}

export default <%= componentName %>
