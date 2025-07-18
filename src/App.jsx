import React, {Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import { routes } from './routes'

const App = () => {
  const {path, element, children} = routes
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={path} element={element}>
          {children.map((child, i) =>(
            <Route 
              key={i}
              index={child.index}
              path={child.path}
              element={child.element}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App