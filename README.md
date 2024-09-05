# @mac-applications/code

获取VSCode的配置信息

## 安装
```
npm i @mac-applications/code
```

## 使用


```typescript
import code from "@mac-applications/code"

const storage = code.getStorageSync()
console.log(storage);
```