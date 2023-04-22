import request from '@/utils/request'

// cursor: 当sortType为 3 时且页数不是第一页时需传入,值为上一条数据的 time
export const getCommentList = params => request({
    url: `/comment/new?type=0&sortType=3&pageSize=20`,
    params
})