/**
 * 验证账号
 * @param {*} loginId 邮箱
 */
export function validateUsername(loginId) {
    const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-z0-9]+\.([a-zA-Z]{2,4})$/;
    return reg.test(loginId);
}


/**
 * 验证密码
 * @param {*} loginPWD 6-20位的数字-字母-字符
 */
export function validateLoginPWD(loginPWD) {
    const reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    return reg.test(loginPWD);
}

/**
 * 特殊字符处理
 * @param {*} str 过滤特殊字符
 */
export function filterSpecialCharacters(str='') {
    let pattrn = /[`~!#$%^&*()_\-+=<>?:"{}|,\/;'\\[\]·~！#￥%……&*（）——\-+={ }|《》？：“”【】、；‘’，。、]/;
    let rs = '';
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattrn, '');
    }
    return rs;
}

// let username = "12sasdasd3@qq.com";
// let pwd = "123sss__s12_3";
// let res_u = validateLoginId(username)
// let res_p = validateLoginPWD(pwd)
// console.log(res_p);
// console.log(res_u);