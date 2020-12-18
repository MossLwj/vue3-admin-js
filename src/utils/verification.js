/**
 * 手机号验证
 * @param value
 * @returns {boolean}
 */
export function verifyPhone(value) {
  let regPhone = /^1[3456789]\d{9}$/;
  return regPhone.test(value);
}

/**
 * 校验密码6-20位英文+数字
 * @param value
 * @returns {boolean}
 */
export function verifyPassword(value) {
  let regPhone = /^(?!\D+$)(?![^a-zA-Z]+$)\${6,20}$/;
  return regPhone.test(value);
}

/**
 *  校验验证码英文+数字
 * @param value
 * @returns {boolean}
 */
export function verifyCode(value) {
  let regPhone = /^[a-zA-Z0-9]{6}$/;
  return regPhone.test(value);
}
