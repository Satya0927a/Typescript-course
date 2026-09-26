import { useEffect, useState } from "react"
import type { Diary } from "./utils/types"
import diariesApi from "./services/backend/diaries.api"
import ContentDiary from "./components/ContentDiary"
import DiaryEntryForm from "./components/DiaryEntryForm"
import Notification from "./components/notification"

const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([])
  const [notifi, setNotifi] = useState<string[]>([])
  useEffect(() => {
    const runFetch = async () => {
      const data = await diariesApi.fetchAllDiaries()
      setDiaries(data)
    }
    runFetch()
  }, [])
  return (
    <div>
      <Notification messages={notifi} />
      <DiaryEntryForm diaries={diaries} setDiaries={setDiaries} setNotifi={setNotifi} />
      <ContentDiary data={diaries} />
    </div>
  )
}
export default App