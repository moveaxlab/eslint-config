import { CLIEngine } from 'eslint';
import { resolve, relative } from 'path';

const cli = new CLIEngine({
  useEslintrc: true
});

cli.executeOnFiles(['./example/nice.ts']).results.forEach(result => {
  it(`checks that ${relative(resolve('.'), result.filePath)} passes linting`, () => {
    expect(result.errorCount).toBe(0);
    expect(result.warningCount).toBe(0);
  });
});

cli.executeOnFiles(['./example/ugly.ts']).results.forEach(result => {
  it(`checks that ${relative(resolve('.'), result.filePath)} fails to pass linting`, () => {
    expect(result.errorCount).toBeGreaterThan(0);
    expect(result.warningCount).toBeGreaterThan(0);
    expect(result.messages).toMatchSnapshot();
  });
});
