import request from '@/utils/request'

//添加试题接口
export function addQuestions(data) {
    return request({
        url: '/exam/questions',
        method: 'post',
        data
    })
}

//获取所有试题
export function gettingQuestions() {
    return request({
        url: '/exam/questions/new',
        method: 'get'
    })
}


//获取当前用户信息
export function CurrentUserInformation() {
    return request({
        url: '/user/userInfo',
        method: 'get'
    })
}

//更新试题
export function updateQuestions(data) {
    return request({
        url: '/exam/questions/update',
        method: 'put',
        data
    })
}

//获取所有的考试类型
export function getTypeExam() {
    return request({
        url: '/exam/examType',
        method: 'get'
    })
}

//获取所有的课程
export function gettingLessons() {
    return request({
        url: '/exam/subject',
        method: 'get'
    })
}

//删除指定的试题类型
export function deleteQuestions(data) {
    return request({
        url: '/exam/delQuestionsType',
        method: 'post',
        data
    })
}

//添加试题类型
export function addTestTypes(params) {
    return request({
        url: '/exam/insertQuestionsType',
        method: 'get',
        params:{
            text:params.text,
            sort:params.sort
        }
    })
}

//获取所有的试题类型
export function getTypeQuestions() {
    return request({
        url: '/exam/getQuestionsType',
        method: 'get'
    })
}

//按条件获取试题
export let conditionalTest = params =>{
    return request.get('/exam/questions/condition',{params})
}

//更新用户信息
export function UpdateUserInformation() {
    return request({
        url: '/user/user',
        method: 'put'
    })
}