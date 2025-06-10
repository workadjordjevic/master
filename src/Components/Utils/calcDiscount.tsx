export function calcDiscount(originalPrice: number, discount: number = 0) {
    return originalPrice - (originalPrice*(discount*0.01));
}