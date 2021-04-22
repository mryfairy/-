// 插入算法
// 算法思想：将一个新的数与前一个数进行大小比较，只要小于前一个，就交换位置
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)

let arr = [22, 12, 16, 7, 9, 1, 2, 4];

function InsertSort(arr) {
    if (arr == null || arr.length <= 0) return [];
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            swap(arr, j, j + 1);
        }
    }
    return arr;
}

function swap(arr, i, j) {
    // 交换两个数的位置
    // 法1：借助temp变量交换位置
    /* let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; */
    // 法2：使用异或运算符，交换两个数的位置
    // 异或运算符的使用规则：X^X=0,X^0=X
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
}
console.log(InsertSort(arr));