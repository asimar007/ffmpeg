const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

// Function to convert .tse to .mp4
function convertTseToMp4(inputFile, outputFile) {
    ffmpeg(inputFile)
        .output(outputFile)
        .videoCodec('libx264')  // Set video codec
        .audioCodec('aac')      // Set audio codec
        .on('end', () => {
            console.log(`Conversion finished: ${outputFile}`);
        })
        .on('error', (err) => {
            console.log('Error:', err);
        })
        .run();
}

// Define input and output file paths
const inputFile = path.join(__dirname, 'master-1362865.5908652542-1.tse');  // Path to your .tse file
const outputFile = path.join(__dirname, 'output.mp4'); // Desired output .mp4 file

// Call the function to convert the file
convertTseToMp4(inputFile, outputFile);
