const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, '../../www.paisabazaar.com/www.paisabazaar.com/credit-cards/index.html');
if (!fs.existsSync(htmlPath)) {
  console.log('File not found:', htmlPath);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
console.log('HTML size:', (html.length / 1024 / 1024).toFixed(2), 'MB');

// Look for card containers or card names
console.log('Includes HDFC Infinia?', html.includes('HDFC Infinia'));
console.log('Includes Axis Atlas?', html.includes('Axis Atlas'));
console.log('Includes know-more?', html.includes('know-more') || html.includes('know_more') || html.includes('knowMore'));
console.log('Includes read-more?', html.includes('read-more') || html.includes('read_more'));

// Find where HDFC Infinia appears
const idx = html.indexOf('HDFC Infinia');
console.log('Snippet around HDFC Infinia (part 2):');
console.log(html.substring(idx + 7000, Math.min(html.length, idx + 10000)));






