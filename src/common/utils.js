export function debounce(func, delay) {
  let timer = null
  return function(...args) {
     //如果下一次来的非常频繁就取消掉上一次的刷新
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }

}