# Install Yarn

[Homepage](https://yarnpkg.org/) [Github](https://github.com/yarnpkg/yarn)

Yarn is a package manager of node.js.
It is faster, more reliable and more secure then npm.

## Pre-requirement
You have to install node.js before start to install. Please refer to the [node.js install guide](./Node.md)

## Windows
Please download and install the msi file from [https://yarnpkg.com/en/docs/install#windows-tab](https://yarnpkg.com/en/docs/install#windows-tab)

## Mac
```bash
brew update
brew install yarn
touch ~/.bashrc
echo 'export PATH="$PATH:`yarn global bin`"' >> ~/.bashrc
source ~/.bashrc
```

## Debian and Ubuntu
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn
```

## RHEL and CentOS
```bash
sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
sudo yum install yarn
```