export function steps(n: number): void {
    for(let i = 0; i < n; i++) {
        let line = "'";
        for(let j = 0; j < n; j++) {
            if(j <= i) line += '#';
            else line += ' ';
        }
        line += "'";
        console.log(line);
    }
}

steps(4);