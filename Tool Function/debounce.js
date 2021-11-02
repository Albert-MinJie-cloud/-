function debounce(foo, delay) {
    let timer;
    return () => {
        clearInterval(timer)
        timer = setTimeout(() => {
            foo()
        }, delay)
    }
}
