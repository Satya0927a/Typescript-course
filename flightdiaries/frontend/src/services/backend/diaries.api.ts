import axios from "axios";
import type { Diary, DiaryEntry } from "../../utils/types";
const baseurl = "http://localhost:3000/api/diaries"

const fetchAllDiaries = async () => {
  const response = await axios.get<Diary[]>(baseurl);
  return response.data;
}
const postDiary = async (data: DiaryEntry) => {
  const response = await axios.post<Diary>(baseurl, data)
  return response.data
}
export default {
  fetchAllDiaries,
  postDiary
}