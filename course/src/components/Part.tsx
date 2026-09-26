import type { CoursePart } from "../App"

const Part = ({ coursePart }: { coursePart: CoursePart }) => {
  switch (coursePart.kind) {
    case "basic":
      return (
        <div style={{ "margin": "10px" }}>
          <h3>{coursePart.name} {coursePart.exerciseCount}</h3>
          <p style={{ "fontStyle": "italic" }}>{coursePart.description}</p>
        </div>
      )
    case "group":
      return (
        <div style={{ "margin": "10px" }}>
          <h3>{coursePart.name} {coursePart.exerciseCount}</h3>
          <p >Project exercises {coursePart.groupProjectCount}</p>
        </div>
      )
    case "background":
      return (
        <div style={{ "margin": "10px" }}>
          <h3>{coursePart.name} {coursePart.exerciseCount}</h3>
          <p style={{ "fontStyle": "italic" }}>{coursePart.description}</p>
          <p>submit to: {coursePart.backgroundMaterial}</p>
        </div>
      )
    case "special":
      return (
        <div style={{ "margin": "10px" }}>
          <h3>{coursePart.name} {coursePart.exerciseCount}</h3>
          <p style={{ "fontStyle": "italic" }}>{coursePart.description}</p>
          <p>required skills: {coursePart.requirements.join(", ")}</p>
        </div>
      )
    default:
      break;
  }
}

export default Part