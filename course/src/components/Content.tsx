import type { CoursePart } from "../App"
import Part from "./Part"

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <>
      {courseParts.map((elem) => <Part coursePart={elem} />)}
    </>
  )
}

export default Content