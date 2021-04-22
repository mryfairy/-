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

// 法2：循环实现
function MergeSort(arr) {
    let len = arr.length;
    if (arr == null || len <= 0) {
        return [];
    }
    // i每次乘2，是因为每次合并以后小组元素就编程两倍个
    for (let i = 1; i < len; i *= 2) {
        let index = 0; //第一组的开始索引
        while (2 * i + index <= len) {
            index += 2 * i;
            merge(arr, index - 2 * i, index - i, index);
        }
        // 走到这里，说明剩余两个小组，
        // 但是其中有一个小组的数据数量已经不足2的幂次方个
        if (index + i < len) {
            merge(arr, index, index + i, len);
        }
    }
    return arr;
}

function merge(arr, start, mid, end) {
    let help = [];
    let l = start,
        r = mid;
    let index = 0;
    while (l < mid && r < end) {
        help[index++] = arr[l] < arr[r] ? arr[l++] : arr[r++];
    }
    while (l < mid) {
        help[index++] = arr[l++];
    }
    while (r < end) {
        help[index++] = arr[r++];
    }
    // 将help数组中的数据替换进入arr中
    arr.splice(start, help.length, ...help);
}

console.log(MergeSort(arr1));
console.log(MergeSort(arr2));