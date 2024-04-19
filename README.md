
**简介：**

zustand-cli 是一个命令行工具，用于快速生成 Zustand 状态管理模板。它可以帮助您轻松创建基于 JavaScript 或 TypeScript 的 Zustand 存储和使用文件。通过使用 zustand-cli，您可以节省时间并保持项目结构的一致性。

**主要功能：**

1. 自动生成 Zustand 存储模板（支持 JavaScript 和 TypeScript）。
2. 可选生成 Zustand 使用文件（支持 JavaScript 和 TypeScript）。
3. 简化状态管理文件的创建过程。
4. 快速入门，无需额外配置。

**安装：**

要安装 zustand-cli，请运行以下命令：

```bash
npm i -g @tencent/zustand-cli
```

**使用方法：**

1. 在命令行中运行 `zustand new`。
2. 选择您要生成的模板类型（JavaScript 或 TypeScript）。
3. 根据提示选择是否生成使用文件。
4. 自动生成的文件将在当前目录中创建。

![Image description](./assets/image1.png)

![Image description](./assets/image2.png)

```bash
NOLANKYWU-MB1:sh nolan$ zustand new
? Which template do you want to generate? TypeScript
? Do you want to generate a usage file? Yes
Created zustandTemplateTS.ts
Created zustandUseTemplateTS.tsx
```

现在，您可以开始使用自动生成的 Zustand 存储和使用文件，简化您的状态管理工作流程。尝试 zustand-cli，让您的开发过程更轻松愉快！


