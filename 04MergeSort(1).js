// 归并排序（合并排序）
// 算法思路：(后续遍历)
/*
1.将数组分为均匀的两部分；
2。左侧排序
3.右侧排序
4.准备一个辅助数组，用外排的方式，从小到大依次插入，
直到有一组移动到尾部，将另一个数组剩余部分拷贝到末尾
5.将辅助数组拷贝回原数组 */
// 时间复杂度：O(nlogn)
// 空间复杂度：O(n)

// 测试数据1：数组中有偶数个数字，找不到正中间的值
let arr1 = [22, 12, 16, 7, 9, 1, 2, 4];
// 测试数据2：数组中有奇数个数字，找的到正中间的值
let arr2 = [22, 12, 16, 7, 9, 1, 10, 2, 4];

// 法1：递归实现
function MergeSort(arr) {
    if (arr == null || arr.length <= 0) {
        return [];
    }
    sortProcess(arr, 0, arr.length - 1);
    return arr;
}

function sortProcess(arr, L, R) {
    //递归的终止条件，就是左右边界索引一样
    if (L == R) {
        return;
    }
    let middle = L + ((R - L) >> 1); //找出中间值
    sortProcess(arr, L, middle); //对左侧部分进行递归
    sortProcess(arr, middle + 1, R); //对右侧部分进行递归
    merge(arr, L, middle, R); //然后利用外排方式进行结合
}

function merge(arr, L, middle, R) {
    let help = [];
    let l = L;
    let r = middle + 1;
    let index = 0;
    //利用外排方式进行
    while (l <= middle && r <= R) {
        help[index++] = arr[l] < arr[r] ? arr[l++] : arr[r++];
    }
    while (l <= middle) {
        help.push(arr[l++]);
    }
    while (r <= R) {
        help.push(arr[r++]);
    }

    arr.splice(L, help.length, ...help); //这个利用了ES6的语法
}

console.log(MergeSort(arr1));
console.log(MergeSort(arr2));