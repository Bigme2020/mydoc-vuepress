# Ref 全家桶

## toRefs

`toRefs()` 的参数必须是响应式，里边的各值才会是响应式的

```typescript
interface test {
  name: string
  age: number
}
let { name, age } = toRefs<test>({ // 这里toRefs传的是普通对象本身不是响应式的，所以解构出来的也不是响应式
  name: 'sjy',
  age: 1
})
const handleClick = () => {
  name.value = 'abc'
  age.value = 11
  console.log(name.value, age.value); // ‘abc’ 11 但是并不会在视图上有所更新，因为不是响应式数据
}
```

## toRef

`toRef()` 的参数也同样必须是响应式的，被转变为 ref 的值才会在视图上响应式更新

```typescript
const refName = toRef({
  name: 'sjy',
  age: 1
}, 'name')
const handleClick = () => {
  refName.value = 'abc'
  console.log(refName.value); // 'abc' 但并没有在视图上进行更新
}
```

## ref

`ref()`获取元素时要**注意：** 配合组件内的 `defineExpose()` 

```typescript
import TableDialog from './TableDialog.vue'

// 组件内 defineExpose 只导出了dialogShow，所以这里定义一下类型并赋给 ref
type TableDialog = {
  dialogShow: boolean
}
const tableDialog = ref<TableDialog>()

// 注意：vue3中setup阶段是访问不到元素ref的，因为还没dom还没挂载上，必须在onMounted钩子中运行相关代码
onMounted(() => {
  console.log(tableDialog.value?.dialogShow);
})
```

## markRaw

`markRaw()`可以不对其参数做代理

```typescript
// 举一个比较直接的例子 vue3的setup语法中
// 动态组件需要引入组件的同时，将组件赋值给值
type DataItem = {
  name: string,
  component: any
}
const data = reactive<DataItem[]>([
  {
    name: 'A',
    // component: 'A' // 在options api中可以这样写，但是vue3 setup中不能这样写，因为vue2是传组件名而vue3是传组件实例
    component: markRaw(A) // 这边要选择markRaw(A)来将组件取消代理，减少性能损失
  },
  {
    name: 'B',
    component: markRaw(B)
  }
])
const currentComponent = ref(data[0].component)
```