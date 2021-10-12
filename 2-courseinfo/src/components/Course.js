import React from 'react'

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  return parts.map((part) => (
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  ))
}

const Total = ({ parts }) => {
  return (
    <p style={{ fontWeight: 'bold' }}>
      total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
    </p>
  )
}

const Course = ({ courses }) => {
  return courses.map((course) => (
    <div key={course.id}>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  ))
}

export default Course
