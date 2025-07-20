import React, {Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import { routes } from './routes'
import Loading from './components/Loading'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const {path, element, children} = routes
  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
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