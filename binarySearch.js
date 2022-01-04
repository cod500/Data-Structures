const binarySearch = (array, value) => {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (array[middle] !== value && start <= end) {
        if (value < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.florr((start + end) / 2);
    }
    return array[middle] === value ? middle : "value not found"
}

console.log(binarySearch([11, 22, 44, 55, 66, 77, 88], 55))