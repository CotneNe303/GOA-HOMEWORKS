function arr(arr1, arr2) {
    const copy = [...arr1];
    if (!Array.isArray(copy) || !Array.isArray(arr2)) {
        return false;
    }
    if (copy.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < copy.length; i++) {
        if (copy[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

