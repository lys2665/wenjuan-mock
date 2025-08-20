/**
 * @description 生成问卷列表
 * @author liuyushuang
 */


const Mock = require('mockjs')
const Random = Mock.Random

function getQuestionList(opt = {}) {
    const { len, isDeleted = false, isStar = false } = opt
    const list = []
    for (let i = 0 ; i < len ; i++) {
        list.push({
            _id: Random.id(),
            title: Random.ctitle(),
            isPublished: Random.boolean(),
            isStar,
            answerCount: Random.natural(50, 100),
            createAt: Random.datetime(),
            isDeleted
        })
    }
    return list
}

module.exports = getQuestionList