
function commafy(value) {
    // left of decimal point, right of decimal point
    let left = ""
    let right = ""
    let isNeg = false
    // if decimal break into left/right of dot
    if (value.includes(".")) {
        left = value.substring(0, value.indexOf("."))
        right = value.substring(value.indexOf("."))
    } else {
        left = value;
    }
    // if negative number remove the -
    if (parseFloat(value) < 0) {
        isNeg = true
        left = left.substring(1);
    }

    // localeString adds the commas to the whole number. Add back the minus if applicable
    return isNeg ? "-" + parseFloat(left).toLocaleString() + right : parseFloat(left).toLocaleString() + right
}

export default commafy;