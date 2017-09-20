var faker = require('faker');
var _ = require('lodash');
module.exports = () => {
    let mockJSON = {};
    mockJSON = {
        "validation": {
            "data": "6550ccc21502854481190f46a4538d81",
            "status": 1
        },
        "getUserinformation": {
            "data": {
                "user": {
                    "cyuid": "7990886176000000008",
                    "uname": "一号老师",
                    "login": "yihaotea",
                    "phone": null,
                    "email": null,
                    "pinyinName": null,
                    "isdel": "0",
                    "sex": 2,
                    "updatetime": "2017-08-29 11:32:50",
                    "createtime": "2017-04-17 14:18:21",
                    "intro": null
                },
                "orglist": {
                    "school": {
                        "4444000020000001409": {
                            "id": "4444000020000001409",
                            "name": "南京测试学校",
                            "type": 1,
                            "schoolCode": "1003",
                            "countryId": "1",
                            "provinceId": "881",
                            "cityId": "882",
                            "districtId": "886",
                            "parentOrgId": "2000000001000001168",
                            "isdel": "0",
                            "phone": null,
                            "contact": null
                        }
                    },
                    "class": {
                        "7990886176000000003": {
                            "id": "7990886176000000003",
                            "name": "二年级一班",
                            "type": 2,
                            "classCode": "4",
                            "countryId": "1",
                            "provinceId": "881",
                            "cityId": "882",
                            "districtId": "886",
                            "parentOrgId": null,
                            "schoolId": "4444000020000001409",
                            "grade": null,
                            "isdel": "0"
                        }
                    }
                },
                "locations": {
                    "country": {
                        "id": "1",
                        "name": "中国",
                        "code": "100000",
                        "type": "1",
                        "countryId": null,
                        "provinceId": null,
                        "cityId": null,
                        "districtId": null,
                        "isdel": "0"
                    },
                    "province": {
                        "id": "881",
                        "name": "江苏省",
                        "code": "320000",
                        "type": "2",
                        "countryId": "1",
                        "provinceId": null,
                        "cityId": null,
                        "districtId": null,
                        "isdel": "0"
                    },
                    "city": {
                        "id": "882",
                        "name": "南京市",
                        "code": "320100",
                        "type": "3",
                        "countryId": "1",
                        "provinceId": "881",
                        "cityId": null,
                        "districtId": null,
                        "isdel": "0"
                    },
                    "district": {
                        "id": "886",
                        "name": "秦淮区",
                        "code": "320104",
                        "type": "4",
                        "countryId": "1",
                        "provinceId": "881",
                        "cityId": "882",
                        "districtId": null,
                        "isdel": "0"
                    }
                },
                "rolelist": [{
                    "id": "2300000001000000003",
                    "name": "instructor",
                    "name_zh_cn": "教研员"
                }]
            },
            "status": 1
        },
        "shareToSelf": {
            "data": "分享到个人工作室成功",
            "status": 1
        },
        "shareToClass": {
            "code": 1,
            "msg": "分享到班级共享成功"
        },
        people: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        })
    }
    return mockJSON;
}