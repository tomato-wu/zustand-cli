#!/usr/bin/env node
import { program } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import chalk from 'chalk';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

async function main() {
  program
    .command('new')
    .description('Generate a new Zustand template')
    .action(async () => {
      const questions = [
        {
          type: 'list',
          name: 'fileType',
          message: 'Which template do you want to generate?',
          choices: ['TypeScript', 'JavaScript'],
        },
        {
          type: 'confirm',
          name: 'generateUsageFile',
          message: 'Do you want to generate a usage file?',
        },
      ];

      const answers = await inquirer.prompt(questions);
      const { fileType, generateUsageFile } = answers;
      const isTypeScript = fileType === 'TypeScript';

      // 生成zustand 文件
      const templateFile = isTypeScript
        ? 'zustandTemplateTS.ts'
        : 'zustandTemplateJS.js';
      const templateContent = await fs.readFile(
        path.join(dirname(fileURLToPath(import.meta.url)), templateFile),
        'utf-8'
      );
      await fs.writeFile(templateFile, templateContent);
      console.log(chalk.green(`Created ${templateFile}`));

      // 生成zustand 使用文件
      if (generateUsageFile) {
        const usageFile = isTypeScript
          ? 'zustandUseTemplateTS.tsx'
          : 'zustandUseTemplateJS.jsx';
        const usageContent = await fs.readFile(
          path.join(dirname(fileURLToPath(import.meta.url)), usageFile),
          'utf-8'
        );

        await fs.writeFile(usageFile, usageContent);
        console.log(chalk.green(`Created ${usageFile}`));
      }
    });

  program.parse(process.argv);
}

main();