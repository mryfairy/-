// 堆排序思路：
// 1、让数组编程大根堆
// 2、把最后一个位置和堆顶做交换
// 3、则最大值在最后，剩下部分再做大根堆处理，将最后一个值与堆顶做交换
// 4、重复进行，知道减完为止，这样最终完成一个升序排序
// 时间复杂度：O(nlogn)
// 空间复杂度：O(1)

// 测试数据1：数组中有偶数个数字，找不到正中间的值
let arr1 = [7, 9, 1, 2, 4, 22, 12, 16];
// 测试数据2：数组中有奇数个数字，找的到正中间的值
let arr2 = [22, 12, 16, 7, 9, 1, 10, 2, 4];

function HeapSort(arr) {
    if (arr == null || arr.length <= 0) {
        return [];
    }
    // 第一次构建大顶堆
    for (let i = 0; i < arr.length; i++) {
        HeapInsert(arr, i);
    }
    // 创建size变量，存储构建堆的元素个数
    let size = arr.length;
    // 将第一次构建出的大顶堆的堆顶push出栈
    swap(arr, 0, --size);
    while (size > 0) {
        // 减堆过程
        Heapify(arr, 0, size);
        swap(arr, 0, --size);
    }
    return arr;
}
// 第一次构建大顶堆
function HeapInsert(arr, index) {
    while (arr[index] > arr[parseInt((index - 1) / 2)]) {
        swap(arr, index, parseInt((index - 1) / 2));
        index = parseInt((index - 1) / 2);
    }
}
// 减堆过程
function Heapify(arr, index, size) {
    var leftChild = 2 * index + 1;
    while (leftChild < size) {
        let largest = (leftChild + 1 < size && arr[leftChild + 1] > arr[leftChild]) ? leftChild + 1 : leftChild;
        largest = arr[index] > arr[largest] ? index : largest;

        if (index == largest) {
            break;
        }
        swap(arr, index, largest);
        index = largest;
        leftChild = 2 * index + 1;
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(HeapSort(arr1));