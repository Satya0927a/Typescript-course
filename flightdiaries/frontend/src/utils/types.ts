export type Weather = "sunny" | "rainy" | "cloudy" | "stomy" | "windy"
export type Visibility = "great" | "good" | "ok" | "poor"
export interface DiaryEntry {
  date: string
  weather: string
  visibility: string
  comment?: string
}
export interface Diary extends DiaryEntry {
  id: number;
}
export interface DiaryEntryReqErrorRes {
  code: string
  message: string
}