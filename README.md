<!--
 * @Author: Chris-wang chriswang64@foxmail.com
 * @Date: 2025-04-28 01:16:32
 * @LastEditors: Chris-wang chriswang64@foxmail.com
 * @LastEditTime: 2025-04-28 01:16:39
 * @FilePath: \admin-pro\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# admin-pro 管理后台

## 技术栈
- **Vue 3**：现代化渐进式前端框架
- **TypeScript**：增强代码可维护性和类型安全
- **Vite**：极速的前端构建工具
- **Element Plus**：基于 Vue 3 的企业级 UI 组件库
- **Pinia**：新一代状态管理库
- **Vue Router**：官方路由解决方案
- **Axios**：网络请求库

## 项目启动

### 1. 安装依赖

使用 npm：
```bash
npm install
```
或使用 pnpm：
```bash
pnpm install
```

### 2. 启动开发环境

```bash
npm run dev
```

开发服务器默认端口为 `9000`，可在浏览器访问 [http://localhost:9000](http://localhost:9000)。

### 3. 构建生产包

```bash
npm run build
```

构建完成后，生产文件位于 `dist` 目录。

## 目录结构简介
- `src/`：源码目录
- `src/views/`：页面组件
- `src/router/`：路由配置
- `src/store/`：状态管理
- `src/http/`：网络请求
- `src/styles/`：全局样式
- `types/`：类型定义

## 其他
如需更多配置说明，请参考 `vite.config.ts` 和 `package.json` 文件。