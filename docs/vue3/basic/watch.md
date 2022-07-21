# Watch全家桶--test

## watch

::: tip
`watch`只能监听响应式数据
:::
`watch` 的用法

```typescript
const refName = toRef(ref({
  name: 'sjy',
  age: 1
}).value, 'name')
const refAge = toRef(ref({
  name: 'sjy',
  age: 1
}).value, 'age')
const handleClick = () => {
  refName.value = 'abc'
  console.log(refName.value);
}

watch(refName, (newValue, oldValue) => { // vue3 watch基础用法 只能监听响应式数据
  console.log(oldValue, newValue);
})
watch([refName, refAge], (newValue, oldValue) => { // 监听多个，返回的newValue和oldValue也是数组
  console.log(oldValue, newValue);
})
```

::: tip
注意：在监听深层次的值时 `reactive` 能自动监听到，而 `ref` 需要在 `watch` 中加入第三个参数来进行深度监听
:::

::: warning
BUG：vue3 的 `watch` 在进行深层次监听时无论是 `ref` 还是 `reactive` 都会发生 newValue 和 oldValue 是一样的值的BUG
:::

```typescript
const objRef = ref({
  property: {
    name: 'sjy',
    age: 1
  }
})
const objReactive = reactive({
  property: {
    name: 'sjy',
    age: 1
  }
})
const handleClick = () => {
  objRef.value.property.name = 'abc'
  objReactive.property.name = 'abcReactive'
  console.log('objRef', objRef.value);
  console.log('objReactive', objReactive);
}

watch(objRef, (newValue, oldValue) => { // old 和 new 是一样的
  console.log('old', oldValue, 'new', newValue);
}, {
  deep: true
})
watch(objReactive, (newValue, oldValue) => { // old 和 new 是一样的
  console.log('old', oldValue, 'new', newValue);
})

// 注意：vue3的watch在进行深层次监听时无论是ref还是reactive都会发生newValue和oldValue是一样的值的BUG
// 在加入immediate:true后第一次进入时的监听调用没有BUG，oldValue始终是undefined
```

::: tip
注意：还可以通过第一个参数传函数的方式来指定监听对象内的某一个属性，也只有这一个方式能监听对象内指定属性
:::

```typescript
const count = ref(0)
const objReactive = reactive({
  property: {
    name: 'sjy',
    age: 1
  }
})
const arr = reactive([1,2,3])
const handleClick = () => {
  objReactive.property.name = 'abcReactive'
  arr.push(4)
  arr[0] = count.value++
  console.log('objReactive', objReactive);
}

// 可以监听对象某一属性，也可以数组某一索引...
// 在以函数监听的时候，不会出现上面的newValue和oldValue相等的BUG
watch(() => objReactive.property.name, (newValue, oldValue) => { // old sjy new abcReactive
  console.log('old', oldValue, 'new', newValue);
})
watch(() => arr[0], (newValue, oldValue) => { // old 1 new 0
  console.log('old', oldValue, 'new', newValue);
})
```

## watchEffect

`watchEffect` 的用法

```typescript
const message = ref<string>('飞机')

// 返回一个函数，可以用来手动停止清除监听器，以防内存泄漏
// 值得注意：同步执行的监听器是会在组件销毁时自动清除的，而异步生成的监听器是需要手动清除的，具体看官方文档
const stop = watchEffect((oninvalidate) => {
    const ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
    console.log(ipt, 'elllllllllllllll')
    
    // 这个回调会在第二次以及之后的一开始调用
    oninvalidate(() => {
        console.log('before')
    })
})
```