// 算法排序：
/* 
1、准备桶：数组中有N个数就准备N+1个桶；
2、遍历一遍数组，找到最大值max和最小值min，
若max=min,则差值为0；若max≠min,则最小值放0号桶，
最大值放N号桶，剩下的数属于哪个范围就进哪个桶；
3、根据鸽笼原理，则肯定有一个空桶，设计该桶的目的是为了否定最大值在一个桶中，
则最大差值的两个数一定来自于两个桶，单空桶两侧并不一定是最大值
4、所以只记录所有进入该桶的最小值min和最大值max，和一个布尔值表示该桶是否有值
5、所以遍历这个数组，如果桶是空的，则跳到下一个数；
非空，则最大差值=当前桶min-上一个非空桶max，用全局变量更新最大值
*/
// 时间复杂度：O(N)
// 空间复杂度：O(N)

let arr = [22, 12, 16, 7, 9, 1, 10, 2, 4];

function BucketSort(arr) {
    if (arr == null || arr.length <= 0) {
        return [];
    }
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    // 需要的桶的个数
    let bucketNum = parseInt((max - min) / arr.length) + 1;
    // 根据桶的个数创建对应的数组
    let bucketArr = new Array(bucketNum);
    // 桶数组中的每一个元素都是一个数组
    for (let i = 0; i < bucketNum; i++) {
        bucketArr[i] = new Array();
    }
    // 将arr中的每个元素归类到对应的桶中
    for (var i of arr) {
        // 元素应该归属的桶号
        let num = parseInt((i - min) / arr.length);
        bucketArr[num].push(i);
    }
    // 对桶数组中每个元素数组进行排序
    for (var i of bucketArr) {
        i.sort();
    }
    // 记录数组归并的index
    let k = 0;
    // 进行数组归并
    for (var i = 0; i < bucketArr.length; i++) {
        for (var j = 0; j < bucketArr[i].length; j++) {
            arr[k++] = bucketArr[i][j];
        }
    }
    return arr;
}

console.log(BucketSort(arr));