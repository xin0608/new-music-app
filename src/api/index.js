// 统一的出口
import { hotMusic, recommendMusic } from '@/api/Home'
import { hotSearch, searchResult } from '@/api/Search'
import { getSongById, getLyricById } from '@/api/Play'
import { getCommentList } from '@/api/Comment'

export const recommendMusicAPI = recommendMusic
export const hotMusicAPI = hotMusic
export const hotSearchAPI = hotSearch
export const searchResultAPI = searchResult
export const getSongByIdAPI = getSongById
export const getLyricByIdAPI = getLyricById
export const getCommentListAPI = getCommentList