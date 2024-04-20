**Introduction:**

zustand-cli is a command-line tool for quickly generating Zustand state management templates. It helps you to easily create Zustand store and use files based on JavaScript or TypeScript. By using zustand-cli, you can save time and maintain the consistency of your project structure.

**Key Features:**

1. Automatically generate Zustand store templates (supports JavaScript and TypeScript).
2. Optionally generate Zustand use files (supports JavaScript and TypeScript).
3. Simplify the creation process of state management files.
4. Quick start, no additional configuration required.

**Installation:**

To install zustand-cli, run the following command:

```bash
npm i -g zustand-cli
```

**How to Use:**

1. Run `zustand new` in the command line.
2. Choose the type of template you want to generate (JavaScript or TypeScript).
3. Choose whether to generate a usage file according to the prompts.
4. The automatically generated files will be created in the current directory.

```bash
NOLANKYWU-MB1:sh nolan$ zustand new
? Which template do you want to generate? TypeScript
? Do you want to generate a usage file? Yes
Created zustandTemplateTS.ts
Created zustandUseTemplateTS.tsx
```

Now, you can start using the automatically generated Zustand store and use files to simplify your state management workflow. Try zustand-cli to make your development process more relaxed and enjoyable!