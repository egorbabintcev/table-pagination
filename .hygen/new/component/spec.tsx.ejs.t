---
to: "<%= generateSpec ? `${absPath}/${componentName}.spec.tsx` : null %>"
---

import React from 'react'
import { render, screen } from '@testing-library/react'
import <%= componentName %> from './'

describe('<%= componentName %> component', () => {
  test('Should be', () => {})
})
