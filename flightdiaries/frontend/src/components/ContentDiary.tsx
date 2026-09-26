import type { Diary } from "../utils/types"

const ContentDiary = ({ data }: { data: Diary[] }) => {
  return (
    <div>
      {data.map((diary) => <DiaryRender diary={diary} />)}
    </div>
  )
}
const DiaryRender = ({ diary }: { diary: Diary }) => {
  return (
    <>
      <h2>{diary.date}: </h2>
      <p>visibility: {diary.visibility}</p>
      <p>weather: {diary.weather}</p>
    </>
  )
}
export default ContentDiary