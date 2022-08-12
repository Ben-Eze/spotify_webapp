const append = (getter, setter, newVal) => {
    setter([...getter, newVal]);
}

