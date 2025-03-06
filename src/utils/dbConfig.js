import Dexie from 'dexie'

// 创建 Dexie 实例
const db = new Dexie('myDatabase')

// 定义数据库模式
db.version(1).stores({
  // id 自增 name 姓名 age年龄 phone 手机号 email 邮箱 password 密码 avatar 头像 status 状态 createTime 创建时间 updateTime 更新时间 remark 备注 roleId 角色id
  users:
    '++id, name, age, gender, phone, email, password, avatar, status, createTime, updateTime, remark, roleId',
  // id 自增 name 姓名 description 描述 createTime 创建时间
  permission: '++id, name, description, createTime',
  // id 自增 name 姓名 description 描述 createTime 创建时间 updateTime 更新时间 remark 备注 status 状态 permissionIds 权限id
  role: '++id, name, description, createTime, updateTime, remark, status, permissionIds',
  //  id 自增 name 姓名 description 描述 createTime 创建时间 updateTime 更新时间 path 路径 icon 图标 parentId 父id sort 排序 status 状态 remark 备注
  menu: '++id, name, description, createTime, updateTime, path, icon, parentId, sort, status, remark'
})

// 初始化数据库
async function initDb() {
  try {
    await db.open()
    console.log('数据库创建成功')
  } catch (error) {
    console.error('数据库初始化失败:', error)
  }
}

// 导出配置
export { db, initDb }
