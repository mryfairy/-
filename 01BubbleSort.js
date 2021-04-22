// 冒泡排序
// 算法思想“遍历数组，然后将最大数沉的最底部，最小的数被冒泡到最前面
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)

let arr = [22, 12, 16, 7, 9, 1, 2, 4];

function BubbleSort(arr) {
    if (arr == null || arr.length <= 0)
        return [];
    let len = arr.length;
    for (let i = len - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1])
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

console.log(BubbleSort(arr));