import system from 'node:fs'

export default class Markdown {
  private extension: string = ".md"
  private lineBreak: string = "\n\n";

  constructor(private readonly name: string) { }

  addTitle(content: string) {
    
  }
  
  private write(content: string) {
    if (system.existsSync(`${this.name}${this.extension}`)) {
      system.appendFileSync(this.name, `${content}${this.lineBreak}`, 'utf8');
      return;
    }

    system.writeFileSync(this.name, `${content}${this.lineBreak}`);
  }
}