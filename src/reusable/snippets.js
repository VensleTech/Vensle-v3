employees.sort((a, b) => {
    let da = new Date(a.joinedDate),
        db = new Date(b.joinedDate);
    return da - db;
});

employees.sort((a, b) => {
    let fa = a.firstName.toLowerCase(),
        fb = b.firstName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
