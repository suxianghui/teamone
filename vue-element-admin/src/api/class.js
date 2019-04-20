import request from '@/utils/request'

// 获取已经分配教室的班级
export const mangerGrade = () => {
  return request({
    url: '/manger/grade',
    method: 'GET'
  })
}

// 添加班级
export const mangerGradeAdd = (data) => {
  console.log('jiekouadd', data)
  return request({
    url: '/manger/grade',
    method: 'POST',
    data: {
      grade_name: data.className,
      room_id: data.roomName,
      subject_id: data.subjectName
    }
  })
}

// 更新班级信息
export const mangerGradeEdit = (data) => {
  return request({
    url: '/manger/grade/update',
    method: 'PUT',
    data
  })
}

// 删除班级
export const mangerGradeDelete = (data) => {
  return request({
    url: '/manger/grade/delete',
    method: 'DELETE',
    data
  })
}

// 获取没有分配教室的班级
export const mangerGradeNew = () => {
  return request({
    url: '/manger/grade/new',
    method: 'GET'
  })
}

// 获取所有的教室
export const mangerRoom = () => {
  return request({
    url: '/manger/room',
    method: 'GET'
  })
}

// 添加教室
export const mangerRoomAdd = (data) => {
  return request({
    url: '/manger/room',
    method: 'POST',
    data
  })
}

// 删除教室接口
export const mangerRoomDelete = (data) => {
  return request({
    url: '/manger/room/delete',
    method: 'DELETE',
    data
  })
}

// 获取学生接口
export const mangerStudent = () => {
  return request({
    url: '/manger/student',
    method: 'GET'
  })
}

//删除学生信息
export const deleteStudent=(params)=> {
  return request({
      url:'/manger/student/'+params,
      method:'DELETE'
  })
}
