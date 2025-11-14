/**
 * Script để tự động thêm responsive-enhancements.css vào tất cả HTML files
 * Run: node add-responsive-to-all.js
 */

const fs = require('fs');
const path = require('path');

// Responsive CSS link to add
const responsiveLink = '<link rel="stylesheet" href="responsive-enhancements.css">';
const responsiveLinkSolutions = '<link rel="stylesheet" href="../responsive-enhancements.css">';

// Files in root directory
const rootFiles = [
    'about.html',
    'services.html',
    'ocean-freight.html',
    'air-freight.html',
    'air-freight-full.html',
    'land-transport.html',
    'warehousing.html',
    'customs-clearance.html',
    'supply-chain.html',
    'contact.html',
    'quote-calculator.html',
    'news.html',
    'locations.html',
    'mol-group.html',
    'tracking.html',
    '404.html',
    'about-new.html'
];

// Files in solutions directory
const solutionFiles = [
    'solutions/index.html',
    'solutions/automotive.html',
    'solutions/electronics.html',
    'solutions/fashion.html',
    'solutions/food-beverage.html',
    'solutions/manufacturing.html'
];

/**
 * Add responsive CSS link to HTML file
 */
function addResponsiveCss(filePath, isInSolutions = false) {
    try {
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.log(`⚠️  File not found: ${filePath}`);
            return false;
        }

        // Read file content
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Choose correct link based on location
        const linkToAdd = isInSolutions ? responsiveLinkSolutions : responsiveLink;
        
        // Check if responsive CSS is already added
        if (content.includes('responsive-enhancements.css')) {
            console.log(`✅ Already added: ${filePath}`);
            return true;
        }

        // Find where to insert (after last CSS link, before closing </head>)
        const headCloseIndex = content.indexOf('</head>');
        if (headCloseIndex === -1) {
            console.log(`⚠️  No </head> tag found in: ${filePath}`);
            return false;
        }

        // Find last <link rel="stylesheet" before </head>
        const headContent = content.substring(0, headCloseIndex);
        const lastStylesheetIndex = headContent.lastIndexOf('<link rel="stylesheet"');
        
        if (lastStylesheetIndex === -1) {
            console.log(`⚠️  No stylesheet link found in: ${filePath}`);
            return false;
        }

        // Find end of last stylesheet link
        const insertPosition = content.indexOf('>', lastStylesheetIndex) + 1;
        
        // Insert responsive CSS link
        const newContent = 
            content.substring(0, insertPosition) +
            '\n    ' + linkToAdd +
            content.substring(insertPosition);
        
        // Write back to file
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`✅ Added to: ${filePath}`);
        return true;
        
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

/**
 * Main execution
 */
function main() {
    console.log('🚀 Starting to add responsive-enhancements.css to all HTML files...\n');
    
    let successCount = 0;
    let totalCount = 0;
    
    // Process root files
    console.log('📁 Processing root directory files...');
    rootFiles.forEach(file => {
        totalCount++;
        if (addResponsiveCss(file, false)) {
            successCount++;
        }
    });
    
    console.log('\n📁 Processing solutions directory files...');
    solutionFiles.forEach(file => {
        totalCount++;
        if (addResponsiveCss(file, true)) {
            successCount++;
        }
    });
    
    // Summary
    console.log('\n' + '='.repeat(50));
    console.log(`✨ Completed!`);
    console.log(`   Total files: ${totalCount}`);
    console.log(`   Successful: ${successCount}`);
    console.log(`   Failed: ${totalCount - successCount}`);
    console.log('='.repeat(50));
    
    if (successCount === totalCount) {
        console.log('\n🎉 All files updated successfully!');
    } else {
        console.log('\n⚠️  Some files were not updated. Please check the logs above.');
    }
}

// Run the script
main();
