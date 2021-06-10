// 算法思路：随机去除一个值进行划分，大于该值放右边，小于该值放左边
// 该算法在经典快拍的基础上刚经过荷兰国旗思想和随机思想进行了改造
// 时间复杂度：O（nlogn)
// 空间复杂度：O(logn)

let arr = [22, 12, 16, 7, 9, 1, 2, 4];

function QuickSort(arr) {
    if (arr == null || arr.length <= 0)
        return [];
    Quick(arr, 0, arr.length - 1);
    return arr;
}

function Quick(arr, L, R) {
    if (L < R) {
        // 随机找一个数，和最后一个数交换，将经典排序变为快排
        swap(arr, L + Math.floor(Math.random() * (R - L + 1)), R);
        // 利用荷兰国旗问题获得划分边界，返回的值是小于区域的最大索引和大于区域的最小索引，
        // 在这里利用荷兰国旗问题将等于区域部分就不做改动了
        let tempArr = partition(arr, L, R, arr[R]);
        console.log(tempArr);
        Quick(arr, L, tempArr[0]);
        Quick(arr, tempArr[1], R);
    }
}
// 返回的值是小于区域的最后一个索引和大于区域的第一个索引
function partition(arr, L, R, num) {
    let less = L - 1;
    let more = R + 1;
    let cur = L;
    while (cur < more) {
        if (arr[cur] < num) {
            swap(arr, ++less, cur++);
        } else if (arr[cur] > num) {
            swap(arr, --more, cur);
        } else {
            cur++;
        }
    }
    return [less, more];
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(QuickSort(arr));