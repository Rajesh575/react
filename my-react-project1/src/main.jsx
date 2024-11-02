import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CourseGoal from './CourseGoal.jsx'
import Blog from './Blog.jsx'
import App4 from './App4.jsx'
import MovieGrid from './MovieGrid.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieGrid />
  </StrictMode>,
)
