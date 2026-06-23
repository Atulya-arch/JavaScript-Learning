// PATTERNS:
// process.stdout.write("Hello ");
// process.stdout.write("Hello ");
// process.stdout.write("Hello ");

const prompt = require ("prompt-sync")();
let n = Number(prompt("Enter a number: "));

for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        process.stdout.write("# ");
    }
    console.log();
}

console.log();

for(let i=0; i<n; i++) {
    for(let j=0; j<=i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

console.log();

for(let i=1; i<=n; i++) {
    for(let j=1; j<=i; j++) {
        process.stdout.write(j + " ");
    }
    console.log();
}

console.log();

for(let i=1; i<=n; i++) {
    let ascii = 65; // A -> 65
    for(let j=1; j<=i; j++) {
        process.stdout.write(String.fromCharCode(ascii) + " "); // NOTE THIS FUNCTION number to character
        ascii++;
    }
    console.log();
}

console.log();

for(let i=n; i>=1; i--) {
    for(let j=i; j>=1; j--) {
        process.stdout.write("* ");
    }
    console.log();
}

console.log();

for(let i=1; i<=n; i++) {
    for(let j=n-1; j>=i; j--) {
        process.stdout.write("  ");
    }
    for(let j=1; j<=i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

console.log();

for(let i=1; i<=n; i++) {
    for(let j=1; j<=n; j++) {
        if(i + j === n + 1 || i === j) // Only the diagonals
            process.stdout.write("* ");
        else
            process.stdout.write("  ");
    }
    console.log();
}

console.log();

for(let i = 1; i <= n; i++) {
    for(let j = 1; j < 2*n; j++) {
        if(i + j === 2 * n || i === j) 
            process.stdout.write("* "); // We create 2*n - 1 columns for each row
        else
            process.stdout.write("  ");
    }
    console.log();
}

console.log();