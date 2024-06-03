#!/bin/bash

# A simple Bash script to convert all markdown files in ./md to HTML files in ./static/mdHTML

# This script requires pandoc. On Ubuntu use `sudo apt install pandoc` to install.

# Check if the source directory exists
src_dir="./md"
if [ ! -d "$src_dir" ]; then
    echo "Source directory $src_dir does not exist. Please create it and add markdown files."
    exit 1
fi

# Check if the destination directory exists, if not create it
dest_dir="./static/mdHTML"
if [ ! -d "$dest_dir" ]; then
    echo "Destination directory $dest_dir does not exist. Creating it now."
    mkdir -p "$dest_dir"
fi

# Loop through all markdown files in the source directory
shopt -s nullglob
for file in "$src_dir"/*.md; do
    if [ -f "$file" ]; then
        # Get the base name of the file without the directory
        base_name=$(basename "$file" .md)
        # Convert the markdown file to HTML and save it in the destination directory
        pandoc -f markdown "$file" -o "$dest_dir/$base_name.html"
        echo "Converted $file to $dest_dir/$base_name.html"
    fi
done

# Check if no markdown files were found
if [ "$(ls -A $src_dir/*.md 2>/dev/null)" = "" ]; then
    echo "No markdown files found in $src_dir"
fi

echo "Conversion process completed."
