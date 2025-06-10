#!/bin/bash

# Initialize Git repository
if [ ! -d .git ]; then
  git init
fi

# Initialize npm project with default settings
if [ ! -f package.json ]; then
  npm init -y
fi

# Install development dependencies in one command
npm install --save-dev \
  hardhat \
  ethers \
  dotenv \
  @nomiclabs/hardhat-ethers \
  @nomiclabs/hardhat-waffle \
  mocha \
  chai

# Create project directories and placeholder files
for dir in contracts schema lib scripts test deployments; do
  mkdir -p "$dir"
  touch "$dir/.gitkeep"
done

# Ensure this script is executable
chmod +x "$(basename "$0")"
