const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories to safely remove before starting dev server
const dirsToClean = [
  path.join(__dirname, 'out'),
  path.join(__dirname, '.next')
];

// Function to safely remove directories
function safeRemoveDir(dir) {
  console.log(`Checking if ${dir} exists...`);
  try {
    if (fs.existsSync(dir)) {
      console.log(`Removing ${dir}...`);
      
      // On Windows, using rimraf is safer than fs.rmSync for handling symlinks
      try {
        // First try native Node.js removal
        fs.rmSync(dir, { recursive: true, force: true });
        console.log(`Successfully removed ${dir} using fs.rmSync`);
      } catch (e) {
        console.log(`Failed to remove using fs.rmSync: ${e.message}`);
        
        // Fall back to using rmdir /s /q on Windows
        try {
          if (process.platform === 'win32') {
            execSync(`rmdir /s /q "${dir}"`, { stdio: 'inherit' });
            console.log(`Successfully removed ${dir} using rmdir command`);
          } else {
            execSync(`rm -rf "${dir}"`, { stdio: 'inherit' });
            console.log(`Successfully removed ${dir} using rm command`);
          }
        } catch (cmdError) {
          console.log(`Warning: Could not remove ${dir}: ${cmdError.message}`);
        }
      }
    } else {
      console.log(`Directory ${dir} does not exist, skipping`);
    }
  } catch (error) {
    console.log(`Error checking/removing ${dir}: ${error.message}`);
  }
}

// Clean directories
dirsToClean.forEach(safeRemoveDir);

console.log('Cleanup completed successfully!');
