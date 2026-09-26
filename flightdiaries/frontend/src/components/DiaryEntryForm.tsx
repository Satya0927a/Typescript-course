import React, { useState } from "react"
import diariesApi from "../services/backend/diaries.api"
import type { Diary, DiaryEntryReqErrorRes } from "../utils/types"
import { AxiosError } from "axios"

const DiaryEntryForm = ({ diaries, setDiaries, setNotifi }: { diaries: Diary[], setDiaries: React.Dispatch<React.SetStateAction<Diary[]>>, setNotifi: React.Dispatch<React.SetStateAction<string[]>> }) => {
  const [date, setDate] = useState("")
  const [weather, setWeather] = useState("")
  const [visibility, setVisibility] = useState("")
  const [comment, setComment] = useState("")
  async function handleDiaryEntry(e: React.SyntheticEvent) {
    e.preventDefault()
    try {
      const data = await diariesApi.postDiary({ date, weather, visibility, comment })
      setDiaries(diaries.concat(data))
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorData = error.response?.data
        if (errorData.error) {
          const zodError: DiaryEntryReqErrorRes[] = errorData.error
          const errors: string[] = zodError.map((e) => (`${e.code}: ${e.message}`))
          setNotifi(errors)
          setTimeout(() => {
            setNotifi([])
          }, 3000);
        }
        else {
          console.error(errorData);
        }
      }
      else {
        console.error(error);
      }
    }
  }
  return (
    <>
      <form onSubmit={handleDiaryEntry}>
        <label>
          date:
          <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
        </label>
        <br />
        <fieldset>
          <legend>Weather: </legend>
          <label>
            <input type="radio" value="sunny" name="weather" onChange={(e) => setWeather(e.target.value)} />
            sunny
          </label>
          <label>
            <input type="radio" value="rainy" name="weather" onChange={(e) => setWeather(e.target.value)} />
            rainy
          </label>
          <label>
            <input type="radio" value="cloudy" name="weather" onChange={(e) => setWeather(e.target.value)} />
            cloudy
          </label>
          <label>
            <input type="radio" value="stormy" name="weather" onChange={(e) => setWeather(e.target.value)} />
            stormy
          </label>
          <label>
            <input type="radio" value="windy" name="weather" onChange={(e) => setWeather(e.target.value)} />
            windy
          </label>
        </fieldset>
        <br />
        <fieldset>
          <legend>Visibility: </legend>
          <label>
            <input type="radio" value="great" name="visibility" onChange={(e) => setVisibility(e.target.value)} />
            great
          </label>
          <label>
            <input type="radio" value="good" name="visibility" onChange={(e) => setVisibility(e.target.value)} />
            good
          </label>
          <label>
            <input type="radio" value="ok" name="visibility" onChange={(e) => setVisibility(e.target.value)} />
            ok
          </label>
          <label>
            <input type="radio" value="poor" name="visibility" onChange={(e) => setVisibility(e.target.value)} />
            poor
          </label>
        </fieldset>
        <br />
        <label>
          comment:
          <input type="text" value={comment} onChange={(e) => { setComment(e.target.value) }} />
        </label>
        <br />
        <button type="submit"> submit </button>
      </form>
    </>
  )
}
export default DiaryEntryForm