// 选择排序
// 算法思路：遍历数组，选择最小数放在头部位置
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)

let arr = [22, 12, 16, 7, 9, 1, 2, 4];

function SelectionSort(arr) {
    if (arr == null || arr.length <= 0)
        return [];
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        swap(arr, i, minIndex);
    }
    return arr;
}

function swap(arr, i, j) {
    // 交换两个数的位置
    // 法1：借助temp变量交换位置
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // 法2：使用异或运算符，交换两个数的位置
    // 异或运算符的使用规则：X^X=0,X^0=X
    /* arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j]; */
}
console.log(SelectionSort(arr));