




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount) {
    const taxRate = 0.1 // 10% tax rate
    return amount * taxRate
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }       
}

function isPalindrome(word) {
    if (word === word.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}


function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100)
    return originalPrice - discountAmount
}